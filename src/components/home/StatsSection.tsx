import { TrendingUp, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { 
    value: "140M+", 
    label: "Smartphone users in Nigeria",
    icon: Users,
    description: "Active mobile users ready to engage"
  },
  { 
    value: "35%", 
    label: "Average foot traffic increase",
    icon: TrendingUp,
    description: "Boost in customer visits"
  },
  { 
    value: "USD 0.50B", 
    label: "Market size by 2030",
    icon: DollarSign,
    description: "Projected market opportunity"
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-foreground/40"></span>
            <span className="text-sm font-medium text-foreground/70 tracking-wide uppercase">
              Market Opportunity
            </span>
            <span className="w-8 h-px bg-foreground/40"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-bodoni italic mb-4">
            Calculate Your Revenue Potential
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tap into Nigeria's rapidly growing mobile advertising market
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-secondary rounded-2xl p-8 text-secondary-foreground group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 }}
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-secondary-foreground/60">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
