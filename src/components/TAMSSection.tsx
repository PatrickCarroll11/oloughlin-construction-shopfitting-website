import { CheckCircle2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "Licensed Builders",
  "Insured Professionals",
  "Member of CIF",
];

export default function TAMSSection() {
  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon circle */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
            <HardHat className="w-8 h-8" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl font-bold text-primary mb-4">
          Trusted Construction Experts
        </h2>

        {/* Divider */}
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />

        {/* Body */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Our team is fully licensed and insured, ensuring peace of mind for all
          our clients. We adhere to the highest safety and quality standards in
          all our projects.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          With years of experience across residential, commercial, and
          shopfitting projects throughout Dublin and beyond, you can trust
          OLoughlin Construction &amp; Shopfitting to deliver — on time, on
          budget, and to the highest standard.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="mb-12 px-8 py-6 h-auto font-semibold shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link to="/contact">Ask About Our Services</Link>
        </Button>

        {/* Badge columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-3 bg-card border border-primary/10 rounded-xl px-6 py-6 shadow-sm"
            >
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
              <span className="text-primary font-semibold text-sm text-center leading-snug">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}