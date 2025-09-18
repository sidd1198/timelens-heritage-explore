import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'About Us', path: '/about' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-hero text-heritage-cream mt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-heritage-gold">TimeLens</h3>
            <p className="text-heritage-cream/80 leading-relaxed">
              Experience the rich cultural heritage of India through immersive AR technology. 
              Discover, explore, and preserve our history for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-heritage-gold">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-heritage-cream/80 hover:text-heritage-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-heritage-gold">Connect With Us</h4>
            <div className="space-y-2 text-heritage-cream/80">
              <p>Email: contact@timelens.in</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-heritage-cream/20 mt-8 pt-8 text-center">
          <p className="text-heritage-cream/60">
            © {currentYear} TimeLens. All rights reserved. | Preserving Heritage Through Technology
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;