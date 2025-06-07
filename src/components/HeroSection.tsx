'use client';

import Avatar from "@/app/(home)/components/Avatar";
import { RainbowButton } from "./ui/rainbow-button";
import { Link as ScrollLink } from "react-scroll";
import { bricolage_grotesque, inter } from "@/utils/fonts";
import { Typewriter } from "react-simple-typewriter";
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden dark:bg-black bg-white dark:text-white text-black transition-all duration-300">

      {/* Glow Background Circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 opacity-20 rounded-full blur-2xl animate-ping -z-10" />

      <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-5">

        {/* Avatar */}
        <div className="relative group">
          <div className="absolute -inset-3 rounded-full border-4 border-purple-500 opacity-20 animate-ping -z-10" />
          <div className="transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1">
            <Avatar />
          </div>
        </div>

        {/* Headline */}
        <h1 className={`mt-6 text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold tracking-tight leading-tight ${bricolage_grotesque}`}>
          <span className="block sm:inline">Hello, I'm </span>
          <span className="block sm:inline text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Pramodh Reddy</span> <span className="block sm:inline">👋</span>
        </h1>

        {/* Typewriter */}
        <div className={`w-full max-w-xs sm:max-w-md truncate text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium ${inter}`}>
          <Typewriter
            words={['Software Engineer', 'Tech Optimist', 'Full Stack Developer', 'AI Engineer', 'Backend Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">🤖 AI Explorer</span>
          <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">🎮 FIFA Dev (off hours)</span>
          <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">⚙️ Sports Fanatic</span>
        </div>

        {/* Description */}
        <p className={`max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-2 sm:px-4 ${inter}`}>
          I write code that works (most of the time), build AI that doesn't try to take over the world, and deploy backend systems that don't crash—unless it's Friday. From cloud APIs to quirky automation scripts, I love solving real-world problems with practical, scalable tech. I believe good software should feel invisible—reliable, fast, and quietly doing its job—like a well-trained ninja. Whether I'm wrangling microservices or convincing an AI model to behave, I build with intention, a touch of obsession, and usually, way too many tabs open.
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <RainbowButton>
            <ScrollLink
              to="contact-section"
              activeClass="active"
              smooth={true}
              offset={-120}
              duration={1000}
            >
              💬 Let's Connect
            </ScrollLink>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
}