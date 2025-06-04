"use client"

import { Badge, Tooltip } from '@radix-ui/themes'
import React from 'react'
import { bricolage_grotesque } from '@/utils/fonts'
import Title from './ui/Title'
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaAngular, FaJenkins, FaTerminal } from 'react-icons/fa';
import { SiSpringboot, SiCplusplus, SiCsharp, SiDjango, SiMongodb, SiPostgresql, SiGraphql, SiPostman, SiApachekafka, SiNginx, SiKubernetes, SiTerraform, SiExpress, SiNumpy, SiScipy } from 'react-icons/si';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'C#', icon: <SiCsharp color="#239120" /> },
  { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
  { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
  { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Django', icon: <SiDjango color="#092E20" /> },
  { name: 'NumPy', icon: <SiNumpy color="#013243" /> },
  { name: 'SciPy', icon: <SiScipy color="#8CAAE6" /> },
  { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'REST', icon: <SiPostman color="#FF6C37" /> },
  { name: 'GraphQL', icon: <SiGraphql color="#E10098" /> },
  { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
  { name: 'GIT', icon: <FaGitAlt color="#F05032" /> },
  { name: 'Apache', icon: <SiApachekafka color="#231F20" /> },
  { name: 'Nginx', icon: <SiNginx color="#009639" /> },
  { name: 'Bash', icon: <FaTerminal color="#4EAA25" /> },
  { name: 'AWS', icon: <FaAws color="#FF9900" /> },
  { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
  { name: 'Terraform', icon: <SiTerraform color="#623CE4" /> },
  { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
  { name: 'Jenkins', icon: <FaJenkins color="#D24939" /> },
];

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;
    let animationId: number;
    let start: number | null = null;
    let scrollLeft = 0;
    const speed = 0.1; // px per frame
    const animate = (timestamp: number) => {
      if (isPaused) return;
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = scrollLeft + elapsed * speed;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
          scrollLeft = 0;
          start = timestamp;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate skills for infinite effect
  const skillList = [...skills, ...skills];

  return (
    <div className='w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8'>
      <Title title='Skills' />
      <div
        ref={carouselRef}
        className="relative w-full overflow-x-hidden whitespace-nowrap rounded-lg py-4 bg-transparent"
        style={{ cursor: isPaused ? 'pointer' : 'grab' }}
      >
        <div
          className="flex items-center gap-8 min-w-max"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {skillList.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center group transition-transform duration-200">
              <span className="text-4xl md:text-5xl mb-1 group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mt-1">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;