import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import abuDhabiImage from '@/assets/abu-dhabi-seascape-with-skyscrapers.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Sample background images (replace with your actual images)
const backgroundImages = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  abuDhabiImage,
  'https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const swiperRef = useRef<any>(null);
  const bgSwiperRef = useRef<any>(null);

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Business Owner",
      content: "Celestia Capital transformed my investment portfolio. Their aviation investment program delivered exactly what they promised - 28% returns with complete transparency.",
      rating: 5,
      bgImage: backgroundImages[0]
    },
    {
      name: "Sarah Johnson",
      role: "Expat Professional",
      content: "As an expat in Dubai, I was looking for secure investment options. Their real estate portfolio gave me peace of mind and excellent returns over 5 years.",
      rating: 5,
      bgImage: backgroundImages[1]
    },
    {
      name: "Mohammad Hassan",
      role: "Entrepreneur",
      content: "The commodity trading program exceeded my expectations. The team's expertise in market analysis helped me achieve 34% returns in just one year.",
      rating: 5,
      bgImage: backgroundImages[2]
    }
  ];

  // Handle slide change
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
    if (bgSwiperRef.current) {
      bgSwiperRef.current.slideTo(swiper.realIndex);
    }
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden min-h-screen flex items-center px-4 sm:px-6">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            bgSwiperRef.current = swiper;
          }}
          className="h-full w-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
            What Our <span className="bg-gradient-luxury bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied investors who have 
            achieved exceptional returns with Celestia Capital.
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                    animate={{
                      clipPath: isAnimating ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
                      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="glass-card p-6 sm:p-8 relative overflow-hidden mx-2 sm:mx-0"
                  >
                    <div className="absolute top-4 right-4 text-4xl text-primary opacity-20">"</div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: isAnimating ? 0 : 1, 
                            scale: isAnimating ? 0 : 1,
                            transition: { 
                              delay: isAnimating ? 0 : 0.5 + (i * 0.1),
                              duration: 0.5 
                            }
                          }}
                          className="text-primary text-2xl mx-1"
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>

                    <motion.p 
                      className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 italic text-center"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isAnimating ? 0 : 1,
                        transition: { delay: isAnimating ? 0 : 0.8 }
                      }}
                    >
                      "{testimonial.content}"
                    </motion.p>

                    <motion.div 
                      className="border-t border-white/20 pt-4 sm:pt-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isAnimating ? 0 : 1,
                        y: isAnimating ? 20 : 0,
                        transition: { delay: isAnimating ? 0 : 1 }
                      }}
                    >
                      <h4 className="font-semibold text-xl text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-3 sm:space-x-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Progress Bar */}
          <motion.div 
            className="h-1 bg-white/20 mt-8 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-amber-600"
              initial={{ width: '0%' }}
              animate={{ 
                width: isAnimating ? '0%' : '100%',
                transition: { 
                  duration: 5,
                  ease: 'linear'
                }
              }}
              onAnimationComplete={() => {
                if (!isAnimating) {
                  swiperRef.current?.slideNext();
                }
              }}
            />
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-card p-8 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-gray-200">Client Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-200">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-200">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5 Yrs</div>
              <div className="text-sm text-gray-200">Average Partnership</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;