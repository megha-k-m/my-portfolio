import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons/faConnectdevelop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10); // Change 10 to how far down you want it to trigger
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavBar = () => {
    setShowNavBar(!showNavBar);
  };
  console.log(isDark);
  return (
    <header
      className={`shadow-md sticky top-0 z-50 ${isSticky ? `bg-pink-950` : `bg-pink-500/5`}`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleNavBar}
            >
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="container mx-auto px-4 py-4 flex h-16">
            <nav className="space-x-4 hidden sm:block">
              <FontAwesomeIcon icon={faConnectdevelop} />
              <span>Megha M</span>
            </nav>
          </div>
          <div className="flex justify-end">
            <div className="container mx-auto px-4 py-4 flex h-16">
              <nav className="space-x-4 hidden sm:block mx-3">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
              >
                {isDark ? (
                  <SunIcon className="h-5 w-5 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          {showNavBar && (
            <ul className="space-y-1 px-2 pt-2 pb-3">
              <li className="block rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <a href="#about">About</a>
              </li>
              <li className="block rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <a href="#about">Skills</a>
              </li>
              <li className="block rounded-md px-3 py-2 font-medium text-gray-300  hover:bg-gray-700 hover:text-white">
                <a href="#projects">Projects</a>
              </li>
              <li className="block rounded-md px-3 py-2 font-medium text-gray-300  hover:bg-gray-700 hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
