import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: Calendar,
      label: "Book a Demo",
      href: "/contact",
      isLink: true,
    },
    {
      icon: Mail,
      label: "Email Us",
      href: "mailto:hello@proxim.ng",
      isLink: false,
    },
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:+2341234567890",
      isLink: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Contact options menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2"
              >
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {option.isLink ? (
                      <Link
                        to={option.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 bg-card border border-border rounded-full pl-4 pr-5 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 group"
                      >
                        <option.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground whitespace-nowrap">
                          {option.label}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={option.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 bg-card border border-border rounded-full pl-4 pr-5 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 group"
                      >
                        <option.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground whitespace-nowrap">
                          {option.label}
                        </span>
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
