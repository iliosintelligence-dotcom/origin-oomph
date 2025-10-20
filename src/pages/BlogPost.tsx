import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically fetch blog post data based on slug
  const post = {
    title: "Geofencing Best Practices for Nigerian Businesses",
    author: "Adebayo Johnson",
    date: "2025-10-15",
    readTime: "8 min read",
    category: "Best Practices",
    content: `
      <p>Proximity marketing is revolutionizing how Nigerian businesses connect with customers. In this comprehensive guide, we'll explore the best practices for implementing geofencing strategies that drive real results.</p>
      
      <h2>Understanding Geofencing in the Nigerian Context</h2>
      <p>Geofencing creates virtual boundaries around physical locations, triggering notifications when customers enter or exit these zones. For Nigerian businesses in Lagos, Abuja, and other major cities, this technology offers unprecedented targeting capabilities.</p>
      
      <h2>Best Practice #1: Strategic Zone Placement</h2>
      <p>The key to effective geofencing is strategic zone placement. Consider high-traffic areas, competitor locations, and transportation hubs where your target customers naturally congregate.</p>
      
      <h2>Best Practice #2: Timing is Everything</h2>
      <p>Send notifications when customers are most likely to convert. Avoid early morning or late night notifications unless your business operates during those hours.</p>
      
      <h2>Best Practice #3: NDPR Compliance</h2>
      <p>Always ensure you're compliant with Nigeria's Data Protection Regulation (NDPR). Obtain explicit consent before sending location-based notifications.</p>
      
      <h2>Conclusion</h2>
      <p>By following these best practices, Nigerian businesses can leverage proximity marketing to drive foot traffic, increase conversions, and build lasting customer relationships.</p>
    `,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 font-medium">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <button className="flex items-center hover:text-secondary transition-colors ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Ready to implement these strategies?
              </h3>
              <p className="text-secondary-foreground/90 mb-6">
                See how Proxim! can help your business leverage proximity marketing
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
