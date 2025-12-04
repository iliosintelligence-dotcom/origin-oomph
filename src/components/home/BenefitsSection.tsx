import { TrendingUp, Users, Shield, MapPin, Zap, CheckCircle2 } from "lucide-react";

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
        <div className="text-center mb-16">
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
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground mb-5 group-hover:bg-foreground group-hover:text-background transition-colors">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
