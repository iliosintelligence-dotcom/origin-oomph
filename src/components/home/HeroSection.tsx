import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <section ref={containerRef} className="relative bg-background min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <motion.div 
        className="w-full px-4 md:px-8 lg:px-16 xl:px-24 relative z-10 py-32 md:py-40 lg:py-48"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Hyper-Local Mobile Advertising
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-10"
          >
            Stop Guessing.<br />
            <span className="font-bodoni italic text-primary">Start Converting.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-14"
          >
            Proxim connects your business directly to geofenced users inside the apps they already use—capturing customer attention the moment they enter your service area.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book a Demo
              </Button>
            </Link>
            <Link to="/business-clients">
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5 text-base px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
              >
                See How It Works
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Trusted Companies - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full px-4 md:px-8 lg:px-16 xl:px-24 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground mb-6 tracking-wide">Trusted by leading Nigerian businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {["Partner App", "Retail Brand", "Restaurant Chain", "Lifestyle App", "QSR Brand"].map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="text-sm font-medium text-foreground/40"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
