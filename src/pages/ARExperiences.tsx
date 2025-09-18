import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import HeritageCard from '@/components/HeritageCard';
import { Smartphone, Camera, Eye, Zap, Download, Share } from 'lucide-react';

const ARExperiences = () => {
  const arFeatures = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Scan & Discover",
      description: "Point your device at any monument to unlock layers of historical information and visual enhancements."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Time Travel View",
      description: "See how monuments looked in their original glory with our historical reconstruction technology."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Interactive Stories",
      description: "Touch AR elements to reveal hidden stories, architectural details, and historical events."
    }
  ];

  const arExperiences = [
    {
      title: "Taj Mahal Time Machine",
      description: "Watch the Taj Mahal being built stone by stone in a captivating time-lapse AR experience.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500",
      features: ["Time-lapse construction", "Emperor Shah Jahan's story", "Architectural details"]
    },
    {
      title: "Red Fort Battle Simulation",
      description: "Experience epic battles and royal ceremonies that took place within the Red Fort's walls.",
      image: "https://images.unsplash.com/photo-1597662022419-b3d0d31ee309?w=500",
      features: ["Battle recreations", "Royal court scenes", "Historical figures"]
    },
    {
      title: "Temple Sacred Geometry",
      description: "Discover the mathematical precision and spiritual symbolism in ancient temple architecture.",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=500",
      features: ["Sacred geometry", "Architectural analysis", "Spiritual significance"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="AR Experiences"
        subtitle="Scan. Discover. Experience. Transform any heritage site into an interactive gateway to the past through cutting-edge augmented reality technology."
        height="70vh"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-hero"
        >
          Try Demo
        </motion.button>
      </HeroSection>

      {/* How it Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-header">
              How AR <span className="text-heritage-gold">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our augmented reality technology overlays digital information and historical reconstructions 
              onto real-world heritage sites through your smartphone or tablet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {arFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-heritage-gold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Phone Mockup Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-sm mx-auto bg-heritage-navy rounded-3xl p-4 shadow-heritage">
              <div className="bg-background rounded-2xl p-4 aspect-[9/16] flex flex-col items-center justify-center border-4 border-heritage-gold/20">
                <Smartphone className="w-24 h-24 text-heritage-gold mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">AR View Active</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Point your camera at a monument to see historical overlays and interactive elements.
                </p>
                <div className="mt-4 flex space-x-2">
                  <div className="w-8 h-8 bg-heritage-gold/30 rounded-full animate-pulse"></div>
                  <div className="w-8 h-8 bg-heritage-gold/30 rounded-full animate-pulse delay-75"></div>
                  <div className="w-8 h-8 bg-heritage-gold/30 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AR Experiences */}
      <section className="py-20 px-4 bg-gradient-heritage">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-header">
              Featured <span className="text-heritage-gold">AR Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in these specially crafted AR experiences that bring India's heritage to life 
              with stunning visual effects and historical accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {arExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HeritageCard
                  title={experience.title}
                  description={experience.description}
                  image={experience.image}
                  onClick={() => console.log(`Starting ${experience.title}`)}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Experience Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {experience.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-heritage-gold rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-heritage-gold text-heritage-brown py-2 px-4 rounded-lg font-semibold hover:bg-accent transition-colors duration-300 text-sm"
                      >
                        Launch AR
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 border border-heritage-gold text-heritage-gold rounded-lg hover:bg-heritage-gold hover:text-heritage-brown transition-colors duration-300"
                      >
                        <Share size={16} />
                      </motion.button>
                    </div>
                  </div>
                </HeritageCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Download className="w-16 h-16 text-heritage-gold mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Download the <span className="text-heritage-gold">TimeLens App</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Get the full AR experience on your mobile device. Available for both iOS and Android platforms 
              with offline capabilities for uninterrupted exploration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hero flex items-center"
              >
                <Download size={20} className="mr-2" />
                Download for iOS
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center"
              >
                <Download size={20} className="mr-2" />
                Download for Android
              </motion.button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Free download • No subscription required • Offline AR experiences available
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ARExperiences;