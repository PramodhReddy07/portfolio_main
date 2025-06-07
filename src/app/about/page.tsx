'use client'
import React from 'react'
import About from './components/About'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : ''}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="mt-32 dark:bg-black"
      >
        <About />
      </motion.div>
    </>
  )
}

export default page