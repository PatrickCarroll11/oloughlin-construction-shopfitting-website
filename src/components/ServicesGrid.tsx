import { Home, Building2, ShoppingBag, Hammer, ClipboardList, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "High-quality construction services for homes.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Reliable construction solutions for businesses.",
  },
  {
    icon: ShoppingBag,
    title: "Shopfitting",
    description: "Tailored shopfitting services to enhance your retail space.",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Expert renovation services to transform your property.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Comprehensive project management for seamless execution.",
  },
  {
    icon: Paintbrush,
    title: "Interior Fit-outs",
    description: "Professional interior fit-out services for any space.",
  },
];

const ServicesGrid = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
          From residential builds to bespoke shopfitting, we deliver expert construction solutions across Dublin and beyond.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-8 rounded-lg border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
              <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;