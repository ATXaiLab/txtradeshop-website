import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TX Trade Shop — Operations Systems for Austin Trade Businesses",
  description:
    "We set up the systems that answer every call, follow up on every lead, and ask every customer for a review. Operations consulting for HVAC, plumbing, electrical, roofing, and landscaping businesses in Austin, TX.",
  keywords: [
    "operations consultant",
    "Austin trade businesses",
    "HVAC operations",
    "plumbing business systems",
    "AI receptionist",
    "trade business automation",
    "Austin TX",
  ],
  openGraph: {
    title: "TX Trade Shop — Operations Systems for Austin Trade Businesses",
    description:
      "We set up the systems that answer every call, follow up on every lead, and ask every customer for a review.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
