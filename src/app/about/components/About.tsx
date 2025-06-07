'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const aboutImages = [
  '/images-for-about/D7936F52-9645-479A-A074-EBA5D3CF2012_1_105_c.jpeg',
  '/images-for-about/02CC9E10-E020-488D-8887-0495AF722409_1_105_c.jpeg',
  '/images-for-about/C7CE8D3C-3125-40C6-8936-47166212A98B_1_105_c.jpeg',
  '/images-for-about/F47B68D5-69CF-4952-8D6B-1C78B47FEEBE_1_105_c.jpeg',
  '/images-for-about/40BF4A5F-7BD1-48E5-A0FA-1E383AD84D36_1_105_c.jpeg',
  '/images-for-about/D662AD02-6141-46D0-98D1-82FC5C3EF452_1_105_c.jpeg',
  '/images-for-about/63D87F25-CBE8-453B-9CB4-E7796273999B_1_105_c.jpeg',
  '/images-for-about/15AB8B5A-8B03-4B77-8C69-4DF254F37D06_1_105_c.jpeg',
  '/images-for-about/B3F41A50-F9FA-4090-8793-4846878682B1_1_201_a.jpeg',
  '/images-for-about/23565449-B9F0-4E51-BCF5-EA44AD7C1889_1_102_o.jpeg',
  '/images-for-about/6C8B7F35-9799-432A-8E83-D114FBF87BF9_1_105_c.jpeg',
  '/images-for-about/27FA46F7-69E7-4DD5-A2F6-3F1B29169FF9_1_105_c.jpeg',
  '/images-for-about/5F93A82D-AC67-404B-8B0E-BBCDCCFF55F8_1_105_c.jpeg',
];

const SectionWithBrightness = ({
  children,
  className = '',
  threshold = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) => {
  const { ref, inView } = useInView({ threshold });
  return (
    <section
      ref={ref}
      className={`rounded-2xl border border-gray-700 p-8 bg-black/60 transition-all duration-500 ease-in-out ${
        inView ? 'brightness-125' : 'brightness-50'
      } ${className}`}
    >
      {children}
    </section>
  );
};

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;
    let animationId: number;
    let start: number | null = null;
    let scrollLeft = 0;
    const speed = 0.05;
    const animate = (timestamp: number) => {
      if (isPaused) return;
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = scrollLeft + elapsed * speed;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth / 2
        ) {
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

  const imageList = [...aboutImages, ...aboutImages];

  return (
    <div className="w-full flex flex-col items-center mt-4 pb-8 px-4">
      <div className="max-w-3xl w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-12 mb-2">
          It&apos;s so nice to meet you, You can call me Pramodh{' '}<span className="inline-block">👋</span>
        </h1>
        <p className="text-center text-lg mb-8 text-gray-400">
          Welcome to my digital space!
        </p>
      </div>

      <div className="max-w-4xl w-full mx-auto mb-8">
        <div
          ref={carouselRef}
          className="relative w-full overflow-x-hidden whitespace-nowrap rounded-lg py-4 mb-8 bg-transparent"
          style={{ cursor: isPaused ? 'pointer' : 'grab' }}
        >
          <div
            className="flex items-center gap-6 min-w-max"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {imageList.map((src, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg min-w-[160px] max-w-[180px] h-[220px] flex items-center justify-center bg-black/40 transition-transform duration-300 relative z-10 hover:z-50 hover:scale-110"
                style={{ transition: 'transform 0.3s, z-index 0.3s' }}
              >
                <Image
                  src={src}
                  alt={`about-img-top-${idx}`}
                  width={180}
                  height={220}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;