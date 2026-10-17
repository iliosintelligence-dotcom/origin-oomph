import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const howItWorks = [{
  step: 1,
  title: "Define Your Geofence",
  description: "Set your target radius around your business location. Choose when your ads appear."
}, {
  step: 2,
  title: "Users Enter Your Zone",
  description: "When potential customers with partner apps enter your defined area, our system detects their proximity."
}, {
  step: 3,
  title: "Ad is Delivered In-App",
  description: "Your targeted offer appears directly within the apps they are using—guaranteeing high visibility."
}];
const HowItWorksSection = () => {
  return <section className="bg-background py-28 md:py-36">
      <div className="w-full px-6 md:px-12 lg:px-20">
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
        className="mb-20 max-w-3xl md:mb-24">
          <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
            Simple. Fast. <span className="font-bodoni italic">Effective.</span>
          </h2>
          <p className="text-lg text-muted-foreground">Launch Your First Local Campaign In Three Simple Steps.</p>
        </motion.div>
        
        <div className="mb-16 grid border-t border-border md:grid-cols-3 md:mb-20">
          {howItWorks.map((step, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: idx * 0.15
        }} className="relative border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0">
              <div className="space-y-5">
                <span className="font-bodoni text-5xl font-bold text-primary/80 md:text-6xl">
                  0{step.step}
                </span>
                <h3 className="text-xl font-bold text-foreground leading-tight">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>)}
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }}>
          <Link to="/contact">
            <Button size="lg" className="rounded-md px-8">
              Start Your Free Pilot
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>;
};
export default HowItWorksSection;