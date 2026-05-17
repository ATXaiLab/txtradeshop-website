"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function StickyBookCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="/#book"
        className="flex items-center gap-2 bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-colors duration-200 text-sm"
      >
        Book Free Audit
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
