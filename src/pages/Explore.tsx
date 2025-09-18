import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import HeritageCard from '@/components/HeritageCard';
import { MapPin, Clock, Star } from 'lucide-react';

const Explore = () => {
  const monuments = [
    {
      id: 1,
      title: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      description: "The epitome of Mughal architecture and a symbol of eternal love, this UNESCO World Heritage site showcases intricate marble work and Persian influences.",
      rating: 4.9,
      duration: "2-3 hours",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500"
    },
    {
      id: 2,
      title: "Red Fort",
      location: "Delhi",
      description: "A magnificent Mughal fortress that served as the main residence of the Mughal emperors, featuring stunning architecture and rich historical significance.",
      rating: 4.7,
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1597662022419-b3d0d31ee309?w=500"
    },
    {
      id: 3,
      title: "Hawa Mahal",
      location: "Jaipur, Rajasthan",
      description: "The Palace of Winds, known for its unique five-story facade with 953 small windows, allowing royal ladies to observe street festivals while unseen.",
      rating: 4.6,
      duration: "1 hour",
      image: "https://images.unsplash.com/photo-1592834304839-cd8e4fe0e6b7?w=500"
    },
    {
      id: 4,
      title: "Mysore Palace",
      location: "Mysore, Karnataka",
      description: "A stunning example of Indo-Saracenic architecture, this palace dazzles visitors with its grandeur, intricate decorations, and illuminated beauty.",
      rating: 4.8,
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1639001998679-c4e4b2f5b83c?w=500"
    },
    {
      id: 5,
      title: "Khajuraho Temples",
      location: "Madhya Pradesh",
      description: "Ancient temples renowned for their stunning sculpture work and architectural brilliance, representing the pinnacle of medieval Indian art.",
      rating: 4.5,
      duration: "3-4 hours",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=500"
    },
    {
      id: 6,
      title: "Victoria Memorial",
      location: "Kolkata, West Bengal",
      description: "A magnificent marble building dedicated to Queen Victoria, showcasing British colonial architecture and housing a museum of Indian history.",
      rating: 4.4,
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1576306876722-4e5fd0a5b988?w=500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Explore Heritage"
        subtitle="Discover India's magnificent monuments and historical sites through immersive AR experiences. Each location tells a unique story waiting to be unveiled."
        height="70vh"
      />

      {/* Monuments Grid */}
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
              Heritage <span className="text-heritage-gold">Sites</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Embark on virtual journeys to India's most celebrated monuments. Each site offers unique AR experiences that bring history to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monuments.map((monument, index) => (
              <motion.div
                key={monument.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HeritageCard
                  title={monument.title}
                  description={monument.description}
                  image={monument.image}
                  onClick={() => console.log(`Exploring ${monument.title}`)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {monument.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {monument.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-heritage-gold">
                        <Star size={16} className="mr-1 fill-current" />
                        <span className="font-semibold">{monument.rating}</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-heritage-gold text-heritage-brown px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
                      >
                        View in AR
                      </motion.button>
                    </div>
                  </div>
                </HeritageCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 px-4 bg-gradient-heritage">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Discover More <span className="text-heritage-gold">Heritage Sites</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              India has over 40 UNESCO World Heritage Sites and thousands of protected monuments. 
              Use our interactive map to plan your heritage journey.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero"
            >
              Explore Interactive Map
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Explore;