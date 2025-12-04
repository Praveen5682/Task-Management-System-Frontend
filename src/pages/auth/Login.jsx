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
      <section>
        <div className="border w-120 h-auto mx-auto mt-20 p-10">
          <div className="flex justify-between">
            <h2 className="text-1xl">Login</h2>
            <p>
              New User?{" "}
              <Link to={"/signup"} className="text-blue-600">
                Create Account
              </Link>
            </p>
          </div>

          <div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                className="border p-1"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="password"
                className="border p-1"
                placeholder="Enter Your Email"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <button className="bg-blue-600 text-white p-2 mt-4 cursor-pointer hover:bg-blue-800">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
