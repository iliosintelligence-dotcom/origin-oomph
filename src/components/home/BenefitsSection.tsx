import { TrendingUp, Users, Shield, MapPin, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { 
    icon: TrendingUp, 
    title: "Guaranteed ROI", 
    description: "Pay-per-action pricing ensures you only invest when customers engage."
  },
  { 
    icon: Users, 
    title: "Unrivaled Reach", 
    description: "Access 140M+ Nigerian smartphone users through high-traffic mobile apps."
  },
  { 
    icon: Shield, 
    title: "Privacy-Compliant", 
    description: "NDPR-compliant, anonymized data. Users opt-in through partner apps."
  },
  { 
    icon: MapPin, 
    title: "Zero Wasted Spend", 
    description: "Hyper-local targeting means your ads only reach customers who can actually visit."
  },
  { 
    icon: Zap, 
    title: "Launch in 24 Hours", 
    description: "No complex setup. Create your campaign and go live within one business day."
  },
  { 
    icon: CheckCircle2, 
    title: "Real-Time Optimization", 
    description: "Adjust radius, timing, and creative on the fly based on live performance data."
  },
];

const BenefitsSection = () => {
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
            Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
            Why Proxim Outperforms<br />
            <span className="font-bodoni italic">Traditional Advertising</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is engineered for one goal: Maximum ROI with zero wasted spend.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 text-foreground mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
