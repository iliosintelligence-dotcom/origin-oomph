import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Proximity Marketing Works in Nigeria",
      excerpt: "Discover how Nigeria's 140 million smartphone users and high mobile penetration create the perfect environment for proximity marketing success.",
      author: "Aisha Bello",
      date: "2025-10-15",
      readTime: "8 min read",
      category: "Market Insights",
      slug: "why-proximity-marketing-works-nigeria",
    },
    {
      id: 2,
      title: "How Geofencing Advertising Increases Sales for Lagos Retailers",
      excerpt: "53% of shoppers visit a store after receiving a location-based message. Learn practical examples from successful Lagos campaigns.",
      author: "Emeka Okonkwo",
      date: "2025-10-12",
      readTime: "10 min read",
      category: "Case Study",
      slug: "geofencing-lagos-retailers",
    },
    {
      id: 3,
      title: "In-App Advertising Trends: Nigeria's Mobile-First Future",
      excerpt: "In-app advertising accounts for 30.1% of digital ad spend. Understand what this means for Nigerian businesses and app developers.",
      author: "Tolu Adeyemi",
      date: "2025-10-08",
      readTime: "7 min read",
      category: "Industry Trends",
      slug: "in-app-advertising-trends-nigeria",
    },
    {
      id: 4,
      title: "Local SEO Tips for Nigerian Businesses",
      excerpt: "88% of people who search for businesses on smartphones call or visit within a day. Optimize your Google Business Profile for proximity success.",
      author: "Fatima Usman",
      date: "2025-10-05",
      readTime: "9 min read",
      category: "Best Practices",
      slug: "local-seo-tips-nigeria",
    },
    {
      id: 5,
      title: "Case Study: How Proxim! Helped a Lagos Restaurant Double Foot Traffic",
      excerpt: "A data-driven breakdown of campaign setup, results and lessons learned from a successful restaurant proximity campaign.",
      author: "Chinedu Okoro",
      date: "2025-10-01",
      readTime: "12 min read",
      category: "Case Study",
      slug: "lagos-restaurant-case-study",
    },
    {
      id: 6,
      title: "Understanding Privacy in Location-Based Marketing",
      excerpt: "Learn how Proxim! anonymises user data and complies with Nigeria's Data Protection Act to keep your campaigns respectful and legal.",
      author: "Ngozi Okafor",
      date: "2025-09-28",
      readTime: "6 min read",
      category: "Privacy & Compliance",
      slug: "privacy-location-based-marketing",
    },
    {
      id: 7,
      title: "Geofencing vs. Traditional Advertising in Nigeria",
      excerpt: "Compare cost and ROI as digital advertising grows 8.5% to USD 340M. See effectiveness metrics for proximity vs traditional ads.",
      author: "Ibrahim Yusuf",
      date: "2025-09-25",
      readTime: "8 min read",
      category: "Market Insights",
      slug: "geofencing-vs-traditional-advertising",
    },
    {
      id: 8,
      title: "How Mobile Apps Can Monetise with Proximity Marketing",
      excerpt: "Guide for developers on integration and revenue opportunities. Turn your app into a revenue stream with location-based ads.",
      author: "Emeka Okonkwo",
      date: "2025-09-22",
      readTime: "11 min read",
      category: "App Partners",
      slug: "app-monetization-proximity-marketing",
    },
    {
      id: 9,
      title: "The Future of Location-Based Services in Nigeria",
      excerpt: "Market projections from USD 0.29B in 2025 to USD 0.50B by 2030, emerging technologies and regulatory trends shaping the industry.",
      author: "Aisha Bello",
      date: "2025-09-19",
      readTime: "10 min read",
      category: "Industry Trends",
      slug: "future-location-based-services-nigeria",
    },
    {
      id: 10,
      title: "Top Industries Benefiting from Proximity Marketing",
      excerpt: "Explore use cases across food & beverage, retail, entertainment, health & fitness and services sectors in Nigeria.",
      author: "Tolu Adeyemi",
      date: "2025-09-15",
      readTime: "9 min read",
      category: "Industry Insights",
      slug: "top-industries-proximity-marketing",
    },
  ];

  const categories = ["All", "Market Insights", "Case Study", "Industry Trends", "Best Practices", "App Partners", "Privacy & Compliance"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-info">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Proxim! Blog
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Insights, best practices, and success stories from Nigeria's leading proximity marketing platform
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b bg-background sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-secondary"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="font-medium">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

                    <div className="pt-4 border-t space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`} className="block">
                      <Button variant="ghost" className="w-full group-hover:bg-secondary/10">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay updated with proximity marketing insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest tips, case studies, and industry trends delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-border focus:border-secondary outline-none"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
