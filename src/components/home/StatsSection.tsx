import { motion } from "framer-motion";

const stats = [
  { 
    value: "140M+", 
    label: "Smartphone users in Nigeria",
  },
  { 
    value: "35%", 
    label: "Average foot traffic increase",
  },
  { 
    value: "$0.50B", 
    label: "Market size by 2030",
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium text-secondary-foreground/60 tracking-widest uppercase mb-6 block">
            Market Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-bodoni italic">
            Calculate Your Revenue Potential
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="border-t border-secondary-foreground/20 pt-8"
            >
              <div className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                {stat.value}
              </div>
              <div className="text-secondary-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
