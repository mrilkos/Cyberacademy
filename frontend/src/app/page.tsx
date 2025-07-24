"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";

const featuredCourses = [
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

const testimonials = [
  {
    name: "Jane Doe",
    avatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
    feedback: "The courses are hands-on and easy to follow. I landed my first cybersecurity job thanks to this platform!",
  },
  {
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80",
    feedback: "Expert instructors and real-world labs. The certification helped me stand out in interviews.",
  },
  {
    name: "Sara Ali",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80",
    feedback: "I love the ethical focus and the community. Highly recommended for anyone serious about hacking the right way!",
  },
];

function InstructorIcon() {
  return (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
  );
}

function ValueIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-2xl">{icon}</div>
      <span className="text-base font-semibold text-gray-200">{label}</span>
    </div>
  );
}

// Add a simple particle animation component
function ParticlesBG() {
  const [particles, setParticles] = useState<any[]>([]);
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
      {particles.map((p, i) => (
        <div
          key={i}
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

// Ripple effect logic
function useRipple() {
  const createRipple = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.classList.add("ripple");
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    button.appendChild(circle);
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  };
  return createRipple;
}

export default function Home() {
  const createRipple = useRipple();
  return (
    <div className="hacker-bg relative overflow-x-hidden">
      <MatrixRain />
      {/* Matrix background overlay */}
      <div className="matrix-bg">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="50%" textAnchor="middle" fill="#22d3ee" fontSize="120" fontFamily="monospace" opacity="0.08">011001 HACK</text>
          <text x="20%" y="80%" fill="#22d3ee" fontSize="60" fontFamily="monospace" opacity="0.06">root@academy:~$</text>
        </svg>
      </div>
      <ParticlesBG />
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-2xl font-extrabold text-white">CA</div>
            <span className="text-xl font-bold text-white mono-heading">Cyber Academy</span>
          </Link>
          <div className="flex gap-6 text-gray-200 font-medium">
            <Link href="/" className="hover:text-green-400 transition">Home</Link>
            <Link href="/courses" className="hover:text-green-400 transition">Courses</Link>
            <Link href="#why" className="hover:text-green-400 transition">Why Us?</Link>
            <Link href="#" className="hover:text-green-400 transition">Login</Link>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-6 relative">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start z-10">
          <h1 className="text-5xl font-extrabold mb-4 text-white leading-tight mono-heading">Hack the Right Way<br /><span className="text-green-400">Learn. Certify. Grow.</span></h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">Access hands-on ethical hacking courses, tools, and resources. Learn from experts, earn certifications, and advance your cybersecurity career in a legal and ethical way.</p>
          <div className="flex gap-4">
            <a href="#courses" className="neon-btn ripple-btn bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition" onClick={createRipple}>Start Learning</a>
            <Link href="/courses" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg border border-gray-700 transition ripple-btn" onClick={createRipple}>Browse Courses</Link>
          </div>
        </div>
        {/* Right: Spooky Hacker Image */}
        <div className="flex-1 flex items-center justify-center z-10">
          <div className="w-80 h-80 bg-black rounded-3xl flex items-center justify-center shadow-lg border-4 overflow-hidden hacker-glow">
            <Image src="/hacker.jpg" alt="Spooky Ethical Hacker" width={320} height={320} className="object-cover w-full h-full grayscale contrast-125" />
          </div>
        </div>
      </section>
      {/* Value Proposition Section */}
      <section id="why" className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8 mono-heading">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <ValueIcon icon={<span>🎓</span>} label="Expert Instructors" />
          <ValueIcon icon={<span>🧑‍💻</span>} label="Hands-on Labs" />
          <ValueIcon icon={<span>📜</span>} label="Certification" />
          <ValueIcon icon={<span>🔐</span>} label="Secure & Legal" />
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8 mono-heading">What Our Students Say</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative glass rounded-2xl p-8 flex flex-col items-center shadow-2xl border border-gray-700 transition-transform duration-300 hover:-translate-y-2 group"
              style={{ minHeight: '340px' }}
            >
              {/* Quote Icon */}
              <svg className="absolute top-6 left-6 w-8 h-8 text-green-500 opacity-30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 7h.01M15 7h.01M7 11c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4s-4-1.79-4-4z"/></svg>
              {/* Avatar with border ring */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-3xl font-bold text-white mb-4 ring-4 ring-green-500/30 shadow-lg overflow-hidden">
                <Image src={t.avatar} alt={t.name} width={80} height={80} className="object-cover w-full h-full" />
              </div>
              <p className="text-gray-100 text-center mb-4 text-lg italic font-light leading-relaxed z-10">“{t.feedback}”</p>
              <span className="text-green-300 font-semibold text-lg tracking-wide z-10">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Courses Section */}
      <section className="w-full max-w-6xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center mono-heading">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course, idx) => (
            <div key={course.id} className="bg-black rounded-lg p-6 flex flex-col items-start shadow-lg hover:shadow-2xl hover:-translate-y-1 transition group relative glass hacker-glow gradient-border">
              {/* Best Seller Badge */}
              {course.bestSeller && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">Best Seller</span>
              )}
              {/* New Badge */}
              {course.isNew && (
                <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
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
              <h3 className="text-xl font-semibold mb-2 text-white mono-heading glitch" data-text={course.title}>{course.title}</h3>
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
                {course.learn.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-green-400 font-bold mb-4">{course.price}</p>
              <div className="flex gap-2 mt-auto w-full">
                <Link href="/courses" className="flex-1 neon-btn ripple-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition text-center hover:scale-105" onClick={createRipple}>View Details</Link>
                <button className="flex-1 neon-btn ripple-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition flex items-center justify-center gap-2" onClick={createRipple}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full mt-16 py-6 bg-gray-800 text-gray-400 text-center rounded-t-lg">
        &copy; {new Date().getFullYear()} Cyber Academy &mdash; <Link href="/courses" className="underline hover:text-white">Browse Courses</Link>
      </footer>
    </div>
  );
}
