import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import HeritageCard from '@/components/HeritageCard';
import { Heart, MessageCircle, Share2, Plus, Camera, BookOpen } from 'lucide-react';

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "12.5K+" },
    { label: "Stories Shared", value: "3.2K+" },
    { label: "Heritage Sites", value: "850+" },
    { label: "Languages", value: "15+" }
  ];

  const featuredStories = [
    {
      id: 1,
      title: "The Hidden Chamber of Golconda Fort",
      author: "Rajesh Gupta",
      location: "Hyderabad, Telangana",
      excerpt: "During my visit to Golconda Fort, I discovered a small chamber that most tourists miss. Local guides told me it was used by spies during the Qutb Shahi period...",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400",
      likes: 127,
      comments: 23,
      category: "Hidden Gems"
    },
    {
      id: 2,
      title: "My Grandmother's Stories of Old Delhi",
      author: "Priya Sharma",
      location: "New Delhi",
      excerpt: "My grandmother grew up in the lanes of Chandni Chowk when it was still the heart of Mughal Delhi. She would tell me stories of the haveli where she lived...",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      likes: 89,
      comments: 31,
      category: "Family Stories"
    },
    {
      id: 3,
      title: "The Sunset Ritual at Meenakshi Temple",
      author: "Arun Kumar",
      location: "Madurai, Tamil Nadu",
      excerpt: "Every evening at Meenakshi Temple, there's a beautiful ritual where they carry the deity to the wedding hall. The entire temple comes alive with chants and music...",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400",
      likes: 156,
      comments: 18,
      category: "Cultural Traditions"
    }
  ];

  const contributionTypes = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Share Photos",
      description: "Upload your heritage site photographs and help document India's architectural treasures."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Tell Stories",
      description: "Share local legends, family stories, or historical anecdotes connected to heritage sites."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Local Insights",
      description: "Provide insider tips, hidden details, or cultural context that only locals would know."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Community Stories"
        subtitle="Connect with fellow heritage enthusiasts. Share your discoveries, local legends, and cultural insights to help preserve India's rich storytelling traditions."
        height="70vh"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-hero flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Contribute Your Story
        </motion.button>
      </HeroSection>

      {/* Community Stats */}
      <section className="py-16 px-4 bg-gradient-heritage">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-heritage-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
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
              Featured <span className="text-heritage-gold">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover fascinating stories shared by our community members - from hidden architectural 
              details to family legends passed down through generations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="heritage-card">
                  {/* Story Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-heritage-gold/90 text-heritage-brown text-xs font-semibold rounded-full">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground hover:text-heritage-gold transition-colors duration-300 cursor-pointer">
                      {story.title}
                    </h3>
                    
                    <div className="text-sm text-muted-foreground">
                      by <span className="font-semibold text-heritage-gold">{story.author}</span> • {story.location}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>
                    
                    {/* Engagement Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-muted-foreground hover:text-heritage-gold transition-colors">
                          <Heart size={16} className="mr-1" />
                          {story.likes}
                        </button>
                        <button className="flex items-center text-muted-foreground hover:text-heritage-gold transition-colors">
                          <MessageCircle size={16} className="mr-1" />
                          {story.comments}
                        </button>
                      </div>
                      <button className="flex items-center text-muted-foreground hover:text-heritage-gold transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Types */}
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
              How to <span className="text-heritage-gold">Contribute</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every heritage site has countless untold stories. Help us preserve these narratives 
              for future generations by sharing your knowledge and experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contributionTypes.map((type, index) => (
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
                    className="p-4 bg-gradient-to-br from-heritage-gold/20 to-accent/20 rounded-xl border border-heritage-gold/20 group-hover:shadow-gold transition-all duration-300 text-heritage-gold"
                  >
                    {type.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-heritage-gold transition-colors duration-300">
                  {type.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {type.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="text-heritage-gold">Heritage Community</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a passionate community dedicated to preserving and sharing India's cultural heritage. 
              Your stories and insights matter in keeping our history alive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hero flex items-center justify-center"
              >
                <Plus size={20} className="mr-2" />
                Share Your Story
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Browse All Stories
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;