"use client";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation"; // Import useRouter
import axios from "axios";

export default function Hero() {
  const router = useRouter(); // Initialize the router

  const handleStart = () => {
    router.push("/pages/main"); // Navigate to /pages/main
  };

  const handleExitSession = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/saveExerciseSession",
        { withCredentials: true }
      );
      if (response.data.success) {
        alert("Session saved successfully!");
      } else {
        alert("Failed to save session.");
      }
    } catch (error) {
      console.error("Error saving session:", error);
      alert("Error saving session.");
    }
  };

  return (
    <main className="px-4 py-16 md:py-24 lg:py-28">
      <div className="max-w-6xl gap-10 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Tech Powered Fitness:{" "}
            <span className="text-[#0066FF]">Balance Health & Work</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-8 pr-5">
            Leverage computer vision to track and analyze physical activity in
            real-time, turning movement into motivation.
          </p>

          <div className="text-center mb-4 md:pr-24">
            <Button onClick={handleStart} size="lg" className="text-lg px-8">
              Start Now
            </Button>
          </div>

          <div className="text-center md:pr-24">
            <Button
              onClick={handleExitSession}
              size="lg"
              className="text-lg px-8 bg-red-600 hover:bg-red-700"
            >
              Exit Session & Save
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/flexitoutbanner.jpg"
            alt="Flex It Out Banner"
            width={700}
            height={700}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
