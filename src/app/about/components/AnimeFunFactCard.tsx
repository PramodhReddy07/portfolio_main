import React from 'react';
import Image from 'next/image';

interface AnimeFunFactCardProps {
  image: string; // emoji or image path
  alt?: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export default function AnimeFunFactCard({ image, alt, children, reverse = false }: AnimeFunFactCardProps) {
  const isEmoji = image.length <= 3; // crude emoji check
  return (
    <div className={`flex items-center gap-6 bg-[#18181b] dark:bg-[#23272f] rounded-2xl shadow-lg px-6 py-5 mb-4 border border-gray-700 max-w-2xl w-full ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-black/10 rounded-xl">
        {isEmoji ? (
          <span className="text-5xl" aria-label={alt}>{image}</span>
        ) : (
          <Image src={image} alt={alt || ''} width={64} height={64} className="object-contain w-16 h-16" />
        )}
      </div>
      <div className="text-lg md:text-xl font-medium text-gray-200 dark:text-gray-100 leading-snug text-left">
        {children}
      </div>
    </div>
  );
} 