"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-warm-cream-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-1.png"
            alt="TX Trade Shop"
            width={1984}
            height={792}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-charcoal hover:text-workshop-blue"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors duration-200"
          >
            Book a Free Audit
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center gap-1 bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold px-3 py-2 rounded-lg text-sm transition-colors"
          >
            Book Audit
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={`inline-flex items-center justify-center size-9 rounded-lg transition-colors cursor-pointer ${
                scrolled
                  ? "text-charcoal hover:bg-warm-cream"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white border-l border-warm-cream-dark">
              <SheetTitle className="px-4 pt-4 pb-2">
                <Image
                  src="/logo-1.png"
                  alt="TX Trade Shop"
                  width={1984}
                  height={792}
                  className="h-10 w-auto"
                />
              </SheetTitle>
              <nav className="flex flex-col px-4 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-charcoal hover:text-workshop-blue text-base font-medium py-3 border-b border-warm-cream-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold py-3.5 rounded-lg text-sm transition-colors"
                >
                  Book a Free Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
