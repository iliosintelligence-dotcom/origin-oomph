import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Target, Clock, CheckCircle2, BarChart3, ArrowRight } from "lucide-react";
import restaurantOwnerImage from "@/assets/hero-restaurant-owner.png";

const BusinessClients = () => {
  const pricingPlans = [
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

  const successStories = [
    {
      business: "Restaurant in Lekki",
      result: "30% foot traffic increase",
      timeframe: "4 weeks",
      description: "A family-run restaurant used Proxim! to send lunchtime offers. Customers said the timely notifications made them choose the restaurant over competitors.",
    },
    {
      business: "Fashion Boutique in Yaba",
      result: "45% weekend revenue increase",
      timeframe: "2 months",
      description: "The boutique targeted weekend shoppers with flash-sale notifications. Gained 600 new customers over two months.",
    },
    {
      business: "Lagos Café",
      result: "27% more lunchtime customers",
      timeframe: "1 week",
      description: "Sales jumped within the first week. The notifications felt personal and respectful to customers.",
    },
  ];

  const industries = [
    { name: "Food & Beverage", description: "Cafés, restaurants, bakeries, food trucks" },
    { name: "Retail", description: "Fashion, supermarkets, electronics, markets" },
    { name: "Entertainment", description: "Cinemas, event centres, bars, nightclubs" },
    { name: "Health & Fitness", description: "Pharmacies, gyms, spas, wellness centres" },
    { name: "Services", description: "Salons, repair shops, petrol stations, logistics" },
  ];

  const faqs = [
    {
      q: "Do I need special hardware to use Proxim!?",
      a: "No. Proxim! uses the GPS and network capabilities already present in smartphones. You only need to set your campaign on our dashboard.",
    },
    {
      q: "What's the typical redemption rate?",
      a: "Redemption rates vary by offer and location. Most campaigns see between 8-15% engagement. Our team will help you optimise your messaging for better results.",
    },
    {
      q: "Can I target different times of day?",
      a: "Yes. You can schedule campaigns for specific days and hours—morning commutes, lunchtime, weekends or special events.",
    },
    {
      q: "How does pricing work?",
      a: "Plans are subscription-based with a quota of messages. Additional usage is billed at an affordable rate per impression. You only pay when your message is delivered.",
    },
    {
      q: "How quickly can I see results?",
      a: "Many businesses see results within the first week. Our analytics dashboard shows real-time performance so you can track views, redemptions and visits immediately.",
    },
    {
      q: "What areas do you cover in Nigeria?",
      a: "We currently operate in Lagos, Abuja, Port Harcourt and other major cities. We're expanding rapidly across Nigeria.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
                  Bring customers through your door with location-based offers
                </h1>
                <p className="text-xl text-secondary-foreground/90 leading-relaxed">
                  Over 85% of Nigerians own mobile devices. Proxim! turns those phones into a direct line to nearby shoppers, helping you increase foot traffic and sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button size="lg" className="w-full sm:w-auto bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src={restaurantOwnerImage}
                  alt="Nigerian restaurant owner welcoming customers with proximity marketing"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">The Challenge</h2>
                  <p className="text-muted-foreground">
                    Running a small business in Nigeria means competing for attention in crowded markets. Traditional advertising can be wasteful—TV ads, billboards and word-of-mouth still lead brand discovery, yet customers increasingly research brands on social networks and search engines.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">The Solution</h2>
                  <p className="text-muted-foreground">
                    Proxim! delivers personalised offers directly to customers' smartphones when they're close to your location. By tapping into Nigeria's 140 million smartphone users and the growing location-based services market, you reach people who are ready to buy, measure results in real time and pay only for performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Proxim! Works for Your Business
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-2">Sign Up</h3>
                  <p className="text-sm text-muted-foreground">Create your account and set up your business profile in minutes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-2">Create Campaign</h3>
                  <p className="text-sm text-muted-foreground">Set your radius, times, offer and call-to-action through our dashboard</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-2">Reach Customers</h3>
                  <p className="text-sm text-muted-foreground">Messages delivered when nearby users enter your geofenced area</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-2">Track Results</h3>
                  <p className="text-sm text-muted-foreground">Monitor views, redemptions and optimize your campaigns for better ROI</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Flexible Pricing for Every Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start with a free trial and scale as you grow
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, idx) => (
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
                    <ul className="space-y-3">
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
                        className="w-full mt-6"
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

        {/* Success Stories */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real Results from Nigerian Businesses
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">{story.result}</div>
                    <h3 className="text-xl font-bold mb-2">{story.business}</h3>
                    <Badge variant="outline" className="mb-4">
                      <Clock className="w-3 h-3 mr-1" />
                      {story.timeframe}
                    </Badge>
                    <p className="text-muted-foreground">{story.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Proximity marketing works across all sectors
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {industries.map((industry, idx) => (
                <Card key={idx} className="text-center hover:border-secondary transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-secondary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
                Ready to bring more customers through your door?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Start your first campaign today with a free trial
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessClients;
