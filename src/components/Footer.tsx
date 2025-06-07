import { Link } from '@radix-ui/themes';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 mt-10 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
      <div className="space-y-2">
        <p>This site was 97% bug-free when I last checked. Probably still is. 🤞</p>
        <p>
          Built by{' '}
          <Link
            href="https://www.linkedin.com/in/pramodh-reddy/"
            target="_blank"
            className="underline hover:text-purple-500 transition-colors"
          >
            Pramodh Reddy
          </Link>{' '}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;