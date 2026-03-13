import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LearnX – Intelligent School Management Platform",
  description:
    "LearnX is a modern school management system that simplifies administration, academics, communication, and finance for schools in one unified platform.",
  keywords: [
    "school management system",
    "education software",
    "student information system",
    "academic management",
    "school administration",
    "LearnX",
  ],
  openGraph: {
    title: "LearnX – Intelligent School Management Platform",
    description:
      "Simplify administration, academics, communication and finance for modern schools.",
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
