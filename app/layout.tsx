import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: 'World Class Tech Academy',
  description: 'Building world-class digital solutions for the modern world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-primary text-white antialiased">
        <Header />

        {/* Offset for fixed header */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
