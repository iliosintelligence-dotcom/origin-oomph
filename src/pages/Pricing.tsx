import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-info to-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Transparent pricing for businesses and app partners
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Choose the plan that fits your growth goals. Start with a free trial for businesses or free integration for apps.
            </p>
          </div>
        </section>

        {/* Business Pricing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For Business Clients
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Drive foot traffic with location-based offers
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {businessPlans.map((plan, idx) => (
                <Card key={idx} className={`relative ${plan.popular ? 'border-2 border-secondary shadow-xl' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.idealFor}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <p className="text-sm text-muted-foreground mt-1">{plan.priceNote}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button 
                        variant={plan.popular ? "default" : "outline"} 
                        className="w-full"
                      >
                        {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* App Partner Pricing */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For App Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Monetise your app with location-based ads
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partnerTiers.map((tier, idx) => (
                <Card key={idx} className={`relative ${tier.popular ? 'border-2 border-secondary shadow-xl' : ''}`}>
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tier.idealFor}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                      <p className="text-sm text-muted-foreground mt-1">integration</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/app-partners">
                      <Button 
                        variant={tier.popular ? "default" : "outline"} 
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Pricing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pricing Questions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept card payments, bank transfers, and mobile money. All plans are billed in Nigerian Naira.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I cancel anytime?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What if I exceed my message quota?</h3>
                  <p className="text-sm text-muted-foreground">
                    Additional messages are billed at an affordable per-impression rate. You'll see usage in your dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How do app partners get paid?</h3>
                  <p className="text-sm text-muted-foreground">
                    You receive monthly payouts in Nigerian naira based on impressions, clicks and conversions delivered.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-secondary/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Start your free trial or book a demo to see Proxim! in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
