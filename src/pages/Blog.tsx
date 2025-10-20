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
      title: "Geofencing Best Practices for Nigerian Businesses",
      excerpt: "Learn how to set up effective geofences that drive foot traffic and conversions in Lagos, Abuja, and beyond.",
      author: "Adebayo Johnson",
      date: "2025-10-15",
      readTime: "8 min read",
      category: "Best Practices",
      slug: "geofencing-best-practices-nigeria",
    },
    {
      id: 2,
      title: "NDPR Compliance for Proximity Marketers",
      excerpt: "Everything Nigerian marketers need to know about data privacy and NDPR compliance in location-based marketing.",
      author: "Ngozi Okafor",
      date: "2025-10-12",
      readTime: "6 min read",
      category: "Compliance",
      slug: "ndpr-compliance-guide",
    },
    {
      id: 3,
      title: "Case Study: Lagos Retail Store Increases Footfall by 45%",
      excerpt: "How a leading Lagos retailer used proximity marketing to drive massive foot traffic growth in just 3 months.",
      author: "Ibrahim Yusuf",
      date: "2025-10-08",
      readTime: "10 min read",
      category: "Case Study",
      slug: "lagos-retail-case-study",
    },
    {
      id: 4,
      title: "App Monetization via Proximity: A Complete Guide",
      excerpt: "Unlock new revenue streams for your app with proximity marketing. Learn integration, optimization, and revenue strategies.",
      author: "Chioma Eze",
      date: "2025-10-05",
      readTime: "12 min read",
      category: "App Partners",
      slug: "app-monetization-guide",
    },
    {
      id: 5,
      title: "F&B Proximity Offers That Actually Work",
      excerpt: "Discover the proximity marketing tactics that top Nigerian restaurants use to fill tables during off-peak hours.",
      author: "Yusuf Mohammed",
      date: "2025-10-01",
      readTime: "7 min read",
      category: "Industry",
      slug: "fnb-proximity-tactics",
    },
    {
      id: 6,
      title: "Event Marketing with Geofences: Complete Playbook",
      excerpt: "How event organizers in Nigeria are using proximity marketing to boost attendance and engagement.",
      author: "Amaka Okonkwo",
      date: "2025-09-28",
      readTime: "9 min read",
      category: "Industry",
      slug: "event-marketing-playbook",
    },
  ];

  const categories = ["All", "Best Practices", "Case Study", "Compliance", "App Partners", "Industry"];

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
