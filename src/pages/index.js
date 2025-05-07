
'use client';
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/navbar';
import Section1Hero1 from '@/components/Section1Hero';
import Section2ScrollText2 from '@/components/Section2ScrollText';
import Section3ColorDresses3 from '@/components/Section3ColorDresses';
import Section4FiveDresses4 from '@/components/Section4FiveDresses';
import Section5Dresses5 from '@/components/Section5Dresses';
import Section6Dress6 from '@/components/Section6Dress';
import Section7suit7 from '@/components/Section7suit';
import Section8simple8 from '@/components/Section8simple';
import Section9KidsClothing9 from '@/components/Section9KidsClothing';
import Section10static10 from '@/components/Section10static';
import Section11staticsuit11 from '@/components/Section11staticsuit';
import Section12DressStatic from '@/components/Section12DressStatic';
import Section13StaticClothing from '@/components/Section13StaticClothing';
import Section14ClothsStatic from '@/components/Section14ClothsStatic';
import Section15img from '@/components/Section15img';
import Footer from '@/components/Section16contact';
import WhatsApp from "@/components/whatsppicon";

const sections = [
  Section1Hero1, Section2ScrollText2, Section3ColorDresses3,
  Section4FiveDresses4, Section5Dresses5, Section6Dress6,
  Section7suit7, Section8simple8, Section9KidsClothing9,
  Section10static10, Section11staticsuit11, Section12DressStatic,
  Section13StaticClothing, Section14ClothsStatic, Section15img,
  Footer, WhatsApp
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollTimeout = useRef(null);

  const handleNext = () => {
    setCurrentSection(prev => (prev < sections.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSection(prev => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
        handleNext();
      } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
        handlePrev();
      }
    };

    const handleWheel = (e) => {
      e.preventDefault(); // Prevent default scroll behavior
    
      if (scrollTimeout.current) return;
    
      const delta = e.deltaY;
    
      if (delta > 30) {
        handleNext();
      } else if (delta < -30) {
        handlePrev();
      }
    
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 1000); // 1s cooldown
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false }); // important!

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);  

  const CurrentComponent = sections[currentSection];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Each section now has full height and content on top of navbar */}
      <div className="h-screen w-full">
        <CurrentComponent />
      </div>

      <button
        onClick={handleNext}
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-black px-4 py-2 rounded-full z-50"
      >
        <IoIosArrowDown />
      </button>

      {/* Fixed WhatsApp Icon */}
      <div className="fixed bottom-5 right-5 z-50">
        <WhatsApp />
      </div>
    </div>
  );
};

export default Index;
