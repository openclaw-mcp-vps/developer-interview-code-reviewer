import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeReview AI — Automated Interview Code Review",
  description: "AI-powered code review for technical hiring interviews. Standardized scoring, red flag detection, and interview talking points for engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f213bfbf-a4c7-4687-83f5-b2eb232d7469"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
