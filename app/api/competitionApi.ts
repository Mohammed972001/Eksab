
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAllChambers = async (): Promise<string[]> => {
  const response = await axios.get(`${apiUrl}/Lookups/GetAllChambers`);
  return (response.data as { name: string }[]).map(chamber => chamber.name);
};

export const getAllCities = async (): Promise<string[]> => {
  const response = await axios.get(`${apiUrl}/Lookups/GetAllCities`);
  return (response.data as { name: string }[]).map(city => city.name);
};

export const createCompetitionDraft = async (draftData: any, token: string) => {
  const response = await axios.post(
    `${apiUrl}/Competitions/CreateCompetitionDraft`,
    draftData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateCompetitionDraft = async (draftData: any, token: string, draftId: any) => {
  const response = await axios.put(
    `${apiUrl}/Competitions/UpdateCompetitionDraft/${draftId}`,
    draftData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
