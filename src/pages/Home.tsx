import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import HeritageCard from '@/components/HeritageCard';
import { Smartphone, Users, Globe, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-heritage-gold" />,
      title: "AR Experiences",
      description: "Immerse yourself in history through cutting-edge augmented reality technology that brings monuments to life."
    },
    {
      icon: <Users className="w-12 h-12 text-heritage-gold" />,
      title: "Guided Tours",
      description: "Expert-led virtual tours with multilingual support, revealing hidden stories and historical insights."
    },
    {
      icon: <Globe className="w-12 h-12 text-heritage-gold" />,
      title: "Global Heritage",
      description: "Explore India's rich cultural heritage from ancient temples to colonial architecture, all in one platform."
    },
    {
      icon: <Zap className="w-12 h-12 text-heritage-gold" />,
      title: "Gamification",
      description: "Earn badges, complete quests, and compete with fellow heritage enthusiasts in an engaging journey."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Experience History in Augmented Reality"
        subtitle="Discover India's magnificent cultural heritage through immersive AR experiences, guided tours, and interactive storytelling."
      >
        <Link to="/explore" className="btn-hero">
          Explore Heritage
        </Link>
        <Link to="/tours" className="btn-secondary">
          Start a Tour
        </Link>
      </HeroSection>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-header">
              Revolutionizing Heritage <span className="text-heritage-gold">Preservation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TimeLens combines cutting-edge AR technology with rich cultural storytelling to create 
              unforgettable heritage experiences that educate, inspire, and preserve our history.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-gradient-to-br from-heritage-gold/20 to-accent/20 rounded-xl border border-heritage-gold/20 group-hover:shadow-gold transition-all duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-heritage-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-heritage">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready to <span className="text-heritage-gold">Explore</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of heritage enthusiasts discovering India's cultural treasures through TimeLens.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ar-experiences" className="btn-hero">
                Try AR Demo
              </Link>
              <Link to="/community" className="btn-secondary">
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;