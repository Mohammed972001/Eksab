import { useState, useEffect } from "react";
import { getAllChambers, getAllCities } from "@/app/api/competitionApi";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { validCompetitionIds } from "@/utils/validCompetitionIds";

export const useCompetitionForm = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [competitionTitle, setCompetitionTitle] = useState("إنشاء مسابقة جديدة (مسابقتك الخاصة)");
  const [competitionType, setCompetitionType] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [competitionId, setCompetitionId] = useState(null);
  const [chamberOptions, setChamberOptions] = useState<string[]>([]);
  const [cityOptions, setCityOptions] = useState<string[]>([]);

  useEffect(() => {
    const title = searchParams.get("title");
    if (title) setCompetitionTitle(decodeURIComponent(title));
    const typeFromQuery = searchParams.get("contentType");
    if (typeFromQuery) setCompetitionType(typeFromQuery);
  }, [searchParams]);

  useEffect(() => {
    const idStr = Array.isArray(id) ? id[0] : id;
    if (!validCompetitionIds.includes(idStr)) {
      router.push("/notfound");
    }
  }, [id, router]);

  useEffect(() => {
    getAllChambers().then(setChamberOptions).catch(console.error);
    getAllCities().then(setCityOptions).catch(console.error);
  }, []);

  return {
    competitionTitle,
    competitionType,
    activeStep,
    setActiveStep,
    competitionId,
    setCompetitionId,
    chamberOptions,
    cityOptions,
  };
};
