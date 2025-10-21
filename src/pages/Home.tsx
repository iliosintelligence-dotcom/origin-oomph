import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, TrendingUp, BarChart3, Shield, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-creative-proximity.jpg";
import illustrationGeofencing from "@/assets/illustration-geofencing.png";
import illustrationRevenueGrowth from "@/assets/illustration-revenue-growth.png";
import illustrationAnalytics from "@/assets/illustration-analytics.png";
import illustrationAppPartnership from "@/assets/illustration-app-partnership.png";
import illustrationDashboard from "@/assets/illustration-dashboard.png";
import illustrationCustomerEngagement from "@/assets/illustration-customer-engagement.png";

const Home = () => {
  const valueProps = [
    {
      icon: MapPin,
      title: "Reach real people nearby",
      description: "With over 200 million Nigerians owning mobile devices, tap into the country's most pervasive medium. Your ads reach only consumers within walking distance of your shop.",
      image: illustrationCustomerEngagement,
    },
    {
      icon: TrendingUp,
      title: "Increase foot traffic and sales",
      description: "Localised messages delivered at the right time drive immediate action, boosting in-store visits and average spend. A Lagos eatery saw a 35% uplift in walk-ins after using Proxim!",
      image: illustrationRevenueGrowth,
    },
    {
      icon: BarChart3,
      title: "Measure results in real-time",
      description: "Our pay-per-action pricing means you invest in results, not impressions. Track views, clicks, conversions and revenue through our intuitive dashboard.",
      image: illustrationDashboard,
    },
  ];

  const howItWorks = [
    { step: 1, title: "Integrate with apps", description: "We work with trusted Nigerian apps (maps, ride-hailing, delivery) to embed our proximity SDK with full developer support" },
    { step: 2, title: "Create your offer", description: "Set a promotion, coupon or message. Choose radius, dates, times and call-to-action through our dashboard" },
    { step: 3, title: "Reach nearby shoppers", description: "When users enter your area, partner apps deliver your message exactly when they're ready to buy" },
    { step: 4, title: "Track results", description: "Analytics show views, redemptions and visits. Refine radius, timing and creative to maximise return" },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Revenue Growth", description: "Increase sales with location-based offers that drive immediate action" },
    { icon: Users, title: "Reach Mobile Nigeria", description: "Tap into 140 million smartphone users across Nigeria's cities" },
    { icon: Shield, title: "Privacy-First", description: "Anonymised data, NDPR compliant, users opt-in through partner apps" },
    { icon: MapPin, title: "Hyperlocal Focus", description: "Target customers within walking distance of your business" },
    { icon: Zap, title: "Quick Launch", description: "Sign up and go live within one business day" },
    { icon: CheckCircle2, title: "Performance Pricing", description: "Pay only when customers engage with your offer" },
  ];

  const testimonials = [
    {
      quote: "Proxim! helped us bring in 27% more customers during lunch hours. The notifications felt personal and respectful, and our sales jumped within the first week.",
      author: "Lola",
      role: "Owner, Lagos Café",
    },
    {
      quote: "Integrating Proxim!'s SDK into our lifestyle app was seamless. We've unlocked a steady revenue stream and our users enjoy relevant deals as they move around the city.",
      author: "Chinedu",
      role: "Product Manager, Ride-Sharing App",
    },
    {
      quote: "A Lagos lifestyle app integrated Proxim! and saw a 14% increase in daily active sessions. Monthly ad revenue doubled within three months.",
      author: "Ibrahim Yusuf",
      role: "Marketing Director, Lifestyle App",
    },
  ];

  const stats = [
    { value: "140M+", label: "Smartphone users in Nigeria" },
    { value: "35%", label: "Average foot traffic increase" },
    { value: "USD 0.50B", label: "Market size by 2030" },
  ];

  const faqs = [
    {
      q: "What is proximity marketing?",
      a: "It's the delivery of personalised messages to consumers' mobile devices when they're physically near your business. It relies on smartphones, GPS and connectivity to deliver relevant information in real time.",
    },
    {
      q: "Does Proxim! store personal data?",
      a: "No. Our technology works with anonymised location signals. Users must grant permission to partner apps, and we follow Nigeria's data-privacy laws.",
    },
    {
      q: "How quickly can I start a campaign?",
      a: "You can sign up, set your promotion and go live within one business day. Our team will guide you through the process.",
    },
    {
      q: "Is it expensive?",
      a: "Pricing starts with a free trial, and you only pay when customers engage with your offer. Plans scale as your business grows.",
    },
    {
      q: "What's the difference between app partners and business clients?",
      a: "App partners integrate our SDK to monetize their apps through proximity campaigns. Business clients use our platform to reach nearby customers and drive sales.",
    },
    {
      q: "How does Proxim! comply with privacy rules?",
      a: "We use anonymised location data and follow Nigeria's Data Protection Act. Customers only see offers if they've opted in through partner apps.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-info to-primary py-20 md:py-32 animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,178,89,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(255,203,5,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-warning/20 text-warning-foreground rounded-full text-sm font-semibold border border-warning/30">
                  🚀 Nigeria's #1 Proximity Marketing Platform
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Proximity marketing that drives{" "}
                <span className="bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
                  local revenue
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Reach 140 million Nigerian smartphone users when they're near your business. Drive foot traffic, boost conversions, and measure results with Nigeria's first privacy-first proximity marketing platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-2xl">
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button 
                    size="lg" 
                    className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
                  >
                    See Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-warning rounded-2xl blur-2xl opacity-20 animate-pulse-glow"></div>
              <img
                src={heroImage}
                alt="Proximity marketing visualization with Nigerian cityscape and location signals"
                className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Proxim! works for Nigerian businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform location data into revenue with our powerful proximity marketing platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => (
              <Card key={idx} className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 space-y-4">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                  </div>
                  <prop.icon className="w-12 h-12 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How it works</h2>
            <p className="text-lg text-muted-foreground">Four simple steps to proximity marketing success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-info text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for growth</h2>
            <p className="text-lg text-muted-foreground">Everything you need to succeed with proximity marketing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="hover:border-secondary transition-colors">
                <CardContent className="p-6 space-y-3">
                  <benefit.icon className="w-10 h-10 text-secondary" />
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-secondary">{stat.value}</div>
                <div className="text-lg text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Nigerian businesses</h2>
            <p className="text-lg text-muted-foreground">See what our partners say about us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl text-secondary">"</div>
                  <p className="text-foreground italic">{testimonial.quote}</p>
                  <div className="pt-4 border-t">
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about Proxim!</p>
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

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Start your free trial today
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of Nigerian businesses driving revenue with proximity marketing
          </p>
          <Link to="/contact">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
