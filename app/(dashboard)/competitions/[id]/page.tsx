"use client";

import { useParams } from "next/navigation";
import React from "react";

const CompetitionDetailPage = () => {
  const params = useParams();
  const competitionId = params.id;  // Extract competition ID

  return (
    <div>
      <h1>Competition Details: {competitionId}</h1>
      {/* Fetch and display more info about the competition here */}
    </div>
  );
};

export default CompetitionDetailPage;
