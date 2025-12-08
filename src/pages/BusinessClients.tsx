import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, Target, Clock, CheckCircle2, BarChart3, ArrowRight, Sparkles, Upload, Image } from "lucide-react";
import restaurantOwnerImage from "@/assets/hero-restaurant-owner.png";
import { useState } from "react";

const BusinessClients = () => {
  const [campaignName, setCampaignName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [offerDetails, setOfferDetails] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [generatedAd, setGeneratedAd] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleGenerateAd = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const aiGeneratedText = `🎯 Exclusive Offer at ${campaignName || 'Your Business'}!\n\n${offerDetails || 'Special promotion available now'}\n\nPerfect for ${targetAudience || 'everyone'}. Visit us today and experience the difference!\n\n✨ Limited time only - Don't miss out!`;
      setGeneratedAd(aiGeneratedText);
      setIsGenerating(false);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

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
        <section className="py-24 md:py-40 bg-background">
          <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-px bg-foreground/40"></span>
                  <span className="text-sm font-medium text-foreground/70 tracking-wide uppercase">
                    Business Clients
                  </span>
                  <span className="w-8 h-px bg-foreground/40"></span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Bring Customers Through Your Door with <span className="font-bodoni italic text-primary">Hyper-Precise Offers</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Over 85% of Nigerians own mobile devices. Proxim turns those phones into a direct line to nearby shoppers, helping you increase foot traffic and sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link to="/contact">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5">
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


        {/* Campaign Creator */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Create Your Campaign with AI
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Design compelling ads in minutes with AI assistance
              </p>
            </div>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Campaign Details</TabsTrigger>
                    <TabsTrigger value="ai-ad">AI Ad Creator</TabsTrigger>
                    <TabsTrigger value="upload">Upload Media</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="campaign-name">Campaign Name</Label>
                      <Input
                        id="campaign-name"
                        placeholder="e.g., Weekend Special Promotion"
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-type">Business Type</Label>
                      <Input
                        id="business-type"
                        placeholder="e.g., Restaurant, Retail Store, Salon"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="offer">Offer Details</Label>
                      <Textarea
                        id="offer"
                        placeholder="Describe your special offer or promotion"
                        value={offerDetails}
                        onChange={(e) => setOfferDetails(e.target.value)}
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="audience">Target Audience</Label>
                      <Input
                        id="audience"
                        placeholder="e.g., Young professionals, Families, Students"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="ai-ad" className="space-y-4 mt-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-5 h-5 text-secondary" />
                          <h3 className="font-semibold">AI-Generated Ad Copy</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Fill in the campaign details first, then let our AI create compelling ad copy for you.
                        </p>
                        <Button 
                          onClick={handleGenerateAd} 
                          disabled={!campaignName || !offerDetails || isGenerating}
                          className="w-full"
                        >
                          {isGenerating ? (
                            <>
                              <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-2 h-4 w-4" />
                              Generate Ad Copy
                            </>
                          )}
                        </Button>
                      </div>
                      
                      {generatedAd && (
                        <div className="space-y-2">
                          <Label htmlFor="generated-ad">Generated Ad (Edit as needed)</Label>
                          <Textarea
                            id="generated-ad"
                            value={generatedAd}
                            onChange={(e) => setGeneratedAd(e.target.value)}
                            rows={8}
                            className="font-mono text-sm"
                          />
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="upload" className="space-y-4 mt-6">
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="font-semibold mb-2">Upload Campaign Media</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Upload images, videos, or graphics for your campaign
                        </p>
                        <Input
                          type="file"
                          multiple
                          accept="image/*,video/*"
                          onChange={handleFileUpload}
                          className="max-w-xs mx-auto cursor-pointer"
                        />
                      </div>
                      
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <Label>Uploaded Files ({uploadedFiles.length})</Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {uploadedFiles.map((file, idx) => (
                              <div key={idx} className="border rounded-lg p-3 text-center">
                                <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                                <p className="text-xs truncate">{file.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {(file.size / 1024).toFixed(1)} KB
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full" size="lg">
                    <Target className="mr-2 h-5 w-5" />
                    Launch Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
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
