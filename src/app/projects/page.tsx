'use client'
import React from 'react'
import ProjectCardList from './components/ProjectCardList';
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : ''}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="mt-32 dark:bg-black"
      >
        <ProjectCardList />
      </motion.div>
    </>
  )
}

export default Projects