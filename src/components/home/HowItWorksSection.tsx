import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const howItWorks = [
  { 
    step: 1, 
    title: "Define Your Geofence", 
    description: "Set your target radius around your business location. Choose when your ads appear."
  },
  { 
    step: 2, 
    title: "Users Enter Your Zone", 
    description: "When potential customers with partner apps enter your defined area, our system detects their proximity."
  },
  { 
    step: 3, 
    title: "Ad is Delivered In-App", 
    description: "Your targeted offer appears directly within the apps they are using—guaranteeing high visibility."
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-24"
        >
          <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
            Simple. Fast. <span className="font-bodoni italic">Effective.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Launch your first hyper-local campaign in three simple steps.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-20">
          {howItWorks.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              <div className="space-y-6">
                <span className="text-6xl md:text-7xl font-bold text-foreground/10 font-bodoni">
                  0{step.step}
                </span>
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
        >
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Free Pilot
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
