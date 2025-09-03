import axiosInstance from "@/utils/axiosInstance";
import { headers } from "@/utils/constants";

export const registerPatient = async ({ formData, accessToken }) => {
  return await axiosInstance.post(
    "/patients/register",
    formData,
    headers(accessToken)
  );
};

export const getPatient = async (accessToken) => {
  return await axiosInstance.get("/patients/me", headers(accessToken));
};

export const updatePatient = async ({ patientId, formData, accessToken }) => {
  return await axiosInstance.patch(
    `/patients/${patientId}/update`,
    formData,
    headers(accessToken)
  );
};

export const getAllPatients = async (searchParams, accessToken) => {
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const query = searchParams.get("query") || "";
  const gender = searchParams.get("gender") || "";
<<<<<<< HEAD
   const bloodGroup = searchParams.get("bloodGroup") || "";
  const params = new URLSearchParams(); //js
=======
  const bloodGroup = searchParams.get("bloodGroup") || "";
  const params = new URLSearchParams();
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  params.append("page", page);
  params.append("limit", limit);
  if (query) params.append("query", query);
  if (gender) params.append("gender", gender);
  if (bloodGroup) params.append("bloodGroup", bloodGroup);
  return await axiosInstance.get(
    `/patients/all?${params.toString()}`,
    headers(accessToken)
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
