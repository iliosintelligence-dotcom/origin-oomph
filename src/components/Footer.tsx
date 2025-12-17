import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import iliosLogo from "@/assets/ilios-logo.png";
const Footer = () => {
  const socialLinks = [{
    icon: Facebook,
    label: "Facebook"
  }, {
    icon: Twitter,
    label: "Twitter"
  }, {
    icon: Linkedin,
    label: "LinkedIn"
  }, {
    icon: Instagram,
    label: "Instagram"
  }];
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="mb-4">
              <img src={logo} alt="Proxim!" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-secondary-foreground/80 text-sm mb-4">
              Privacy-first proximity marketing that drives local revenue for Nigerian businesses.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => <motion.a key={social.label} href="#" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="w-9 h-9 rounded-lg bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </motion.a>)}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[{
              to: "/",
              label: "Home"
            }, {
              to: "/app-partners",
              label: "App Partners"
            }, {
              to: "/business-clients",
              label: "Business Clients"
            }, {
              to: "/pricing",
              label: "Pricing"
            }, {
              to: "/blog",
              label: "Blog"
            }, {
              to: "/about",
              label: "About Us"
            }].map(link => <li key={link.to}>
                  <Link to={link.to} className="text-secondary-foreground/80 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>24b, Bashorun Okusanya Street, Off Admiralty Way, Lekki Phase 1, Lagos</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>07067750583</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@iliosdigital.co
              </span>
              </li>
              <li className="text-xs">
                Support: Mon–Fri 09:00–18:00 WAT
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Get the latest proximity marketing insights and updates.
            </p>
            <form className="space-y-2" onSubmit={e => e.preventDefault()}>
              <Input type="email" placeholder="Your email" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 transition-all duration-200 focus:scale-[1.02]" />
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button variant="primary" className="w-full" size="lg">
                  Subscribe
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="pt-8 border-t border-secondary-foreground/20 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Proxim! All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "NDPR Compliance"].map((text, idx) => <Link key={text} to={`/${text.toLowerCase().replace(/ /g, "-")}`} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                  {text}
                </Link>)}
            </div>
          </div>
          
          {/* ILIOS Technologies Attribution */}
          <div className="flex justify-end items-center gap-2 text-sm text-secondary-foreground/60 pt-4 border-t border-secondary-foreground/10">
            <span>Proxim is by</span>
            <img src={iliosLogo} alt="ILIOS Digital" className="h-6 w-auto brightness-0 invert" />
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;