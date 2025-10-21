import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Contact Proxim! Nigeria
                </h1>
                <p className="text-xl text-muted-foreground">
                  Get started today – we respond within 24 hours
                </p>
              </div>

              {/* Office Info */}
              <div className="mb-12 p-6 bg-muted rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">Lagos Headquarters</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Block C, 3rd Floor, Admiralty Way</p>
                  <p>Lekki Phase I, Lagos, Nigeria</p>
                  <p className="mt-4"><strong>Phone:</strong> +234 816 000 0000</p>
                  <p><strong>Email:</strong> info@proxim.ng</p>
                  <p className="mt-4 text-sm">
                    <strong>Support Hours:</strong> Monday to Friday, 9:00 AM – 6:00 PM (West Africa Time)
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" placeholder="+234 701 234 5678" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" placeholder="Your Company" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">How can we help you?</Label>
                  <Input id="subject" placeholder="Demo request, partnership enquiry, support, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals and how we can help..."
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" required />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to receive communications from Proxim! and understand my data will be processed according to the Privacy Policy and NDPR compliance.
                  </label>
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
