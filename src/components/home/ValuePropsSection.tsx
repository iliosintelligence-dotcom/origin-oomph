import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import illustrationGeofencing from "@/assets/illustration-geofencing.png";
import illustrationRevenueGrowth from "@/assets/illustration-revenue-growth.png";
import illustrationAnalytics from "@/assets/illustration-analytics.jpg";

const valueProps = [
  {
    icon: MapPin,
    title: "Precise Location Targeting",
    description: "Capture customer attention the moment they enter your service area, eliminating wasted ad spend. Reach only consumers within walking distance of your shop—no more paying for impressions that never convert.",
    image: illustrationGeofencing,
  },
  {
    icon: TrendingUp,
    title: "Immediate Revenue Impact",
    subtitle: "Your Message, Delivered Inside Their Apps.",
    description: "Proxim drives foot traffic and in-store conversions by serving hyper-relevant offers directly to geofenced users via the popular mobile apps on their phones. Our clients see an average 35% increase in walk-ins within the first month.",
    image: illustrationRevenueGrowth,
  },
  {
    icon: BarChart3,
    title: "Performance You Can Measure",
    description: "Pay only for results, not impressions. Track views, clicks, redemptions, and revenue in real-time through our intuitive dashboard. Optimize your campaigns based on actual ROI data.",
    image: illustrationAnalytics,
  },
];

const ValuePropsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-foreground/30"></span>
            <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">Why Proxim</span>
            <span className="w-8 h-px bg-foreground/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Eliminate Wasted Ad Spend.<br />
            <span className="font-bodoni italic">Maximize Every Naira.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional advertising wastes 60%+ of your budget on people who will never visit your store. Proxim delivers precision targeting that guarantees optimal reach.
          </p>
        </div>
        <div className="space-y-24">
          {valueProps.map((prop, idx) => (
            <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className={`space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground">
                  <prop.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{prop.title}</h3>
                {prop.subtitle && <p className="text-lg font-medium text-foreground/70">{prop.subtitle}</p>}
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                <div className="pt-2">
                  <Link to="/business-clients">
                    <Button variant="outline" size="default" className="group border-foreground/20 hover:bg-foreground/5">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
