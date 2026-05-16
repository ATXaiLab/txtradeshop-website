import { HeroSection } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ManifestoStrip } from "@/components/sections/manifesto-strip";
import { ConvictionsSection } from "@/components/sections/convictions";
import { ServicesCards } from "@/components/sections/services-cards";
import { OfficeManagerCallout } from "@/components/sections/office-manager-callout";
import { SocialProof } from "@/components/sections/social-proof";
import { WhoThisIsntFor } from "@/components/sections/who-this-isnt-for";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ManifestoStrip />
      <ConvictionsSection />
      <ServicesCards />
      <OfficeManagerCallout />
      <SocialProof />
      <WhoThisIsntFor />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
