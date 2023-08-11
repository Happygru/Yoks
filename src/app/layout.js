"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <html lang="en">
      <body>
        <div
          className={`${
            isLoading ? "fixed" : "hidden"
          } transition-all top-0 flex items-center justify-center w-screen h-screen bg-white/90 z-[9999]`}
        >
          <span className="loader"></span>
        </div>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
