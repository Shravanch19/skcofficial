import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Shravan Chaturvedi",
  description: "Full Stack Web Developer | React, Node.js, Python, SQL, Docker, Git, Tailwind CSS, Next.js | Open Source Contributor | Blogger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
