import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      easing: (t: number) => t, // Linear easing for instant scroll
      smoothWheel: false,
      touchMultiplier: 1.5,
      infinite: false,
      wheelMultiplier: 1.2,
      gestureOrientation: 'vertical'
    });

    let animationFrameId: number;
    
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    
    animationFrameId = requestAnimationFrame(raf);
    
    // Handle mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      // On mobile, use native scroll for better performance
      lenis.destroy();
      return;
    }

    // Handle anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(targetId!);
        if (element) {
          lenis.scrollTo(element, { offset: -100 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};