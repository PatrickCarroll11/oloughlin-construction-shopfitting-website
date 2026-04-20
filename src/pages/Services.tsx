import { Building2, Store, Hammer, ClipboardList, Layers, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Residential Construction",
    seo: "Residential Construction Dublin",
    description:
      "We offer comprehensive residential construction services, ensuring that your home is built to the highest standards. Our team works closely with you to bring your vision to life.",
    features: [
      "Custom Home Builds",
      "Extensions",
      "Remodeling",
      "Sustainable Solutions",
      "Quality Materials",
    ],
    icon: Home,
  },
  {
    title: "Commercial Construction",
    seo: "Commercial Construction Dublin",
    description:
      "Our commercial construction services are tailored to meet the specific needs of your business. We ensure minimal disruption and timely completion of all projects.",
    features: [
      "Office Buildings",
      "Retail Spaces",
      "Efficient Planning",
      "Durable Structures",
      "Compliance Assurance",
    ],
    icon: Building2,
  },
  {
    title: "Shopfitting",
    seo: "Shopfitting Dublin",
    description:
      "Our shopfitting services are designed to create inviting and functional retail spaces. We work with you to design and install fittings that enhance customer experience.",
    features: [
      "Bespoke Designs",
      "Efficient Layouts",
      "Quality Fixtures",
      "Expert Installation",
      "Retail Expertise",
    ],
    icon: Store,
  },
  {
    title: "Renovations",
    seo: "Property Renovations Dublin",
    description:
      "Transform your property with our expert renovation services. We handle everything from minor updates to major overhauls with precision and care.",
    features: [
      "Kitchen Renovations",
      "Bathroom Renovations",
      "Structural Updates",
      "Modern Designs",
      "Space Optimization",
    ],
    icon: Hammer,
  },
  {
    title: "Project Management",
    seo: "Construction Project Management Dublin",
    description:
      "Our project management services ensure that your construction project runs smoothly from start to finish. We coordinate all aspects to deliver on time and within budget.",
    features: [
      "Planning & Scheduling",
      "Budget Management",
      "Quality Control",
      "Team Coordination",
      "Risk Management",
    ],
    icon: ClipboardList,
  },
  {
    title: "Interior Fit-outs",
    seo: "Interior Fit-outs Dublin",
    description:
      "Enhance your space with our professional interior fit-out services. We provide tailored solutions to meet your design and functional needs.",
    features: [
      "Custom Designs",
      "High-Quality Materials",
      "Expert Craftsmanship",
      "Timely Execution",
      "Satisfaction Guaranteed",
    ],
    icon: Layers,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive construction and shopfitting services delivered with
            precision and care across Dublin and beyond.
          </p>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 space-y-10">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <Card
                key={service.title}
                className={`overflow-hidden border border-border shadow-md ${
                  isEven ? "bg-card" : "section-alt"
                }`}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Left: Icon, Title, Badge, Description */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground leading-tight">
                            {service.title}
                          </h2>
                          <Badge
                            variant="secondary"
                            className="mt-1 text-xs font-medium bg-accent text-accent-foreground border-0"
                          >
                            {service.seo}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-12 h-1 bg-accent rounded-full mb-4" />
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: What's Included */}
                    <div className="bg-primary p-8 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                        <span className="w-1 h-5 bg-accent rounded-full inline-block" />
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-white/90"
                          >
                            <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-accent-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Need Quality Construction in Dublin?"
        description="Contact us today for a free consultation and let us bring your vision to life with our expert construction and shopfitting services."
        phone="087 948 2740"
        phoneRaw="0879482740"
      />
    </div>
  );
}