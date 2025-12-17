import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import illustrationGeofencing from "@/assets/illustration-geofencing.png";
import illustrationRevenueGrowth from "@/assets/illustration-revenue-growth.png";
import illustrationAnalytics from "@/assets/illustration-analytics.jpg";
import { ImageSkeleton } from "@/components/ui/content-skeleton";

// Parallax image wrapper with loading skeleton
const ParallaxImageWrapper = ({
  src,
  alt,
  className = ""
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  return <motion.div ref={ref} className={`relative overflow-hidden rounded-lg ${className}`} whileHover={{
    scale: 1.02
  }} transition={{
    duration: 0.3
  }}>
      {!isLoaded && <ImageSkeleton className="absolute inset-0" />}
      <motion.img src={src} alt={alt} style={{
      y,
      scale
    }} onLoad={() => setIsLoaded(true)} className="object-cover" />
    </motion.div>;
};
const valueProps = [{
  icon: MapPin,
  title: "Precise Location Targeting",
  description: "Capture customer attention the moment they enter your service area, eliminating wasted ad spend.",
  image: illustrationGeofencing
}, {
  icon: TrendingUp,
  title: "Immediate Revenue Impact",
  subtitle: "Your Message, Delivered Inside Their Apps.",
  description: "Proxim drives foot traffic and in-store conversions by serving hyper-relevant offers directly to geofenced users.",
  image: illustrationRevenueGrowth
}, {
  icon: BarChart3,
  title: "Performance You Can Measure",
  description: "Pay only for results, not impressions. Track views, clicks, redemptions, and revenue in real-time.",
  image: illustrationAnalytics
}];
const ValuePropsSection = () => {
  return <section className="py-32 md:py-48 bg-card">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-2xl mb-24 md:mb-32">
          <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8 block">
            Why Proxim
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
            Eliminate Wasted Ad Spend.<br />
            <span className="font-bodoni italic">Maximize Every Naira.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional advertising wastes 60%+ of your budget on people who will never visit your store.
          </p>
        </motion.div>
        
        <div className="space-y-32 md:space-y-48">
          {valueProps.map((prop, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
              <ParallaxImageWrapper src={prop.image} alt={prop.title} className={idx % 2 === 1 ? 'lg:order-2' : ''} />
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div initial={{
              scale: 0.8,
              opacity: 0
            }} whileInView={{
              scale: 1,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.2
            }} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 text-foreground">
                  <prop.icon className="w-5 h-5" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{prop.title}</h3>
                {prop.subtitle && <p className="text-lg font-medium text-foreground/60">{prop.subtitle}</p>}
                <p className="text-muted-foreground leading-relaxed text-lg">{prop.description}</p>
                <div className="pt-4">
                  <Link to="/business-clients">
                    <Button variant="ghost" size="default" className="group px-0 hover:bg-transparent hover:text-primary transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ValuePropsSection;