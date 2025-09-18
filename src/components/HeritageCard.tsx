import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeritageCardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const HeritageCard = ({ 
  title, 
  description, 
  image, 
  children, 
  onClick,
  className = "" 
}: HeritageCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`heritage-card cursor-pointer group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {image && (
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-heritage-gold transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {children && (
          <div className="pt-2">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HeritageCard;