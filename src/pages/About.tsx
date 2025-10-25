import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Shield, TrendingUp, ArrowRight, Linkedin, Mail } from "lucide-react";
import teamDavid from "@/assets/team-david.jpg";
import teamDaniel from "@/assets/team-daniel.jpeg";

const About = () => {
  const team = [
    {
      name: "Dr. David Joshua",
      role: "Founder & Chief Executive Officer",
      image: teamDavid,
      bio: "Dr. David Joshua is a visionary entrepreneur with a proven track record of building innovative technology solutions across multiple sectors. As founder of Proxim, he brings deep expertise from founding successful ventures in healthcare technology, where he developed solutions that improved patient outcomes and operational efficiency. His diverse experience spans legal technology and research, giving him a unique perspective on building compliant, scalable platforms.",
      quote: "Every business owner I've met has the same frustration: 'People walk past my shop every day, but they don't know what I'm offering right now.' Proxim solves that. We're not just building marketing technology—we're helping local businesses thrive and creating meaningful revenue for app partners.",
      expertise: ["Business Strategy & Vision", "Market Development", "Product Innovation", "Partnership Development", "Healthcare Technology"],
      email: "jjoshuadavidd@gmail.com",
      linkedin: "https://linkedin.com/in/dr-joshua-david"
    },
    {
      name: "Oduma Daniel",
      role: "Co-Founder & Chief Technology Officer",
      image: teamDaniel,
      bio: "Oduma Daniel is a versatile and highly accomplished software developer with over seven years of expertise building elegant, high-performing software solutions. As Proxim's CTO, he brings a proven track record of delivering impactful projects for organizations of all sizes across diverse sectors including Real Estate, Fashion, Banking, Government, and Retail. His technical excellence and architectural vision ensure Proxim's platform is robust, scalable, and built to handle Nigeria's unique technological landscape.",
      quote: "Great technology should be invisible—it should just work. At Proxim, we're building infrastructure that handles the complexity behind the scenes so app partners and businesses can focus on what matters: connecting and growing.",
      expertise: ["Full-Stack Development", "System Architecture", "API Development", "Cloud Infrastructure", "Payment Integration"],
      email: "zongthedeveloper@gmail.com",
      linkedin: "https://linkedin.com/in/oduma-daniel"
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
                The Team Behind Proxim
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Combining healthcare innovation, legal expertise, and world-class software engineering to revolutionize proximity marketing in Nigeria
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {team.map((member, idx) => (
                <Card key={idx} className="hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-secondary font-semibold mb-4">{member.role}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                      
                      <div className="bg-muted/50 border-l-4 border-secondary p-4 mb-4 italic">
                        <p className="text-sm text-foreground">"{member.quote}"</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 text-foreground">Key Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, i) => (
                            <span key={i} className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-border">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </Button>
                        </a>
                        <a href={`mailto:${member.email}`}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Mail className="w-4 h-4" />
                            Email
                          </Button>
                        </a>
                      </div>
                    </div>
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
