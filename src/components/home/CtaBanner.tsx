import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Stop Wasting <span className="font-bodoni italic">Ad Spend?</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 text-secondary-foreground/70 leading-relaxed">
            Launch your first hyper-local campaign and see measurable results within 24 hours. No setup fees. No long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-background hover:bg-background/90 text-foreground px-8 py-6"
              >
                Start Your Free Pilot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto bg-transparent text-secondary-foreground border border-secondary-foreground/30 hover:bg-secondary-foreground/10 px-8 py-6"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
