import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LearnX – School Management & Learning Management, Unified",
  description:
    "LearnX brings a school management system and a learning management system together on one intelligent platform — administration, academics, online learning, communication and finance, unified.",
  keywords: [
    "school management system",
    "learning management system",
    "LMS",
    "education software",
    "student information system",
    "academic management",
    "school administration",
    "LearnX",
  ],
  openGraph: {
    title: "LearnX – School Management & Learning Management, Unified",
    description:
      "One intelligent platform for school administration and online learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
