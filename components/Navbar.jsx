'use client';

import { useState, useEffect, useRef } from 'react';
import { BsX, BsList } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@constants';
import { logoalt, logo } from '@public/assets';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add an event listener to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full flex items-center fixed py-5 px-6 top-0 z-20 ${
        isScrolled ? 'bg-white shadow-md' : '' }`}
    >
      <div className="w-full flex justify-between items-center 
      max-w-[95rem] mx-auto">
        <div className="flex items-center justify-center w-full">
          <ul className="list-none flex flex-row gap-16 hidden md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'border-b-[4px] rounded-[1px] border-b-secondary text-black' // Change text color to black when active
                    : 'text-black'
                } grow3 text-[20px] text-decoration-none cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <Link href="/" onClick={() => setActive('')}>
            <Image
              src={isScrolled ? logo : logoalt}
              alt="logo"
              width={170}
              height={'auto'}
              className="object-contain"
            />
          </Link>

          <ul className="list-none flex flex-row gap-16 hidden md:flex">
            {navLinks.slice(2, 4).map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'border-b-[4px] rounded-[1px] border-b-secondary text-black' // Change text color to black when active
                    : 'text-black'
                } grow3 text-[20px] text-decoration-none cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <BsX
              size={40}
              className="object-contain cursor-pointer"
              style={{ color: '#000' }} // Change icon color when open
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <BsList
              size={35}
              className="object-contain cursor-pointer"
              style={{ color: '#000' }} // Change icon color when closed
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            ref={menuRef}
            className={`p-6 bg-white absolute top-5 right-0 mx-6 my-14
             min-w-[140px] z-10 rounded-xl shadow-xl slide-down-menu ${
              toggle ? 'opacity-100 visible' : 'opacity-0 invisible' // Add opacity and visibility for the toggle effect
            }`}
            style={{
              height: toggle ? 'auto' : 0,
              transition: 'height 0.3s, opacity 0.3s, visibility 0.3s',
            }}
          >
            <ul className="list-none flex justify-end items-start 
            flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-secondary'
                      : 'text-primary'
                  } font-medium cursor-pointer text-[16px] w-full hover:bg-dimWhite`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
