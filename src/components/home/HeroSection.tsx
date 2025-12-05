import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="w-8 h-px bg-foreground/40"></span>
            <span className="text-sm font-medium text-foreground/70 tracking-wide uppercase">
              Hyper-Local Mobile Advertising
            </span>
            <span className="w-8 h-px bg-foreground/40"></span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-8"
          >
            Stop Guessing.<br />
            <span className="font-bodoni italic text-primary">Start Converting.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Proxim connects your business directly to geofenced users inside the apps they already use—capturing customer attention the moment they enter your service area.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/business-clients">
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5 text-base px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                See How It Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Trusted Companies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container mx-auto px-4 mt-20"
      >
        <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading Nigerian businesses</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {["Partner App", "Retail Brand", "Restaurant Chain", "Lifestyle App", "QSR Brand"].map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="text-lg font-semibold text-foreground/50"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
