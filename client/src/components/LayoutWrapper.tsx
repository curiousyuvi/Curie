import React from "react";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/bg-static.jpg"
        className="w-auto h-full min-w-[100%] min-h-[100%] fixed z-[-1] object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full flex justify-center items-center p-4 text-gray-300">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutWrapper;