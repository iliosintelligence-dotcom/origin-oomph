import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is proximity marketing?",
    a: "It's the delivery of personalised messages to consumers' mobile devices when they're physically near your business. It relies on smartphones, GPS and connectivity to deliver relevant information in real time.",
  },
  {
    q: "Does Proxim store personal data?",
    a: "No. Our technology works with anonymised location signals. Users must grant permission to partner apps, and we follow Nigeria's data-privacy laws.",
  },
  {
    q: "How quickly can I start a campaign?",
    a: "You can sign up, set your promotion and go live within one business day. Our team will guide you through the process.",
  },
  {
    q: "Is it expensive?",
    a: "Pricing starts with a free trial, and you only pay when customers engage with your offer. Plans scale as your business grows.",
  },
  {
    q: "What's the difference between app partners and business clients?",
    a: "App partners integrate our SDK to monetize their apps through proximity campaigns. Business clients use our platform to reach nearby customers and drive sales.",
  },
  {
    q: "How does Proxim comply with privacy rules?",
    a: "We use anonymised location data and follow Nigeria's Data Protection Act. Customers only see offers if they've opted in through partner apps.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Frequently asked <span className="font-bodoni italic">questions</span>
            </h2>
          </motion.div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <AccordionItem value={`item-${idx}`} className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
