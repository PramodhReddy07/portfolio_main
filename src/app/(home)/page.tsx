"use client"

import ProjectCardList from "../projects/components/ProjectCardList"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import { motion } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import Photography from '@/components/Photography'
import { useState, useRef, useEffect } from 'react';
import PramodhTitle from '@/components/PramodhTitle';
import Navbar from '@/components/Navbar';
import ConditionalFooter from "../ConditionalFooter";

let hasShownIntro = false;

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      if (!hasShownIntro) {
        setShowIntro(true);
        hasShownIntro = true;
      }
      hasMounted.current = true;
    }
  }, []);

  const handleFinish = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <PramodhTitle onFinish={handleFinish} />;
  }

  return (
    <>
      <Navbar />
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : ''}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0"
      >
        <HeroSection />
        <div className="w-full flex justify-center mt-24">
          <Experience />
        </div>
        <div className="w-full flex justify-center">
          <ProjectCardList />
        </div>
        <div className="w-full flex justify-center mt-8">
          <Skills />
        </div>
        <div className="w-full flex justify-center mt-8">
          <Education />
        </div>
        <div className="w-full flex justify-center mt-8" id="photography">
          <Photography />
        </div>
        <div className="w-full flex justify-center mt-8" id="contact-section">
          <Contact />
        </div>
      </motion.div>
      <ConditionalFooter />
    </>
  );
}
