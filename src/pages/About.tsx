import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Shield, TrendingUp, ArrowRight } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Aisha Bello",
      role: "Chief Executive Officer",
      bio: "Former digital strategist at a leading Lagos agency, Aisha founded Proxim! after witnessing the gap between local businesses and mobile consumers.",
    },
    {
      name: "Emeka Okonkwo",
      role: "Chief Technology Officer",
      bio: "With 15 years of experience in mobile development, Emeka architected our lightweight SDK to operate efficiently even on low-end devices.",
    },
    {
      name: "Tolu Adeyemi",
      role: "Head of Partnerships",
      bio: "A seasoned business development specialist who has negotiated partnerships with top Nigerian apps and fintech platforms.",
    },
    {
      name: "Fatima Usman",
      role: "Customer Success Lead",
      bio: "Fatima ensures every business client understands how to craft winning campaigns and measure results.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empower Nigerian businesses to thrive in the digital age through respectful, data-driven marketing",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Level the playing field so a neighbourhood café can compete with a multinational chain",
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "Committed to data privacy, transparency and following Nigeria's Data Protection Act",
    },
    {
      icon: TrendingUp,
      title: "Economic Inclusion",
      description: "See proximity marketing as a force for community growth and economic opportunity",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-info to-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Empowering Nigerian Businesses
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Our mission is to empower Nigerian businesses to thrive in the digital age by connecting them with nearby customers through respectful, data-driven marketing
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Proxim! was born in 2023 when our founders noticed a disconnect: Nigerian smartphone users were exploding in number, yet local businesses struggled to reach them cost-effectively. Reports predicted that mobile penetration would hit 85% and the location-based services market would more than double by 2030.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Recognising this opportunity, we built a platform that bridges mobile apps and local merchants. Starting in Lagos with a handful of pilot merchants, we've expanded to Abuja, Port Harcourt and beyond.
                </p>
                <p className="text-lg leading-relaxed">
                  We remain committed to data privacy, ease of use and delivering tangible results for Nigerian businesses. We believe in levelling the playing field so that a neighbourhood café can compete with a multinational chain, and we see proximity marketing as a force for community growth and economic inclusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What drives us every day
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, idx) => (
                <Card key={idx} className="text-center hover:border-secondary transition-colors">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Combining expertise in mobile technology, data science and local commerce
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-secondary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-info">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-5xl font-bold text-primary-foreground mb-2">2023</div>
                <p className="text-lg text-primary-foreground/80">Founded</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-foreground mb-2">3+</div>
                <p className="text-lg text-primary-foreground/80">Major Cities</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-foreground mb-2">140M+</div>
                <p className="text-lg text-primary-foreground/80">Users Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join us in transforming Nigerian businesses
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a business owner or app developer, let's grow together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  Read Our Blog
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

export default About;
