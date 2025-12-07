import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="py-32 md:py-48 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]"
          >
            Ready to Stop Wasting <span className="font-bodoni italic">Ad Spend?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-14 text-secondary-foreground/70 leading-relaxed max-w-2xl"
          >
            Launch your first hyper-local campaign and see measurable results within 24 hours. No setup fees. No long-term contracts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-background hover:bg-background/90 text-foreground px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
              >
                Start Your Free Pilot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="ghost"
                size="lg" 
                className="w-full sm:w-auto text-secondary-foreground hover:bg-secondary-foreground/10 px-10 py-7 rounded-full transition-all duration-300"
              >
                View Pricing Plans
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
