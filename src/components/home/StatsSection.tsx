import { TrendingUp, Users, DollarSign } from "lucide-react";

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
        <div className="text-center mb-12">
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
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="bg-secondary rounded-2xl p-8 text-secondary-foreground group hover:bg-secondary/90 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
                <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-secondary-foreground/60">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
