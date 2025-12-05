import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is proximity marketing?",
    a: "It's the delivery of personalised messages to consumers' mobile devices when they're physically near your business. It relies on smartphones, GPS and connectivity to deliver relevant information in real time.",
  },
  {
    q: "Does Proxim! store personal data?",
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
    q: "How does Proxim! comply with privacy rules?",
    a: "We use anonymised location data and follow Nigeria's Data Protection Act. Customers only see offers if they've opted in through partner apps.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-foreground/30"></span>
            <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">FAQ</span>
            <span className="w-8 h-px bg-foreground/30"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently asked <span className="font-bodoni italic">questions</span>
          </h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <AccordionItem value={`item-${idx}`} className="border border-border rounded-lg bg-card px-6 transition-all duration-300 hover:border-primary/30">
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline transition-colors hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
