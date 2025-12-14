import React, { useContext } from "react";
import bannerImg from "../../assets/bannerImg.jpg";
import { AuthContext } from "../context/AuthContext";

const Banner = () => {
  const { user } = useContext(AuthContext);

  // Safety check
  if (!user) return null;

  const role = user.role;

  const bannerContent = {
    1: {
      title: "Welcome Admin 👑",
      description: "Manage users, roles, projects, and system settings.",
    },
    2: {
      title: "Welcome Team Leader 🚀",
      description: "Track your team, manage tasks, and monitor progress.",
    },
    3: {
      title: "Welcome Employee 👋",
      description: "View your tasks, projects, and daily progress.",
    },
  };

  const { title, description } = bannerContent[role];

  return (
    <section className="w-full bg-gradient-to-r from-green-800 to-green-500 text-white py-8 px-6 shadow-md mb-6 rounded-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-base sm:text-lg text-green-100">{description}</p>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Dashboard Banner"
            className="w-full max-w-sm max-h-40 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
