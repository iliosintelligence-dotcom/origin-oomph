import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, TrendingUp, BarChart3, Shield, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import restaurantOwnerImage from "@/assets/hero-restaurant-owner.png";
import illustrationGeofencing from "@/assets/illustration-geofencing.png";
import illustrationRevenueGrowth from "@/assets/illustration-revenue-growth.png";
import illustrationAnalytics from "@/assets/illustration-analytics.png";
import illustrationAppPartnership from "@/assets/illustration-app-partnership.png";
import illustrationDashboard from "@/assets/illustration-dashboard.png";
import illustrationCustomerEngagement from "@/assets/illustration-customer-engagement.png";

const Home = () => {
  const valueProps: Array<{
    icon: any;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
  }> = [
    {
      icon: MapPin,
      title: "Precise Location Targeting",
      description: "Capture customer attention the moment they enter your service area, eliminating wasted ad spend. Reach only consumers within walking distance of your shop—no more paying for impressions that never convert.",
      image: illustrationGeofencing,
    },
    {
      icon: TrendingUp,
      title: "Immediate Revenue Impact",
      subtitle: "Your Message, Delivered Inside Their Apps.",
      description: "Proxim drives foot traffic and in-store conversions by serving hyper-relevant offers directly to geofenced users via the popular mobile apps on their phones. Our clients see an average 35% increase in walk-ins within the first month.",
      image: illustrationRevenueGrowth,
    },
    {
      icon: BarChart3,
      title: "Performance You Can Measure",
      description: "Pay only for results, not impressions. Track views, clicks, redemptions, and revenue in real-time through our intuitive dashboard. Optimize your campaigns based on actual ROI data.",
      image: illustrationAnalytics,
    },
  ];

  const howItWorks = [
    { 
      step: 1, 
      title: "Define Your Geofence", 
      description: "Set your target radius around your business location. Choose when your ads appear—peak hours, weekends, or custom schedules that match your customer patterns."
    },
    { 
      step: 2, 
      title: "Users Enter Your Zone", 
      description: "When potential customers with partner apps enter your defined area, our system detects their proximity in real-time while respecting their privacy."
    },
    { 
      step: 3, 
      title: "Ad is Delivered In-App", 
      description: "Your targeted offer appears directly within the apps they are using—maps, ride-hailing, delivery services—guaranteeing high visibility and zero banner blindness."
    },
  ];

  const benefits = [
    { 
      icon: TrendingUp, 
      title: "Guaranteed ROI", 
      description: "Pay-per-action pricing ensures you only invest when customers engage. Stop wasting budget on impressions that go nowhere."
    },
    { 
      icon: Users, 
      title: "Unrivaled Reach", 
      description: "Access 140M+ Nigerian smartphone users through high-traffic mobile apps—not just browsers. Bypass banner blindness entirely."
    },
    { 
      icon: Shield, 
      title: "Privacy-Compliant", 
      description: "NDPR-compliant, anonymized data. Users opt-in through partner apps, ensuring ethical, permission-based marketing."
    },
    { 
      icon: MapPin, 
      title: "Zero Wasted Spend", 
      description: "Hyper-local targeting means your ads only reach customers who can actually visit your store. No geographic waste."
    },
    { 
      icon: Zap, 
      title: "Launch in 24 Hours", 
      description: "No complex setup. Create your campaign, define your radius, and go live within one business day."
    },
    { 
      icon: CheckCircle2, 
      title: "Real-Time Optimization", 
      description: "Adjust radius, timing, and creative on the fly based on live performance data. Maximize every naira spent."
    },
  ];

  const testimonials = [
    {
      quote: "Proxim! helped me bring in 27% more customers during lunch hours. The notifications felt personal and respectful, and my sales jumped within the first week.",
      author: "Lola",
      role: "Owner, Lagos Café",
    },
    {
      quote: "Integrating Proxim!'s SDK into our lifestyle app was seamless. We've unlocked a steady revenue stream and our users enjoy relevant deals as they move around the city.",
      author: "Chinedu",
      role: "Product Manager, Ride-Sharing App",
    },
    {
      quote: "Our Lagos lifestyle app integrated Proxim! and I saw a 14% increase in daily active sessions. Our monthly ad revenue doubled within three months.",
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
      <section className="relative bg-[hsl(30,20%,96%)] py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-8 h-px bg-foreground/40"></span>
              <span className="text-sm font-medium text-foreground/70 tracking-wide uppercase">
                Hyper-Local Mobile Advertising
              </span>
              <span className="w-8 h-px bg-foreground/40"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
              Stop Guessing.<br />Start Converting.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Proxim connects your business directly to geofenced users inside the apps they already use—capturing customer attention the moment they enter your service area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 py-6"
                >
                  Book a Demo
                </Button>
              </Link>
              <Link to="/business-clients">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5 text-base px-8 py-6"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trusted Companies */}
        <div className="container mx-auto px-4 mt-20">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading Nigerian businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            <span className="text-lg font-semibold text-foreground/50">Partner App</span>
            <span className="text-lg font-semibold text-foreground/50">Retail Brand</span>
            <span className="text-lg font-semibold text-foreground/50">Restaurant Chain</span>
            <span className="text-lg font-semibold text-foreground/50">Lifestyle App</span>
            <span className="text-lg font-semibold text-foreground/50">QSR Brand</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>
              <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">Why Proxim</span>
              <span className="w-8 h-px bg-foreground/30"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Eliminate Wasted Ad Spend.<br />Maximize Every Naira.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Traditional advertising wastes 60%+ of your budget on people who will never visit your store. Proxim delivers precision targeting that guarantees optimal reach.
            </p>
          </div>
          <div className="space-y-24">
            {valueProps.map((prop, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className={`space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground">
                    <prop.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{prop.title}</h3>
                  {prop.subtitle && <p className="text-lg font-medium text-foreground/70">{prop.subtitle}</p>}
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                  <div className="pt-2">
                    <Link to="/business-clients">
                      <Button variant="outline" size="default" className="group border-foreground/20 hover:bg-foreground/5">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-[hsl(30,20%,96%)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>
              <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">How It Works</span>
              <span className="w-8 h-px bg-foreground/30"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Simple. Fast. Effective.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Launch your first hyper-local campaign in three simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="flex flex-col items-center space-y-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6"
              >
                Start Your Free Pilot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>
              <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">Benefits</span>
              <span className="w-8 h-px bg-foreground/30"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Proxim Outperforms<br />Traditional Advertising
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature is engineered for one goal: Maximum ROI with zero wasted spend.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground mb-5 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[hsl(30,20%,96%)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>
              <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">Testimonials</span>
              <span className="w-8 h-px bg-foreground/30"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Real Results from Real Businesses</h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of Nigerian businesses already driving revenue with Proxim
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-[hsl(30,20%,96%)] rounded-lg p-8 space-y-6"
              >
                <p className="text-foreground leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-foreground/10">
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 bg-[hsl(30,20%,96%)]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-foreground/30"></span>
              <span className="text-sm font-medium text-foreground/60 tracking-wide uppercase">FAQ</span>
              <span className="w-8 h-px bg-foreground/30"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently asked questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-foreground/10 rounded-lg bg-background px-6">
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Stop Wasting Ad Spend?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-background/70 leading-relaxed">
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
                  className="w-full sm:w-auto bg-transparent text-background border border-background/30 hover:bg-background/10 px-8 py-6"
                >
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
