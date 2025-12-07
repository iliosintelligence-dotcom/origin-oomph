import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Proxim helped me bring in 27% more customers during lunch hours. The notifications felt personal and respectful, and my sales jumped within the first week.",
    author: "Lola",
    role: "Owner, Lagos Café",
  },
  {
    quote: "Integrating Proxim's SDK into our lifestyle app was seamless. We've unlocked a steady revenue stream and our users enjoy relevant deals.",
    author: "Chinedu",
    role: "Product Manager, Ride-Sharing App",
  },
  {
    quote: "Our Lagos lifestyle app integrated Proxim and I saw a 14% increase in daily active sessions. Our monthly ad revenue doubled within three months.",
    author: "Ibrahim Yusuf",
    role: "Marketing Director, Lifestyle App",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 md:py-48 bg-card">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-24"
        >
          <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
            Real Results from <span className="font-bodoni italic">Real Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of Nigerian businesses already driving revenue with Proxim
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="border-t border-border pt-8"
            >
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </p>
              <div>
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
