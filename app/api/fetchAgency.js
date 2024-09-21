import axiosInstance from "./axiosInstance";

export const fetchAgency = async () => {
    try {
        const response = await axiosInstance.get("/owner/agencies")
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error file fetching the agencies");
    }
}