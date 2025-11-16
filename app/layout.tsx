import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixelforge Studio - Design & Development Agency",
  description: "Leading advertising agency specializing in cutting-edge design and application development. Transform your brand with innovative digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
