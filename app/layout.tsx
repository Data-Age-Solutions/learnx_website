import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // Share previews need absolute URLs. Set NEXT_PUBLIC_SITE_URL to the live
  // domain in production — without it the preview image resolves to localhost
  // and will not load for anyone else.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
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
    // The key visual carries the logo and the headline in the artwork itself,
    // which is wrong inside a page — it would fight the real heading — but is
    // exactly right here, where the image is shown on its own.
    images: [
      {
        url: "/images/learnx-key-visual.jpg",
        width: 1536,
        height: 1024,
        alt: "LearnX — brings your school's administration and your classrooms online, two systems on one intelligent platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnX – School Management & Learning Management, Unified",
    description:
      "One intelligent platform for school administration and online learning.",
    images: ["/images/learnx-key-visual.jpg"],
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
