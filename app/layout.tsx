import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle Gantz LLC | Software Design & Development",
  description: "Professional software design and development services by Kyle Gantz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}