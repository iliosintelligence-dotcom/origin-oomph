import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import illustrationKpi from "@/assets/illustration-kpi-dashboard.png";

const Pricing = () => {
  const businessPlans = [
    {
      name: "Starter",
      idealFor: "New or small businesses",
      price: "₦10,000",
      priceNote: "₦0 for first month",
      features: [
        "50 geofenced messages per month",
        "Basic analytics dashboard",
        "Email support",
        "One location",
        "Standard delivery times",
      ],
    },
    {
      name: "Growth",
      idealFor: "Businesses with moderate traffic",
      price: "₦30,000",
      priceNote: "per month",
      popular: true,
      features: [
        "200 messages per month",
        "Advanced analytics & reporting",
        "Priority support",
        "Up to 3 locations",
        "A/B testing",
        "Custom scheduling",
      ],
    },
    {
      name: "Enterprise",
      idealFor: "Large chains and franchises",
      price: "Custom",
      priceNote: "Contact sales",
      features: [
        "Unlimited messages",
        "Advanced A/B testing",
        "API access",
        "Dedicated account manager",
        "Unlimited locations",
        "Custom integrations",
        "Priority campaign matching",
      ],
    },
  ];

  const partnerTiers = [
    {
      name: "Starter",
      idealFor: "Small apps or startups",
      price: "Free",
      features: [
        "Free integration",
        "60% revenue share",
        "Basic analytics",
        "Email support",
        "Standard campaign matching",
      ],
    },
    {
      name: "Pro",
      idealFor: "Medium-size apps with 50k+ monthly users",
      price: "Custom",
      popular: true,
      features: [
        "Priority campaign matching",
        "70% revenue share",
        "Advanced analytics",
        "Dedicated support",
        "Custom reporting",
      ],
    },
    {
      name: "Enterprise",
      idealFor: "Large platforms & super-apps",
      price: "Custom",
      features: [
        "Custom revenue share",
        "Full API access",
        "Bespoke campaigns",
        "Co-marketing opportunities",
        "Priority integration support",
        "Account management",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-px bg-foreground/40"></span>
                  <span className="text-sm font-medium text-foreground/70 tracking-wide uppercase">
                    Pricing
                  </span>
                  <span className="w-8 h-px bg-foreground/40"></span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Transparent Pricing <span className="font-bodoni italic text-primary">For Every Stage</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Choose the plan that fits your growth goals. Start with a free trial for businesses or free integration for app partners.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div>
                <img
                  src={illustrationKpi}
                  alt="Analytics dashboard"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business Pricing */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3 block">For Business Clients</span>
              <h2 className="font-bodoni text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Drive Foot Traffic with Location-Based Offers
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {businessPlans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`relative bg-background rounded-2xl p-8 border ${plan.popular ? 'border-secondary ring-1 ring-secondary' : 'border-border'}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded-full px-4">
                      Most Popular
                    </Badge>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.idealFor}</p>
                  </div>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <p className="text-sm text-muted-foreground mt-1">{plan.priceNote}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className="w-full rounded-full"
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Partner Pricing */}
        <section className="py-20 md:py-28 bg-foreground/[0.02]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3 block">For App Partners</span>
              <h2 className="font-bodoni text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Monetise Your App with Location-Based Ads
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {partnerTiers.map((tier, idx) => (
                <div 
                  key={idx} 
                  className={`relative bg-background rounded-2xl p-8 border ${tier.popular ? 'border-secondary ring-1 ring-secondary' : 'border-border'}`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded-full px-4">
                      Most Popular
                    </Badge>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground">{tier.idealFor}</p>
                  </div>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <p className="text-sm text-muted-foreground mt-1">integration</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/app-partners">
                    <Button 
                      variant={tier.popular ? "default" : "outline"} 
                      className="w-full rounded-full"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Pricing */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3 block">FAQ</span>
              <h2 className="font-bodoni text-3xl md:text-4xl lg:text-5xl text-foreground">
                Pricing Questions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-2xl border border-border p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept card payments, bank transfers, and mobile money. All plans are billed in Nigerian Naira.
                </p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.
                </p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">What if I exceed my message quota?</h3>
                <p className="text-muted-foreground">
                  Additional messages are billed at an affordable per-impression rate. You'll see usage in your dashboard.
                </p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">How do app partners get paid?</h3>
                <p className="text-muted-foreground">
                  You receive monthly payouts in Nigerian naira based on impressions, clicks and conversions delivered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 md:py-12 pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-foreground" />
              <div className="relative z-10 px-6 py-16 md:py-20 text-center">
                <h2 className="font-bodoni text-3xl md:text-4xl lg:text-5xl text-background mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
                  Start your free trial or book a demo to see Proxim in action
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background/10 rounded-full px-8">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
