"use client";

import { useEffect } from "react";

export default function Home() {
  // Simple check to ensure client-side rendering
  useEffect(() => {
    console.log("Home page mounted");
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-lime-500 mb-4">
        Welcome to Cyber Academy
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Start your cybersecurity journey today
      </p>
      <div className="flex gap-4">
        <a
          href="/courses"
          className="px-6 py-3 bg-lime-500 text-black font-medium rounded-md hover:bg-lime-400 transition-colors"
        >
          Explore Courses
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-lime-500 text-lime-500 font-medium rounded-md hover:bg-lime-500/10 transition-colors"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
