"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

type Particle = {
  width: number;
  height: number;
  top: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
};

type Course = {
  id: number;
  title: string;
  duration: string;
  difficulty: string;
  price: string;
  description: string;
  image: string;
  instructor: { name: string };
  rating: number;
  reviews: number;
  bestSeller: boolean;
  category: string;
  learn: string[];
  isNew?: boolean;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Ethical Hacking Basics",
    duration: "4h",
    difficulty: "Beginner",
    price: "$29",
    description: "Start your journey with the fundamentals of ethical hacking, tools, and best practices.",
    image: "/course1.jpg",
    instructor: { name: "Alice Smith" },
    rating: 4.8,
    reviews: 120,
    bestSeller: true,
    category: "Web",
    learn: [
      "Reconnaissance techniques",
      "Basic tools setup",
      "Legal & ethical hacking",
    ],
    isNew: false,
  },
  {
    id: 2,
    title: "Web Application Penetration Testing",
    duration: "8h",
    difficulty: "Intermediate",
    price: "$49",
    description: "Learn to find and exploit vulnerabilities in modern web applications.",
    image: "/course2.jpg",
    instructor: { name: "Bob Lee" },
    rating: 4.7,
    reviews: 98,
    bestSeller: false,
    category: "Web",
    learn: [
      "OWASP Top 10",
      "SQL Injection",
      "XSS & CSRF attacks",
    ],
    isNew: false,
  },
  {
    id: 3,
    title: "Advanced Network Exploitation",
    duration: "12h",
    difficulty: "Advanced",
    price: "$79",
    description: "Master advanced techniques for network penetration and exploitation.",
    image: "/course3.jpg",
    instructor: { name: "Carol Danvers" },
    rating: 4.9,
    reviews: 75,
    bestSeller: false,
    category: "Network",
    learn: [
      "Network scanning",
      "Privilege escalation",
      "Post-exploitation",
    ],
    isNew: true,
  },
];

function InstructorIcon() {
  return (
    <svg className="w-6 h-6 text-gray-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
  );
}

// Parallax and particles
function ParticlesBG() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const arr = Array.from({ length: 30 }, () => ({
      width: 8 + Math.random() * 16,
      height: 8 + Math.random() * 16,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: 2 + Math.random() * 3,
      animationDelay: Math.random() * 2,
    }));
    setParticles(arr);
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {particles.map((p) => (
        <div
          key={`${p.width}-${p.height}-${p.top}-${p.left}`}
          className="absolute rounded-full bg-green-400 opacity-20 animate-pulse"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.animationDuration}s`,
            animationDelay: `${p.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Hover sound effect
const hoverSoundUrl = "https://cdn.pixabay.com/audio/2022/10/16/audio_12c6b6b6b6.mp3";

export default function CoursesPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  // Only play if not already playing
  const playHoverSound = () => {
    const audio = audioRef.current;
    if (audio && (audio.paused || audio.ended)) {
      audio.currentTime = 0;
      audio.play();
    }
  };
  // Card tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-x-hidden">
      {/* Matrix background overlay */}
      <div className="matrix-bg">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="50%" textAnchor="middle" fill="#22d3ee" fontSize="120" fontFamily="monospace" opacity="0.08">011001 HACK</text>
          <text x="20%" y="80%" fill="#22d3ee" fontSize="60" fontFamily="monospace" opacity="0.06">root@academy:~$</text>
        </svg>
      </div>
      <ParticlesBG />
      <audio ref={audioRef} src={hoverSoundUrl} preload="auto" />
      <main className="p-8 relative z-10">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-white mono-heading">All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-start shadow-lg hover:shadow-2xl transition group relative glass glow-green"
              onMouseEnter={playHoverSound}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: 'transform 0.2s cubic-bezier(.25,.8,.25,1)' }}
            >
              {/* Best Seller Badge */}
              {course.bestSeller && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded animate-pulse">Best Seller</span>
              )}
              {/* New Badge */}
              {course.isNew && (
                <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">New</span>
              )}
              {/* Preview Image Placeholder */}
              <div className="w-full h-32 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
              {/* Category Tag */}
              <span className="mb-2 px-2 py-1 bg-blue-600 text-xs rounded-full font-semibold">{course.category}</span>
              {/* Duration & Difficulty Badges */}
              <div className="flex gap-2 mb-2">
                <span className="px-2 py-0.5 bg-purple-600 text-xs rounded-full font-semibold">{course.duration}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full font-semibold ${course.difficulty === 'Beginner' ? 'bg-green-600' : course.difficulty === 'Intermediate' ? 'bg-yellow-600' : 'bg-red-600'}`}>{course.difficulty}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-white mono-heading">{course.title}</h2>
              {/* Instructor */}
              <div className="flex items-center gap-2 mb-2">
                <InstructorIcon />
                <span className="text-sm text-gray-300">{course.instructor.name}</span>
              </div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-400">★</span>
                <span className="text-sm font-bold">{course.rating}</span>
                <span className="text-xs text-gray-400">({course.reviews})</span>
              </div>
              <p className="text-gray-300 mb-2">{course.description}</p>
              {/* What you'll learn */}
              <ul className="mb-2 list-disc list-inside text-gray-400 text-sm">
                {course.learn.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-green-400 font-bold mb-4">{course.price}</p>
              <div className="flex gap-2 mt-auto w-full">
                <Link href="#" className="flex-1 neon-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition text-center hover:scale-105">View Details</Link>
                <button className="flex-1 neon-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full mt-16 py-6 bg-gray-800 text-gray-400 text-center rounded-t-lg">
        &copy; {new Date().getFullYear()} Ethical Hacking Academy &mdash; <Link href="/" className="underline hover:text-white">Home</Link>
      </footer>
    </div>
  );
} 