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
      <section className="relative bg-primary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Proximity marketing that drives local revenue
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Reach 140 million Nigerian smartphone users when they're near your business. Drive foot traffic, boost conversions, and measure results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    See Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Proximity marketing visualization"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl">
              Why Proxim! works for Nigerian businesses
            </h2>
          </div>
          <div className="space-y-24">
            {valueProps.map((prop, idx) => (
              <div key={idx} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <img src={prop.image} alt={prop.title} className="w-full h-auto rounded" />
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <prop.icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{prop.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">How it works</h2>
          </div>
          <div className="space-y-12">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Built for growth</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="space-y-3">
                <benefit.icon className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
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
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Trusted by Nigerian businesses</h2>
          </div>
          <div className="space-y-16 max-w-4xl">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="space-y-4">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Frequently asked questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b">
                <AccordionTrigger className="text-left font-semibold py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Start your free trial today
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Join hundreds of Nigerian businesses driving revenue with proximity marketing
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
