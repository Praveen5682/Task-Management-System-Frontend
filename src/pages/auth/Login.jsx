import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../services/auth/login";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });
  const { login: saveToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const decoded = jwtDecode(data?.data?.token);
      saveToken(data?.data?.token);

      console.log("Login successful:", data);
      toast.success("Login Successful!");

      if (decoded.role === 1) navigate("/");
      if (decoded.role === 2) navigate("/");
      if (decoded.role === 3) navigate("/");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.error("Login failed:", err);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    loginMutation.mutate(formData);
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white shadow-sm rounded-2xl p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
            <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-left">
              Welcome Back
            </h2>
            <p className="text-sm text-center sm:text-left">
              New user?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border  p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border  p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 text-white cursor-pointer py-3  mt-2 hover:bg-blue-700 transition-all font-medium">
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-4">
            <button className="text-blue-600 text-sm hover:underline">
              Forgot Password?
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
