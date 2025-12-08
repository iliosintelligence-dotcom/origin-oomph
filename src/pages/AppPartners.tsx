import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  Code,
  Users,
  Smartphone,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import illustrationAdvertising from "@/assets/illustration-advertising.jpg";

const AppPartners = () => {
  // Revenue Calculator State
  const [monthlyUsers, setMonthlyUsers] = useState(200000);
  const [proximityReach, setProximityReach] = useState(20);
  const [ctr, setCtr] = useState(10);

  // Form validation schema
  const partnershipFormSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters"),
    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .max(255, "Email must be less than 255 characters"),
    phone: z
      .string()
      .trim()
      .min(10, "Phone number must be at least 10 digits")
      .max(20, "Phone number must be less than 20 characters"),
    appName: z
      .string()
      .trim()
      .min(2, "App name must be at least 2 characters")
      .max(100, "App name must be less than 100 characters"),
    users: z
      .string()
      .trim()
      .min(1, "Number of users is required")
      .max(20, "Invalid number format"),
  });

  // Calculate revenue projections
  const calculateRevenue = (scenario: "conservative" | "base" | "optimistic") => {
    const cvr = scenario === "conservative" ? 3 : scenario === "base" ? 5 : 8; // Conversion rate %
    const aov = 5000; // Average order value in Naira
    const revenueShare = 0.15; // 15% revenue share
    const visits = scenario === "conservative" ? 0.8 : scenario === "base" ? 1 : 1.5;

    const monthlyRevenue =
      monthlyUsers * (proximityReach / 100) * (ctr / 100) * (cvr / 100) * aov * visits * revenueShare;

    return Math.round(monthlyRevenue);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handlePartnershipSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      appName: formData.get("appName") as string,
      users: formData.get("users") as string,
    };

    try {
      partnershipFormSchema.parse(data);
      toast.success("Partnership request submitted! We'll contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "New Revenue Stream",
      description: "Generate additional income from your existing user base without disrupting user experience",
    },
    {
      icon: Users,
      title: "Enhanced Engagement",
      description: "Keep users active with relevant, location-based offers that add value to their daily lives",
    },
    {
      icon: Zap,
      title: "Fast Integration",
      description: "Our lightweight SDK integrates in hours, not weeks. Complete documentation and support included",
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "NDPR compliant with full user consent controls. We prioritize user privacy and trust",
    },
    {
      icon: Code,
      title: "Simple API",
      description: "Clean, well-documented API with code samples. Easy to implement and maintain",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track performance, revenue, and engagement metrics in your partner dashboard",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Sign Partnership Agreement",
      description: "Quick 48-hour onboarding process with dedicated partnership manager",
      icon: CheckCircle2,
    },
    {
      step: 2,
      title: "Integrate SDK",
      description: "Add our lightweight SDK to your app with comprehensive documentation",
      icon: Code,
    },
    {
      step: 3,
      title: "Configure & Launch",
      description: "Set up targeting preferences and launch proximity campaigns",
      icon: Target,
    },
    {
      step: 4,
      title: "Earn Revenue",
      description: "Start generating revenue from day one with real-time tracking",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      q: "How much can I realistically earn as an app partner?",
      a: "Earnings depend on your monthly active users, engagement rates, and location targeting. Apps with 100k+ MAU typically earn ₦500k-₦5M monthly. Use our calculator above for personalized projections.",
    },
    {
      q: "What's the revenue share model?",
      a: "Partners receive 15% of generated revenue with no upfront costs. We handle all business operations, customer support, and payment processing.",
    },
    {
      q: "How long does SDK integration take?",
      a: "Most partners complete integration in 1-2 days. Our SDK is lightweight (~50KB), well-documented, and includes sample code for common scenarios.",
    },
    {
      q: "Will proximity notifications annoy my users?",
      a: "We prioritize user experience with smart frequency capping, relevance algorithms, and user preference controls. Average opt-out rate is below 5%.",
    },
    {
      q: "What data privacy measures are in place?",
      a: "We're fully NDPR compliant with explicit user consent, encrypted data transmission, and transparent privacy policies. Location data is anonymized and never shared.",
    },
    {
      q: "Which types of apps work best with Proxim!?",
      a: "Apps with location-aware users perform best: lifestyle, food delivery, transportation, social, entertainment, and local services apps.",
    },
    {
      q: "What are the technical requirements?",
      a: "iOS 12+ and Android 6.0+. Support for React Native, Flutter, and native development. Location permissions required.",
    },
    {
      q: "How do I track my earnings?",
      a: "Real-time partner dashboard shows impressions, clicks, conversions, and earnings. Monthly detailed reports and automated payouts.",
    },
    {
      q: "What kind of campaigns will show to my users?",
      a: "High-quality offers from verified Nigerian businesses: retail, F&B, entertainment, and services. All campaigns are reviewed for relevance and quality.",
    },
    {
      q: "Can I control which campaigns show to my users?",
      a: "Yes! You have full control over campaign categories, business types, and geographic targeting through your partner dashboard.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-40 bg-background">
          <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-px bg-foreground/40"></span>
                  <span className="text-sm font-medium text-foreground/70 tracking-wide uppercase">
                    App Partners
                  </span>
                  <span className="w-8 h-px bg-foreground/40"></span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Monetize your app with <span className="font-bodoni italic text-primary">proximity marketing</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Turn your Nigerian user base into a revenue stream. Easy integration, privacy-first approach, and transparent revenue sharing.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a href="#calculator">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Calculate Revenue Potential
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                  <a href="#benefits">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <img
                  src={illustrationAdvertising}
                  alt="App partnership revenue growth"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Calculator */}
        <section id="calculator" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
                  Calculate Your Revenue Potential
                </h2>
                <p className="text-lg text-secondary-foreground/70">
                  Adjust the sliders to see how much you could earn as a Proxim partner
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Input Controls Card */}
                <div className="bg-secondary-foreground/5 backdrop-blur rounded-3xl p-8 space-y-8">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium text-secondary-foreground/80">Monthly Active Users (MAU)</Label>
                      <span className="text-2xl font-bold text-primary">
                        {monthlyUsers.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[monthlyUsers]}
                      onValueChange={(value) => setMonthlyUsers(value[0])}
                      min={10000}
                      max={1000000}
                      step={10000}
                      className="w-full [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
                    />
                    <div className="flex justify-between text-sm text-secondary-foreground/50">
                      <span>10k</span>
                      <span>1M</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium text-secondary-foreground/80">Proximity Reach %</Label>
                      <span className="text-2xl font-bold text-primary">{proximityReach}%</span>
                    </div>
                    <Slider
                      value={[proximityReach]}
                      onValueChange={(value) => setProximityReach(value[0])}
                      min={5}
                      max={50}
                      step={1}
                      className="w-full [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
                    />
                    <div className="flex justify-between text-sm text-secondary-foreground/50">
                      <span>5%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium text-secondary-foreground/80">Click-Through Rate (CTR) %</Label>
                      <span className="text-2xl font-bold text-primary">{ctr}%</span>
                    </div>
                    <Slider
                      value={[ctr]}
                      onValueChange={(value) => setCtr(value[0])}
                      min={2}
                      max={20}
                      step={1}
                      className="w-full [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
                    />
                    <div className="flex justify-between text-sm text-secondary-foreground/50">
                      <span>2%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                {/* Revenue Projections Card */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-secondary-foreground text-center">
                    Projected Monthly Revenue
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-secondary-foreground/5 backdrop-blur rounded-2xl p-6 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-secondary-foreground/60 font-medium">Conservative</div>
                        <div className="text-xs text-secondary-foreground/40 mt-1">3% CVR, Low frequency</div>
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {formatCurrency(calculateRevenue("conservative"))}
                      </div>
                    </div>

                    <div className="bg-primary/20 border-2 border-primary rounded-2xl p-6 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-primary font-bold">Base Scenario</div>
                        <div className="text-xs text-secondary-foreground/40 mt-1">5% CVR, Avg frequency</div>
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {formatCurrency(calculateRevenue("base"))}
                      </div>
                    </div>

                    <div className="bg-secondary-foreground/5 backdrop-blur rounded-2xl p-6 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-secondary-foreground/60 font-medium">Optimistic</div>
                        <div className="text-xs text-secondary-foreground/40 mt-1">8% CVR, High frequency</div>
                      </div>
                      <div className="text-3xl font-bold text-accent">
                        {formatCurrency(calculateRevenue("optimistic"))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-secondary-foreground/50 mb-4">
                      * Projections based on 15% revenue share. Actual results may vary.
                    </p>
                    <Link to="#partnership-form">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Schedule Partnership Call
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section id="benefits" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Partner with Proxim!?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join leading Nigerian apps already earning with proximity marketing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-secondary"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-info flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Partnership to Revenue in 4 Steps
              </h2>
              <p className="text-lg text-muted-foreground">Fast onboarding, simple integration, real results</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-info to-secondary -translate-y-1/2"></div>

                <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                  {howItWorks.map((step, idx) => (
                    <div key={idx} className="relative">
                      <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-info text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                            {step.step}
                          </div>
                          <step.icon className="w-10 h-10 text-secondary mx-auto" />
                          <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-secondary shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-secondary to-secondary/90 p-8 text-secondary-foreground">
                  <Badge variant="default" className="mb-4 bg-white/20 text-secondary-foreground">
                    Partner Success Story
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Nigerian Lifestyle App</h2>
                  <p className="text-lg opacity-90">Food & Entertainment Discovery Platform</p>
                </div>
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">350K</div>
                      <div className="text-sm text-muted-foreground">Monthly Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">₦2.8M</div>
                      <div className="text-sm text-muted-foreground">Monthly Revenue Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-info mb-2">12%</div>
                      <div className="text-sm text-muted-foreground">Average Click-Through Rate</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">The Challenge:</strong> A popular Nigerian lifestyle app
                      with 350k MAU was looking to monetize their user base without disrupting the core experience
                      or overwhelming users with ads.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">The Solution:</strong> Integrated Proxim! SDK to show
                      relevant proximity offers when users were near partner businesses. Smart frequency capping
                      ensured no user fatigue.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">The Results:</strong> Within 60 days, the app generated
                      ₦2.8M in monthly recurring revenue with a 12% CTR—3x higher than traditional mobile ads.
                      User retention improved by 8% due to added value.
                    </p>
                  </div>

                  <div className="pt-8 mt-8 border-t">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-info flex-shrink-0"></div>
                      <div>
                        <p className="text-foreground italic mb-2">
                          "Proxim! gave us a new revenue stream without compromising user experience. The SDK
                          integration was seamless, and the results exceeded our projections."
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Chinedu O.</strong> — Head of Growth
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know about becoming a Proxim! partner
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border-2 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-secondary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section id="partnership-form" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Schedule Your Partnership Call
                </h2>
                <p className="text-lg text-muted-foreground">
                  Connect with our partnership team to discuss your app and revenue potential
                </p>
              </div>

              <Card className="border-2 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handlePartnershipSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        maxLength={100}
                        className="h-12"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          maxLength={255}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+234 701 234 5678"
                          required
                          maxLength={20}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="appName">App Name *</Label>
                        <Input
                          id="appName"
                          name="appName"
                          placeholder="Your App Name"
                          required
                          maxLength={100}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="users">Monthly Active Users *</Label>
                        <Input
                          id="users"
                          name="users"
                          type="number"
                          placeholder="e.g., 100000"
                          required
                          min="1000"
                          max="100000000"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Schedule Partnership Call
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our Privacy Policy and NDPR compliance terms.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppPartners;
