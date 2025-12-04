import React from "react";
import axiosInstance from "../axiosMiddleware";

const login = async (authData) => {
  try {
    const response = await axiosInstance.post("/auth/login", authData);

    console.log("response", response);
  } catch (error) {
    console.error("Login error:", error);
  }
};

export default login;
