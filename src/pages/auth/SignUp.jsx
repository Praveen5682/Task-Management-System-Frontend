import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import register from "../../services/auth/register";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import signupImg from "../../../assets/signup.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success("Account created successfully");
      navigate("/login");
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image */}
      <div className="hidden md:flex flex-col items-center justify-center px-16 bg-black">
        <img
          src={signupImg}
          alt="Sign Up"
          className="w-3/4 mb-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        />

        <h3 className="text-3xl font-bold text-white mb-3 text-center">
          Join Us Today 🚀
        </h3>

        <p className="text-gray-400 text-center max-w-md leading-relaxed">
          Create an account to manage projects, track progress, and collaborate
          seamlessly with your team.
        </p>
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-sm mb-6">Join us and get started!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              placeholder="Full Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border p-3 focus:ring-2 focus:ring-green-500"
            />
            <input
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-3 focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full border p-3 focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full border p-3 focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
