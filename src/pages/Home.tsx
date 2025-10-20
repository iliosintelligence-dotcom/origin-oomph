import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, TrendingUp, BarChart3, Shield, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import illustrationReach from "@/assets/illustration-reach.png";
import illustrationConversions from "@/assets/illustration-conversions.png";
import illustrationAnalytics from "@/assets/illustration-analytics.png";

const Home = () => {
  const valueProps = [
    {
      icon: MapPin,
      title: "Reach nearby users",
      description: "Target customers when they're close to your business with precision geofencing.",
      image: illustrationReach,
    },
    {
      icon: TrendingUp,
      title: "Boost conversions",
      description: "Turn foot traffic into revenue with timely, relevant proximity notifications.",
      image: illustrationConversions,
    },
    {
      icon: BarChart3,
      title: "Measure results",
      description: "Track reach, CTR, and revenue in real-time with powerful analytics.",
      image: illustrationAnalytics,
    },
  ];

  const howItWorks = [
    { step: 1, title: "Define zones", description: "Set up geofences around your locations" },
    { step: 2, title: "Connect app/business", description: "Integrate with our simple SDK or dashboard" },
    { step: 3, title: "Notify nearby users", description: "Send targeted offers when customers are nearby" },
    { step: 4, title: "Track & optimize", description: "Monitor performance and improve campaigns" },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Revenue Growth", description: "Increase sales with location-based offers" },
    { icon: Users, title: "Customer Growth", description: "Attract new customers in your area" },
    { icon: Shield, title: "Privacy-First", description: "NDPR compliant and secure by design" },
    { icon: MapPin, title: "Partnership Ready", description: "Easy integration for app partners" },
    { icon: Zap, title: "Fast Setup", description: "Go live in minutes, not weeks" },
    { icon: CheckCircle2, title: "Proven Success", description: "Trusted by leading Nigerian businesses" },
  ];

  const testimonials = [
    {
      quote: "Proxim! helped us increase foot traffic by 45% in just 3 months. The ROI is incredible.",
      author: "Adebayo Johnson",
      role: "Owner, Lagos Retail Store",
    },
    {
      quote: "As an app partner, we've unlocked a new revenue stream while improving user engagement.",
      author: "Ngozi Okafor",
      role: "CTO, Nigerian Fintech App",
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. Game changer for our marketing.",
      author: "Ibrahim Yusuf",
      role: "Marketing Director, Abuja Restaurant Chain",
    },
  ];

  const stats = [
    { value: "2M+", label: "Users reached monthly" },
    { value: "12%", label: "Average CTR" },
    { value: "8x", label: "Revenue uplift" },
  ];

  const faqs = [
    {
      q: "What is proximity marketing?",
      a: "Proximity marketing uses location technology like GPS and Bluetooth to send targeted messages to customers when they're near your business, driving foot traffic and conversions.",
    },
    {
      q: "How does Proxim! ensure privacy compliance?",
      a: "We're fully NDPR compliant with opt-in consent, encrypted data, and transparent privacy controls. User privacy is our top priority.",
    },
    {
      q: "What's the difference between app partners and business clients?",
      a: "App partners integrate our SDK to monetize their apps through proximity campaigns. Business clients use our platform to reach nearby customers and drive sales.",
    },
    {
      q: "How long does integration take?",
      a: "App partners can integrate our SDK in 1-2 days. Business clients can set up campaigns in minutes through our dashboard.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept card payments, bank transfers, and mobile money. All plans are billed in Nigerian Naira.",
    },
    {
      q: "Can I try before I buy?",
      a: "Yes! We offer a free trial for business clients and a sandbox environment for app partners to test integration.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-info to-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Proximity marketing that drives local revenue
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Reach customers when they're nearby. Boost conversions with privacy-first location-based notifications for Nigerian businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
                    See Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroPhone}
                alt="Proximity marketing notification on mobile phone"
                className="rounded-2xl shadow-2xl w-full h-auto"
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
