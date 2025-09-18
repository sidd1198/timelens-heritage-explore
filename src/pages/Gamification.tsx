import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ProfileCard from '@/components/ProfileCard';
import HeritageCard from '@/components/HeritageCard';
import { Trophy, Star, Target, Users, Award, Zap } from 'lucide-react';

const Gamification = () => {
  const gameFeatures = [
    {
      icon: <Target className="w-12 h-12 text-heritage-gold" />,
      title: "Heritage Quests",
      description: "Complete challenging missions to unlock historical secrets and earn valuable rewards."
    },
    {
      icon: <Award className="w-12 h-12 text-heritage-gold" />,
      title: "Achievement Badges",
      description: "Collect unique badges for exploring different heritage sites and completing learning objectives."
    },
    {
      icon: <Users className="w-12 h-12 text-heritage-gold" />,
      title: "Community Challenges",
      description: "Team up with other heritage enthusiasts for special events and collaborative discoveries."
    },
    {
      icon: <Zap className="w-12 h-12 text-heritage-gold" />,
      title: "Knowledge Streaks",
      description: "Build learning streaks by consistently engaging with heritage content and activities."
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Priya Sharma", points: 15750, avatar: "https://images.unsplash.com/photo-1494790108755-2616b60c51e8?w=100" },
    { rank: 2, name: "Arjun Patel", points: 14200, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" },
    { rank: 3, name: "Sneha Rao", points: 13850, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
    { rank: 4, name: "Vikram Singh", points: 12900, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" },
    { rank: 5, name: "Ananya Kumar", points: 11750, avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100" }
  ];

  const quests = [
    {
      title: "Mughal Architecture Master",
      description: "Visit 5 Mughal monuments and complete AR experiences to unlock the secrets of Indo-Islamic architecture.",
      progress: 60,
      reward: "Golden Dome Badge",
      difficulty: "Intermediate"
    },
    {
      title: "Temple Explorer",
      description: "Discover the spiritual and architectural significance of 8 ancient temples across India.",
      progress: 25,
      reward: "Sacred Geometry Badge",
      difficulty: "Advanced"
    },
    {
      title: "Colonial Heritage Hunter",
      description: "Explore British colonial architecture and learn about India's colonial period through 6 heritage sites.",
      progress: 80,
      reward: "Victorian Era Badge",
      difficulty: "Beginner"
    }
  ];

  const sampleProfile = {
    name: "Heritage Explorer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    level: 12,
    points: 8450,
    badges: ["First Steps", "Temple Seeker", "Mughal Expert", "AR Pioneer", "Story Teller", "Community Hero"],
    location: "Mumbai, India",
    progress: 75
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Gamification"
        subtitle="Turn heritage exploration into an exciting adventure. Complete quests, earn badges, climb leaderboards, and compete with fellow heritage enthusiasts."
        height="70vh"
      />

      {/* Game Features */}
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
              Game <span className="text-heritage-gold">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience heritage learning like never before through engaging gameplay mechanics 
              that make discovering India's cultural treasures fun and rewarding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameFeatures.map((feature, index) => (
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

      {/* Profile & Leaderboard */}
      <section className="py-20 px-4 bg-gradient-heritage">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* User Profile Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Your <span className="text-heritage-gold">Profile</span>
              </h2>
              <ProfileCard {...sampleProfile} />
            </motion.div>

            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                <Trophy className="inline-block w-8 h-8 text-heritage-gold mr-2" />
                Leaderboard
              </h2>
              
              <div className="heritage-card">
                <div className="space-y-4">
                  {leaderboard.map((player, index) => (
                    <motion.div
                      key={player.rank}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                        player.rank === 1 
                          ? 'bg-heritage-gold/10 border-heritage-gold/30' 
                          : 'bg-background/50 border-border'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          player.rank === 1 ? 'bg-heritage-gold text-heritage-brown' :
                          player.rank === 2 ? 'bg-heritage-sandstone text-heritage-brown' :
                          player.rank === 3 ? 'bg-heritage-brown text-heritage-cream' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {player.rank}
                        </div>
                        
                        <img
                          src={player.avatar}
                          alt={player.name}
                          className="w-10 h-10 rounded-full border-2 border-heritage-gold/20"
                        />
                        
                        <span className="font-semibold text-foreground">
                          {player.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-heritage-gold font-bold">
                        <Star size={16} className="mr-1" />
                        {player.points.toLocaleString()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active Quests */}
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
              Active <span className="text-heritage-gold">Quests</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Challenge yourself with these exciting heritage quests. Complete objectives, 
              learn fascinating history, and earn exclusive rewards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {quests.map((quest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HeritageCard
                  title={quest.title}
                  description={quest.description}
                  onClick={() => console.log(`Starting quest: ${quest.title}`)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        quest.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        quest.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {quest.difficulty}
                      </span>
                      <span className="text-muted-foreground">{quest.progress}% Complete</span>
                    </div>
                    
                    <div className="w-full bg-heritage-sandstone/30 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${quest.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-heritage-gold to-accent h-2 rounded-full"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-heritage-gold text-sm">
                        <Award size={16} className="mr-1" />
                        {quest.reward}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-heritage-gold text-heritage-brown px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors duration-300 text-sm"
                      >
                        Continue
                      </motion.button>
                    </div>
                  </div>
                </HeritageCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gamification;