import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import register from "../../services/auth/register";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const SignUp = () => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const regsiterationMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      toast.success(data.data.data.message);
      SetFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
      toast.error(error.response?.data?.message);
    },
  });

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    regsiterationMutation.mutate(formData);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-sm rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Join us and get started!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 text-white py-3 rounded-lg mt-2 hover:bg-blue-700 transition font-semibold cursor-pointer">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-4 ">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
