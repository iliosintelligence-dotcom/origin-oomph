import { TrendingUp, Users, Shield, MapPin, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { 
    icon: TrendingUp, 
    title: "Guaranteed ROI", 
    description: "Pay-per-action pricing ensures you only invest when customers engage. Stop wasting budget on impressions that go nowhere."
  },
  { 
    icon: Users, 
    title: "Unrivaled Reach", 
    description: "Access 140M+ Nigerian smartphone users through high-traffic mobile apps—not just browsers. Bypass banner blindness entirely."
  },
  { 
    icon: Shield, 
    title: "Privacy-Compliant", 
    description: "NDPR-compliant, anonymized data. Users opt-in through partner apps, ensuring ethical, permission-based marketing."
  },
  { 
    icon: MapPin, 
    title: "Zero Wasted Spend", 
    description: "Hyper-local targeting means your ads only reach customers who can actually visit your store. No geographic waste."
  },
  { 
    icon: Zap, 
    title: "Launch in 24 Hours", 
    description: "No complex setup. Create your campaign, define your radius, and go live within one business day."
  },
  { 
    icon: CheckCircle2, 
    title: "Real-Time Optimization", 
    description: "Adjust radius, timing, and creative on the fly based on live performance data. Maximize every naira spent."
  },
];

const BenefitsSection = () => {
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
            <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">Benefits</span>
            <span className="w-8 h-px bg-foreground/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Why Proxim Outperforms<br />
            <span className="font-bodoni italic">Traditional Advertising</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature is engineered for one goal: Maximum ROI with zero wasted spend.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
              >
                <benefit.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
