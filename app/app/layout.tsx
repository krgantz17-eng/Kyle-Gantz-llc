import "./globals.css";

export const metadata = {
  title: "Kyle Gantz LLC | Software Design & Development",
  description:
    "Kyle Gantz LLC provides professional software design, website development, and freelance technology solutions for businesses of all sizes.",
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
