"use client";
import Challenges from "@/app/components/Challenges";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

const Page = ({ params }) => {
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const socketRoomId = nanoid(10);


  const token = localStorage.getItem("token"); //
  if (!token) {
    router.push("/auth/login");
  }

  const pathName = window.location.pathname;
  const digitsAtEnd = pathName.match(/\d+$/); // Match digits at the end of the string
  const roomId = digitsAtEnd
    ? digitsAtEnd[0]
    : Math.floor(Math.random() * 10000).toString();

  return (
    <div className="bg-gradient-to-b px-4 from-blue-50 to-white pt-5 mb-3">
      <Navbar />
      <Challenges roomId={roomId} clientId={socketRoomId} />{" "}
      {/* Pass roomId to the Challenges component */}
    </div>
  );
};

export default Page;
