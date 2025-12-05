import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Proxim! helped me bring in 27% more customers during lunch hours. The notifications felt personal and respectful, and my sales jumped within the first week.",
    author: "Lola",
    role: "Owner, Lagos Café",
  },
  {
    quote: "Integrating Proxim!'s SDK into our lifestyle app was seamless. We've unlocked a steady revenue stream and our users enjoy relevant deals as they move around the city.",
    author: "Chinedu",
    role: "Product Manager, Ride-Sharing App",
  },
  {
    quote: "Our Lagos lifestyle app integrated Proxim! and I saw a 14% increase in daily active sessions. Our monthly ad revenue doubled within three months.",
    author: "Ibrahim Yusuf",
    role: "Marketing Director, Lifestyle App",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-foreground/30"></span>
            <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">Testimonials</span>
            <span className="w-8 h-px bg-foreground/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from <span className="font-bodoni italic">Real Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of Nigerian businesses already driving revenue with Proxim
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-background rounded-lg p-8 space-y-6 border border-border cursor-default"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                className="text-foreground leading-relaxed"
              >
                "{testimonial.quote}"
              </motion.p>
              <div className="pt-4 border-t border-border">
                <div className="font-bold text-foreground">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
