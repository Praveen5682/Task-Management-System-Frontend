import axiosInstance from "../axiosMiddleware";

const login = async (authData) => {
  try {
    const response = await axiosInstance.post("/auth/login", authData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default login;
