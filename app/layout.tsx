import type { Metadata } from "next";
import { Montserrat, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pranay Jaulkar | Fullstack Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
