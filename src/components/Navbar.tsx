'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDarkMode } from '@/hooks/useDarkMode';
import {
  SunIcon,
  MoonIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon
} from '@radix-ui/react-icons';
import Image from 'next/image';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Photography', href: '/#photography' },
  { label: 'Blogs', href: '/blogs' },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/16jUJidd8T9Ack3GBuznZ7ZfsJQ3WV1XF',
    external: true,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePhotographyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      const element = document.getElementById('photography');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#photography');
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="flex justify-between items-center w-full px-6 py-3 rounded-xl bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.05)]">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-8 sm:h-10 w-auto flex items-center">
            <Image
              src="/pramodh_logo.png"
              alt="Pramodh Reddy Logo"
              width={160}
              height={48}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {navItems.map((item, index) => (
            item.label === 'Photography' ? (
              <li key={index}>
                <button
                  onClick={handlePhotographyClick}
                  className="cursor-pointer transition hover:text-black dark:hover:text-white"
                >
                  Photography
                </button>
              </li>
            ) : (
              <li key={index}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`transition hover:text-black dark:hover:text-white ${
                    pathname === item.href
                      ? 'text-black dark:text-white font-semibold'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          ))}
        </ul>

        {/* Right icons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="https://github.com/PramodhReddy07" target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform" />
          </Link>
          <Link href="https://www.linkedin.com/in/pramodh-reddy/" target="_blank" rel="noopener noreferrer">
            <LinkedInLogoIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform" />
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <MoonIcon className="w-4 h-4 text-white rotate-[15deg] transition" />
            ) : (
              <SunIcon className="w-4 h-4 text-black rotate-[-15deg] transition" />
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-full transition"
          >
            {menuOpen ? (
              <Cross1Icon className="w-4 h-4 text-gray-800 dark:text-white" />
            ) : (
              <HamburgerMenuIcon className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-2 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 shadow space-y-4 text-center">
          {navItems.map((item, index) => (
            item.label === 'Photography' ? (
              <div key={index}>
                <button
                  onClick={(e) => {
                    handlePhotographyClick(e);
                    setMenuOpen(false);
                  }}
                  className="block text-sm font-medium px-3 py-2 rounded-md transition cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Photography
                </button>
              </div>
            ) : (
              <div key={index}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`block text-sm font-medium px-3 py-2 rounded-md transition ${
                    pathname === item.href
                      ? 'text-black dark:text-white font-semibold bg-white/20 dark:bg-white/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            )
          ))}
          <div className="flex justify-center gap-4 pt-2">
            <Link href="https://github.com/PramodhReddy07" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.linkedin.com/in/pramodh-reddy/" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform" />
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition"
            >
              {isDarkMode ? (
                <MoonIcon className="w-4 h-4 text-white rotate-[15deg] transition" />
              ) : (
                <SunIcon className="w-4 h-4 text-black rotate-[-15deg] transition" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;