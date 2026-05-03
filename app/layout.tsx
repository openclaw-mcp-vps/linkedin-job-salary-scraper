import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn Job Salary Scraper – Extract Real Salary Data",
  description: "Scrape LinkedIn job postings to build salary databases for specific roles and locations. Perfect for recruiters and job seekers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2179aef1-2179-4220-9dbd-a29a1bbcaa2f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
