'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';


const aboutImages = [
    '/images-for-about/D7936F52-9645-479A-A074-EBA5D3CF2012_1_105_c.jpeg',
    '/images-for-about/5F93A82D-AC67-404B-8B0E-BBCDCCFF55F8_1_105_c.jpeg',
    '/images-for-about/02CC9E10-E020-488D-8887-0495AF722409_1_105_c.jpeg',
    '/images-for-about/F47B68D5-69CF-4952-8D6B-1C78B47FEEBE_1_105_c.jpeg',
    '/images-for-about/D662AD02-6141-46D0-98D1-82FC5C3EF452_1_105_c.jpeg',
    '/images-for-about/15AB8B5A-8B03-4B77-8C69-4DF254F37D06_1_105_c.jpeg',
    '/images-for-about/6C8B7F35-9799-432A-8E83-D114FBF87BF9_1_105_c.jpeg',
    '/images-for-about/B3F41A50-F9FA-4090-8793-4846878682B1_1_201_a.jpeg',
    '/images-for-about/23565449-B9F0-4E51-BCF5-EA44AD7C1889_1_102_o.jpeg',
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
            {/* Greeting and intro first */}
            <div className="max-w-3xl w-full mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mt-12 mb-2">
                    It's so nice to meet you, You can call me Pramodh{' '}
                    <span className="inline-block">👋</span>
                </h1>
                <p className="text-center text-lg mb-8 text-gray-400">
                    Welcome to my digital space!
                </p>
            </div>

            {/* Single Carousel */}
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

            {/* About Content */}
            <div className="max-w-3xl w-full mx-auto flex flex-col gap-8">
                <SectionWithBrightness>
                    <h2 className="text-2xl font-bold mb-2">My Story</h2>
                    <p className="text-base leading-7 text-gray-200 dark:text-gray-300">
                        It all started in a tiny gaming store near my house—the kind with a row of dusty PlayStations and a timer ticking down for every rupee spent. I used to sneak out just for a few minutes of gameplay, but those moments sparked a lifelong obsession with technology.
                        <br /><br />
                        That curiosity deepened when my dad brought home an old computer. I spent hours playing GTA Vice City, but I wasn't just playing—I was exploring. Friends introduced me to game hacks and tricks, and soon I was flashing custom ROMs, booting phones, and running scripts to crack WiFi passwords. At the time, it all felt like magic. And I wanted to be the magician.
                        <br /><br />
                        Driven by a love for physics, math, and how machines work, I pursued a Bachelor's in Electrical Engineering. I was fascinated by circuits, embedded systems, and the raw mechanics behind how things run. But somewhere along the way, I realized I didn't just want to understand machines—I wanted to build smarter systems with them. That's when my passion for programming kicked in.
                        <br /><br />
                        I found myself blending both worlds—hardware and software—writing code to automate tasks, streamline logic, and power the machines I studied. This natural fusion led me to pursue a Master's in Computer Science in the U.S., where I could dive deeper into software engineering, system design, and AI. For me, it wasn't about choosing between hardware and code—it was about uniting them to create meaningful solutions.
                    </p>
                </SectionWithBrightness>

                <SectionWithBrightness>
                    <h2 className="text-2xl font-bold mb-2">How I Work</h2>
                    <p className="text-base leading-7 text-gray-200 dark:text-gray-300">
                        Whether I'm optimizing a backend system, scripting an automation workflow, or designing a new feature, I approach every project with curiosity and a desire to improve. I love clean, functional design, fast feedback loops, and building things that solve real problems.
                    </p>
                </SectionWithBrightness>

                <SectionWithBrightness threshold={0.2}>
                    <div className="flex flex-col gap-16 items-center w-full">
                        {/* Fact 1: Bikes & Travel */}
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-shrink-0 rounded-[2.5rem] border-2 border-white overflow-hidden shadow-md bg-transparent dark:bg-black/20" style={{ maxWidth: 320 }}>
                                <img
                                    src="/images-for-about/1C21EDD5-E204-4736-AFE9-C12B471C9047_1_105_c.jpeg"
                                    alt="Bikes & Travel"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-center md:pl-8 mt-6 md:mt-0">
                                <div className="text-sm md:text-base text-gray-100">
                                    🏍️ <span className="font-bold italic">Bikes & Travel</span>: Nothing beats a good ride on two wheels. I'm always up for spontaneous road trips, especially when there's good food or a scenic view at the end.
                                    <br />
                                    <span className="text-gray-400 block mt-2">
                                        "Jobs fill your pockets, but adventures fill your soul."
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Fact 2: Football & FIFA */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full">
                            <div className="flex-shrink-0 rounded-[2.5rem] border-2 border-white overflow-hidden shadow-md bg-transparent dark:bg-black/20" style={{ maxWidth: 320 }}>
                                <img
                                    src="/images-for-about/6F981C7B-B5A5-49B0-8F68-8C64E8942292_1_105_c.jpeg"
                                    alt="Football & FIFA"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-center md:pr-8 mt-6 md:mt-0">
                                <div className="text-sm md:text-base text-gray-100">
                                    ⚽ <span className="font-bold italic">Football & FIFA</span>: Football stole my heart back in college—and FIFA keeps the obsession alive. I'm that friend who never skips match day. One day, I'd love to help my favorite club grow with code.
                                    <br />
                                    <span className="text-gray-400 block mt-2">
                                        "It's not just a game. It's a way of life."
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Fact 3: Amateur Photographer */}
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-shrink-0 rounded-[2.5rem] border-2 border-white overflow-hidden shadow-md bg-transparent dark:bg-black/20" style={{ maxWidth: 320 }}>
                                <img
                                    src="/images-for-about/FB97B2E5-51A0-4990-BACA-8F50E77D43F1_4_5005_c.jpeg"
                                    alt="Amateur Photographer"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-center md:pl-8 mt-6 md:mt-0">
                                <div className="text-sm md:text-base text-gray-100">
                                    📸 <span className="font-bold italic">Amateur Photographer</span>: I shoot for fun—on trips, during rides, or just random street scenes. Still figuring out the perfect shot, but hey, half the fun is getting there.
                                    <br />
                                    <span className="text-gray-400 block mt-2">
                                        "You don't take a photograph, you make it."
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWithBrightness>

                <SectionWithBrightness>
                    <h2 className="text-2xl font-bold mb-2">What Drives Me</h2>
                    <p className="text-base leading-7 text-gray-200 dark:text-gray-300">
                        At the core, I'm driven by curiosity and a builder's mindset. I love exploring how things work—and more importantly, how they can work better. Each new challenge is a chance to level up, break something, fix it smarter, and create something that makes a difference.
                    </p>
                </SectionWithBrightness>

                <blockquote className="italic text-center my-8 text-lg text-gray-400">
                    "Simplicity is the soul of efficiency."
                </blockquote>
            </div>
        </div>
    );
};

export default About;