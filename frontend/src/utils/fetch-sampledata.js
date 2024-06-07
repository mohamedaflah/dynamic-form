import { axiosInstance } from "../constants/axiosInstance";

export const fetchSampleData = async () => {
  try {
    const { data } = await axiosInstance.get(`/api/form-data`);
    console.log("🚀 ~ fetchSampleData ~ data:", data);
    return data.data ? data.data : [{}];
  } catch (error) {
    console.log("🚀 ~ fetchSampleData ~ error:", error);
  }
};
