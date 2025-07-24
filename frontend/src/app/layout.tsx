import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Academy",
  description: "Learn cybersecurity with hands-on courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Inter, sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}
