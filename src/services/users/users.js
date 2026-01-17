import axiosInstance from "../axiosMiddleware";

const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/users/users");

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export default getUsers;
