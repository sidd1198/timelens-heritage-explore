import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Carousel from '@/components/Carousel';
import HeritageCard from '@/components/HeritageCard';
import { Languages, Clock, Users, Award } from 'lucide-react';

const Tours = () => {
  const featuredTours = [
    {
      id: "golden-triangle",
      title: "Golden Triangle Heritage Tour",
      description: "Experience the most iconic monuments of India - Taj Mahal, Red Fort, and Hawa Mahal in an immersive 3-day virtual journey through the Golden Triangle.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
      action: () => console.log("Starting Golden Triangle Tour")
    },
    {
      id: "mughal-empire",
      title: "Mughal Empire Legacy",
      description: "Discover the grandeur of Mughal architecture and the stories of emperors who shaped Indian history through magnificent monuments and gardens.",
      image: "https://images.unsplash.com/photo-1597662022419-b3d0d31ee309?w=800",
      action: () => console.log("Starting Mughal Empire Tour")
    },
    {
      id: "temple-architecture",
      title: "Temple Architecture Masterclass",
      description: "Explore the intricate art and spiritual significance of India's ancient temples, from Dravidian to Nagara architectural styles.",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800",
      action: () => console.log("Starting Temple Architecture Tour")
    }
  ];

  const tourCategories = [
    {
      title: "Royal Palaces",
      description: "Explore magnificent palaces that housed India's royalty, featuring opulent architecture and royal treasures.",
      languages: ["English", "Hindi", "French"],
      duration: "2-4 hours",
      participants: "1.2K+ joined"
    },
    {
      title: "Ancient Temples",
      description: "Journey through sacred spaces that have witnessed centuries of devotion and architectural evolution.",
      languages: ["English", "Hindi", "Tamil", "Sanskrit"],
      duration: "1-3 hours",
      participants: "850+ joined"
    },
    {
      title: "Colonial Heritage",
      description: "Discover the architectural legacy of British colonial rule and its impact on Indian urban landscapes.",
      languages: ["English", "Hindi", "Bengali"],
      duration: "1.5-2.5 hours",
      participants: "650+ joined"
    },
    {
      title: "Forts & Fortifications",
      description: "Explore mighty fortresses that protected kingdoms and witnessed epic battles throughout history.",
      languages: ["English", "Hindi", "Rajasthani", "Marathi"],
      duration: "2-5 hours",
      participants: "950+ joined"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Guided Heritage Tours"
        subtitle="Embark on expertly curated virtual tours with multilingual guides. Discover hidden stories, architectural marvels, and cultural treasures from the comfort of your home."
        height="70vh"
      />

      {/* Featured Tours Carousel */}
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
              Featured <span className="text-heritage-gold">Tours</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked tours that showcase the best of India's cultural heritage with expert commentary and immersive storytelling.
            </p>
          </motion.div>

          <Carousel items={featuredTours} />
        </div>
      </section>

      {/* Tour Categories */}
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
              Tour <span className="text-heritage-gold">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our diverse range of specialized tours, each designed to provide deep insights into specific aspects of Indian heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tourCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HeritageCard
                  title={category.title}
                  description={category.description}
                  onClick={() => console.log(`Starting ${category.title} tour`)}
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock size={14} className="mr-2" />
                        {category.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users size={14} className="mr-2" />
                        {category.participants}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Languages size={14} className="mr-2" />
                      Available in: {category.languages.join(', ')}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-heritage-gold text-heritage-brown py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
                    >
                      Start Tour
                    </motion.button>
                  </div>
                </HeritageCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Guide Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Your <span className="text-heritage-gold">Virtual Guide</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our AI-powered virtual guides are trained by heritage experts and historians. 
                They provide personalized tours, answer questions in real-time, and adapt the 
                experience based on your interests and pace.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-foreground">
                  <Award className="w-6 h-6 text-heritage-gold mr-3" />
                  <span>Expert knowledge from certified historians</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Languages className="w-6 h-6 text-heritage-gold mr-3" />
                  <span>Available in 8+ Indian and international languages</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Users className="w-6 h-6 text-heritage-gold mr-3" />
                  <span>Personalized experiences for all age groups</span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hero"
              >
                Try Demo Tour
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-card rounded-xl p-8 shadow-heritage border border-heritage-gold/20">
                <div className="text-center">
                  <div className="w-32 h-32 bg-heritage-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-heritage-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Virtual Guide Preview</h3>
                  <p className="text-muted-foreground italic">
                    "Welcome to the Taj Mahal! Built between 1632 and 1653, this monument represents the pinnacle of Mughal architecture..."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;