import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moni Table",
  description: "Moni Table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-4 py-6 bg-[#09090b]">{children}</body>
    </html>
  );
}
