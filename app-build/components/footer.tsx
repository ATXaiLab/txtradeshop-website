import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-cream/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="TX Trade Shop"
              width={2498}
              height={789}
              unoptimized
              className="h-10 w-auto brightness-200"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Operations systems for Austin&apos;s trade businesses. We set up
              what you keep saying you&apos;ll set up.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-warm-cream/40">
              Pages
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#book"
                className="text-sm text-dirt-orange hover:text-dirt-orange-light transition-colors font-medium"
              >
                Book a Free Audit →
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-warm-cream/40">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:corby@txtradeshop.com"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-dirt-orange shrink-0" />
                corby@txtradeshop.com
              </a>
              <a
                href="tel:+14092813841"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-dirt-orange shrink-0" />
                (409) 281-3841
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-dirt-orange shrink-0" />
                Austin, TX
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-cream/30 text-xs">
            © {new Date().getFullYear()} TX Trade Shop. All rights reserved.
          </p>
          <p className="text-warm-cream/30 text-xs text-center sm:text-right">
            No sales pitch. No obligation. We&apos;ll be honest about whether we&apos;re the right fit.
          </p>
        </div>
      </div>
    </footer>
  );
}
