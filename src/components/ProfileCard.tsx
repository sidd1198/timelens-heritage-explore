import { motion } from 'framer-motion';
import { Trophy, Star, MapPin } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  avatar: string;
  level: number;
  points: number;
  badges: string[];
  location: string;
  progress: number;
}

const ProfileCard = ({ 
  name, 
  avatar, 
  level, 
  points, 
  badges, 
  location, 
  progress 
}: ProfileCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="heritage-card max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-heritage-gold/30 shadow-gold"
          />
          <div className="absolute -bottom-2 -right-2 bg-heritage-gold text-heritage-brown text-xs font-bold px-2 py-1 rounded-full">
            L{level}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        
        <div className="flex items-center justify-center text-muted-foreground text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>
        
        <div className="flex items-center justify-center text-heritage-gold">
          <Trophy size={16} className="mr-1" />
          <span className="font-semibold">{points.toLocaleString()} points</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>Progress to Level {level + 1}</span>
          <span>{progress}%</span>
        </div>
        
        <div className="w-full bg-heritage-sandstone/30 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-heritage-gold to-accent h-2 rounded-full"
          />
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-foreground flex items-center">
          <Star size={16} className="mr-2 text-heritage-gold" />
          Recent Achievements
        </h4>
        
        <div className="grid grid-cols-3 gap-2">
          {badges.slice(0, 6).map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="aspect-square bg-gradient-to-br from-heritage-gold/20 to-accent/20 rounded-lg flex items-center justify-center border border-heritage-gold/20"
            >
              <span className="text-xs text-center font-medium text-heritage-brown">
                {badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;