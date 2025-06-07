import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
// import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
// import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";
import { AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
  title: "Pramodh Reddy | Software Engineer Portfolio",
  description: "Pramodh Reddy is a Software Engineer with expertise in Java, Spring Boot, cloud, and distributed systems. Explore his portfolio to see projects, experience, and skills in backend, cloud, and AI-driven applications.",
  keywords: "Pramodh Reddy, Software Engineer, Java, Spring Boot, Cloud, AWS, Backend Developer, Distributed Systems, Portfolio, Python, React, Node.js, AI, Microservices, Web Developer",
  authors: [{ name: "Pramodh Reddy" }],
  openGraph: {
    title: "Pramodh Reddy | Software Engineer Portfolio",
    description: "Explore the portfolio of Pramodh Reddy, showcasing backend, cloud, and AI-driven software engineering projects and skills.",
    url: "https://yourdomain.com", // Update with your actual domain if available
    siteName: "Pramodh Reddy Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // Update with your actual OG image if available
        width: 400,
        height: 200,
        alt: "Pramodh Reddy Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <AnimatePresence mode="wait">
                {children}
              </AnimatePresence>
              <Analytics />
              {/* ConditionalFooter removed from here, will be rendered in pages */}
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}