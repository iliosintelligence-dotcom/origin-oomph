import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, TrendingUp, BarChart3, Shield, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-creative-proximity.jpg";
import restaurantOwnerImage from "@/assets/hero-restaurant-owner.png";
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
      title: "Precise Location Targeting",
      description: "Capture customer attention the moment they enter your service area, eliminating wasted ad spend. Reach only consumers within walking distance of your shop—no more paying for impressions that never convert.",
      image: illustrationGeofencing,
    },
    {
      icon: TrendingUp,
      title: "Immediate Revenue Impact",
      description: "Drive foot traffic and in-store conversions with hyper-relevant offers delivered at the perfect moment. Our clients see an average 35% increase in walk-ins within the first month.",
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
      title: "Ad is Delivered Instantly", 
      description: "Your targeted offer appears directly within the apps they're already using—maps, ride-hailing, delivery services. High visibility, zero banner blindness."
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
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-foreground mb-2">
                Hyper-Local Mobile Advertising
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
                Stop Guessing. Start Converting.
              </h1>
              <p className="text-2xl md:text-3xl text-primary-foreground/95 leading-relaxed font-light">
                The hyper-local ad platform that delivers guaranteed reach and unprecedented conversion rates.
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Proxim connects your business directly to geofenced users inside the apps they already use—capturing customer attention the moment they enter your service area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl text-lg px-8 py-6"
                  >
                    See the Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-primary-foreground border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-6"
                  >
                    Calculate Your ROI
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/5 rounded-3xl blur-2xl"></div>
              <img
                src={heroImage}
                alt="Proximity marketing delivering targeted ads to nearby customers"
                className="rounded-2xl w-full h-auto shadow-2xl relative z-10 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-28 md:py-40 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Eliminate Wasted Ad Spend.<br />Maximize Every Naira.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Traditional advertising wastes 60%+ of your budget on people who will never visit your store. Proxim delivers precision targeting that guarantees optimal reach.
            </p>
          </div>
          <div className="space-y-32">
            {valueProps.map((prop, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-auto rounded-2xl shadow-xl relative z-10 border border-border"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <prop.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">{prop.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">{prop.description}</p>
                  <div className="pt-4">
                    <Link to="/business-clients">
                      <Button variant="outline" size="lg" className="group">
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
      <section className="py-28 md:py-40 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.3),transparent)]"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Simple. Fast. Effective.</h2>
            <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-3xl mx-auto">
              Launch your first hyper-local campaign in three simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-start space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{step.title}</h3>
                  <p className="text-secondary-foreground/80 text-lg leading-relaxed">{step.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-6 text-primary">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl text-lg px-10 py-6"
              >
                Start Your Free Pilot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Why Proxim Outperforms<br />Traditional Advertising
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is engineered for one goal: Maximum ROI with zero wasted spend.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-r from-muted via-muted/50 to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-6xl md:text-7xl font-bold text-primary tracking-tight">{stat.value}</div>
                <div className="text-xl text-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Real Results from Real Businesses</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of Nigerian businesses already driving revenue with Proxim
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-card border border-border rounded-2xl p-10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-6">
                  <div className="font-bold text-foreground text-lg">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
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
      <section className="py-28 md:py-40 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.3),transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Stop Wasting Ad Spend?
            </h2>
            <p className="text-2xl md:text-3xl mb-12 text-primary-foreground/90 leading-relaxed font-light">
              Launch your first hyper-local campaign and see measurable results within 24 hours. No setup fees. No long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl text-lg px-10 py-7"
                >
                  Start Your Free Pilot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-primary-foreground border-2 border-white/30 hover:bg-white/20 text-lg px-10 py-7"
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
