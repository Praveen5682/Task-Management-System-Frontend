import axiosInstance from "../axiosMiddleware";

const register = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/reg", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export default register;
