import React from "react";
import bannerImg from "../../assets/bannerImg.jpg";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-6 shadow-lg mb-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* LEFT SIDE: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Manage your users, settings, and analytics all in one place.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Dashboard Banner"
            className="w-full max-w-md shadow-lg h-62 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
