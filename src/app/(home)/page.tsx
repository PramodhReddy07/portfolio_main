"use client"

import ProjectCardList from "../projects/components/ProjectCardList"
import Skills from "@/components/Skills"
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
      <div className="mt-8 max-sm:mt-0">
        <motion.div
          key={typeof window !== 'undefined' ? window.location.pathname : ''}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <HeroSection />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex justify-center"
          >
            <ProjectCardList />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex justify-center mt-8"
          >
            <Skills />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex justify-center mt-8"
          >
            <Education />
          </motion.div>
          <div
            className="w-full flex justify-center mt-8"
            id="photography"
          >
            <Photography />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex justify-center mt-8"
            id="contact-section"
          >
            <Contact />
          </motion.div>
        </motion.div>
      </div>
      <ConditionalFooter />
    </>
  );
}
