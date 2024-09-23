import axiosInstance from './axiosInstance';

export const createInvoice = async (formData) => {
    try {
        const response = await axiosInstance.post('/owner/invoices/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error creating agency');
    }
};
