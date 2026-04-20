import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does a shopfitting project typically cost in Dublin?",
    a: "Shopfitting costs in Dublin vary depending on the size of the space, the complexity of the design, and the materials chosen. A small retail fit-out might start from €5,000–€10,000, while larger or bespoke commercial projects can range significantly higher. We provide free, no-obligation consultations and detailed quotes tailored to your specific requirements, so you know exactly what to expect before any work begins."
  },
  {
    q: "How quickly can OLoughlin Construction respond to my enquiry?",
    a: "We aim to respond to all enquiries within a few hours during business hours, and always within 24 hours. For urgent matters, we encourage you to call us directly on 087 948 2740 or reach out via WhatsApp for a faster response. Once we've discussed your project, we can usually arrange a site visit within a few days."
  },
  {
    q: "What areas do you cover for construction and shopfitting services?",
    a: "We are based in Dublin and primarily serve the greater Dublin area, but we also cover a wide range of surrounding counties including Kildare, Meath, Wicklow, Louth, Westmeath, Laois, Offaly, Carlow, Kilkenny, Wexford, and Waterford. If you're unsure whether we cover your location, just give us a call and we'll be happy to confirm."
  },
  {
    q: "Do you handle both residential and commercial construction projects?",
    a: "Yes, absolutely. OLoughlin Construction & Shopfitting handles a full spectrum of projects, from custom home builds and house extensions to commercial office buildings, retail spaces, and full interior fit-outs. Our experienced team is equally comfortable working on family homes and high-footfall commercial environments, always delivering to the same high standard."
  },
  {
    q: "Are you fully licensed and insured to carry out construction work in Ireland?",
    a: "Yes, we are fully licensed builders and carry comprehensive public liability and employer's insurance. We are also members of the Construction Industry Federation (CIF), which means we adhere to the highest industry standards for safety, quality, and professional conduct. You can have complete peace of mind throughout every stage of your project."
  },
  {
    q: "How long does a typical renovation or shopfitting project take to complete?",
    a: "Project timelines depend on the scope of work involved. A bathroom or kitchen renovation might take 2–4 weeks, while a full shopfit or commercial build-out could take anywhere from 4 to 12 weeks or more. We provide a detailed project schedule before work starts and keep you updated throughout. Our project management team works hard to ensure every job is delivered on time and within budget."
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our construction and shopfitting services in Dublin.
          </p>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;