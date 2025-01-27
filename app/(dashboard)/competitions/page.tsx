"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import CompetitionCard from "@/components/dashboard/competitions/CompetitionCard";
import CompetitionsHeader from "@/components/dashboard/competitions/CompetitionsHeader";
import NoCompetitions from "@/components/dashboard/competitions/NoCompetitions";
import TabsAndFilter from "@/components/dashboard/competitions/TabsAndFilter";

type Competition = {
  id: number;
  name: string;
  cityId: number;
  logoId: number;
  fromDate: string;
  toDate: string;
  status: string;
  numberOfDaysLeft: number;
  numberOfParticipantions: number;
};

const CompetitionsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("active");
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Use the useSession hook to access the session
  const { data: session, status } = useSession();

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        // Check if the session is still loading
        if (status === "loading") {
          return; // Wait for the session to load
        }

        // Check if the user is authenticated
        if (!session?.accessToken) {
          throw new Error("User is not authenticated");
        }

        // Use axios to make the POST request with the token
        const response = await axios.post(
          "https://mohasel.net/api/Client/Competitions/GetAllCompetitions",
          {
            pageIndex: 0,
            pageSize: 10,
            orderBy: "fromDate",
            isOrderByASC: true,
            search: {
              name: "",
              status:
                activeTab === "active"
                  ? "Active"
                  : activeTab === "draft"
                  ? "Draft"
                  : "Expired",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`, // Include the token in the headers
            },
          }
        );

        // Set the competitions data from the response
        setCompetitions(response.data.data);
      } catch (err: any) {
        // Handle errors
        setError(err.message || "Failed to fetch competitions");
      } finally {
        // Set loading to false after the request is complete
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, [activeTab, session, status]); // Re-fetch data when the activeTab, session, or status changes

  // Handle session loading state
  if (status === "loading") {
    return <div>Loading session</div>;
  }

  if (loading) {
    return <div>Loading competitions</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full h-full pb-20">
      <CompetitionsHeader />
      <TabsAndFilter activeTab={activeTab} switchTab={switchTab} />
      <div className="mt-10 w-full h-full">
        {competitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map((competition) => (
              <CompetitionCard
                key={competition.id}
                id={competition.id.toString()}
                status={competition.status}
                statusColor={
                  competition.status === "Active"
                    ? "bg-[#D6F5D6]"
                    : competition.status === "Draft"
                    ? "bg-[#E3E3E4]"
                    : "bg-[#FFE8D9]"
                }
                title={competition.name}
                location={`City ${competition.cityId}`}
                competitors={competition.numberOfParticipantions}
                timeLeft={competition.numberOfDaysLeft}
                dateRange={`${new Date(
                  competition.fromDate
                ).toLocaleDateString()} - ${new Date(
                  competition.toDate
                ).toLocaleDateString()}`}
                imageSrc={`https://example.com/logos/${competition.logoId}`}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[50%]">
            <NoCompetitions />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitionsPage;