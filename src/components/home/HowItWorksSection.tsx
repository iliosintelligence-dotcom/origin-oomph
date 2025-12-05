import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const howItWorks = [
  { 
    step: 1, 
    title: "Define Your Geofence", 
    description: "Set your target radius around your business location. Choose when your ads appear—peak hours, weekends, or custom schedules that match your customer patterns."
  },
  { 
    step: 2, 
    title: "Users Enter Your Zone", 
    description: "When potential customers with partner apps enter your defined area, our system detects their proximity in real-time while respecting their privacy."
  },
  { 
    step: 3, 
    title: "Ad is Delivered In-App", 
    description: "Your targeted offer appears directly within the apps they are using—maps, ride-hailing, delivery services—guaranteeing high visibility and zero banner blindness."
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-foreground/30"></span>
            <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">How It Works</span>
            <span className="w-8 h-px bg-foreground/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Simple. Fast. <span className="font-bodoni italic">Effective.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch your first hyper-local campaign in three simple steps.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative text-center group"
            >
              <div className="flex flex-col items-center space-y-5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background text-xl font-bold group-hover:bg-primary transition-colors duration-300"
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground leading-tight">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Your Free Pilot
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
