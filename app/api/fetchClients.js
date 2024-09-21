import axiosInstance from "./axiosInstance";

export const fetchClients = async () => {
    try {
        const response = await axiosInstance.get("/owner/create-client");
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching clients")
    }
}