import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  action?: () => void;
}

interface CarouselProps {
  items: CarouselItem[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const Carousel = ({ items, autoSlide = true, slideInterval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-heritage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={items[currentIndex]?.image}
              alt={items[currentIndex]?.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-navy/80 via-heritage-navy/30 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-heritage-cream">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {items[currentIndex]?.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-heritage-cream/90 max-w-2xl"
              >
                {items[currentIndex]?.description}
              </motion.p>
              
              {items[currentIndex]?.action && (
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={items[currentIndex].action}
                  className="btn-hero mt-6"
                >
                  Explore Now
                </motion.button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-heritage-cream/20 hover:bg-heritage-cream/30 text-heritage-cream p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-heritage-cream/20 hover:bg-heritage-cream/30 text-heritage-cream p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-heritage-gold scale-125'
                : 'bg-heritage-gold/30 hover:bg-heritage-gold/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;