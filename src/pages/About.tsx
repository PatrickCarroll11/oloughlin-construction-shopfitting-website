import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            OLoughlin Construction & Shopfitting — quality Construction & Shopfitting service you can trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At OLoughlin Construction & Shopfitting, we pride ourselves on delivering exceptional construction and shopfitting services. Our team of experienced professionals is committed to quality workmanship and client satisfaction.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We work closely with you to ensure that your vision becomes a reality, always prioritizing transparency and communication..
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Sets Us Apart</h2>
          <div className="space-y-4 mb-10">
            {[{"title":"Quality Materials","desc":"We use only the best materials to ensure lasting results."},{"title":"Competitive Pricing","desc":"Our services are competitively priced to fit your budget."},{"title":"Professional Team","desc":"Our team is skilled, experienced, and dedicated to excellence."},{"title":"Wide Coverage","desc":"We serve a broad range of areas across Dublin and beyond."},{"title":"Customer Satisfaction","desc":"We prioritize your satisfaction with every project we undertake."}].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
