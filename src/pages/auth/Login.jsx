import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../services/auth/login";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import loginImg from "../../../assets/login.jpg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login: saveToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = data?.data?.token;
      saveToken(token);
      const decoded = jwtDecode(token);
      toast.success("Login Successful!");
      navigate("/");
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image */}
      {/* Left Image + Text */}
      <div className="hidden md:flex flex-col items-center justify-center px-16 bg-black">
        <img
          src={loginImg}
          alt="Login"
          className="w-3/4 mb-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        />

        <h3 className="text-3xl font-bold text-white mb-3 text-center">
          Welcome Back 👋
        </h3>

        <p className="text-gray-400 text-center max-w-md leading-relaxed">
          Login to manage your dashboard, track progress, and collaborate with
          your team efficiently.
        </p>
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-sm mb-6">
            New user?{" "}
            <Link to="/signup" className="text-green-600 font-semibold">
              Create account
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-3 focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full border p-3 focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-green-600 cursor-pointer">
            Forgot Password?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
