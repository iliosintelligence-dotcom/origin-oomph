import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[82vh] flex-col justify-center overflow-hidden bg-background px-6 pb-16 pt-20 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center text-center">
        <div className="mx-auto mb-10 flex items-center gap-4 md:mb-12" aria-hidden="true">
          <span className="h-px w-10 bg-primary/70 md:w-16" />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Hyper-Local Mobile Advertising
          </motion.span>
          <span className="h-px w-10 bg-primary/70 md:w-16" />
        </div>

        <div className="mx-auto w-full max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <h1 className="mb-8 text-6xl font-bold leading-[0.98] text-foreground sm:text-7xl md:text-8xl lg:text-[112px]">
              Stop Guessing.
              <br />
              <span className="font-bodoni italic text-primary">Start Converting.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:mb-12 md:text-lg"
          >
            Proxim connects your business directly to geofenced users inside the apps they already use—capturing customer attention the moment they enter your service area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full rounded-md px-8 sm:w-auto">
                Book a Demo
              </Button>
            </Link>
            <Link to="/business-clients">
              <Button variant="outline" size="lg" className="w-full rounded-md px-8 sm:w-auto">
                See How It Works
                <ArrowRight aria-hidden="true" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-16 border-t border-border pt-6 md:mt-20 md:pt-7"
        >
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by leading Nigerian businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-14">
            {["Partner App", "Retail Brand", "Restaurant Chain", "Lifestyle App", "QSR Brand"].map((name, i) => (
              <span key={name} className="text-sm font-medium text-foreground/55">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
