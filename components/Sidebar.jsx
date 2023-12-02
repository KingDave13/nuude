'use client';

import { useState, useEffect, useRef } from 'react';
import { BsX } from 'react-icons/bs';
import styles from '@styles/styles';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Image from 'next/image';
import { sideLinks } from '@constants';
import { logoalt } from '@public/assets';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [active, setActive] = useState('requests');
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setToggle(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

const handleSideItemClick = (link) => {
  router.push(`/${link.id}`)
  setActive(link.title);
};


  return (
    <nav className={`${styles.paddingX} w-1/4 flex items-center fixed 
      md:py-6 ss:py-6 py-5 md:px-16 ss:px-16 px-6 top-0 z-20 navsmooth 
      font-manierRegular`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <div className="flex flex-col items-center justify-center w-full 
        h-screenhidden md:flex">
          <Image
            src={logoalt}
            alt="logo"
            width={160}
            height={'auto'}
            className="object-contain"
          />

          <ul className="list-none flex flex-col gap-6 hidden md:flex">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'bg-secondary'
                    : 'bg-none'
                } hover:text-secondary grow3 text-[19px] text-decoration-none 
                cursor-pointer`}
                onClick={() => {
                  handleSideItemClick(link);
                }}
              >
                <a href={`${link.id}`} className='gap-3'>
                  {link.Icon}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* FOR MOBILE */}
        
        <div className="md:hidden flex justify-between flex-1 items-center
        mt-3">
            <Image
              src={logoalt}
              alt="logo"
              width={130}
              height="auto"
              className="object-contain"
            />

          <div className="flex items-center z-20">
            {toggle ? (
              <BsX
                size={40}
                className="object-contain cursor-pointer"
                style={ '#fff' }
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <HiOutlineMenuAlt3
                size={40}
                className="object-contain cursor-pointer"
                style={'#fff' }
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
          
          <div
            ref={menuRef}
            className={`p-6 ss:mt-28 mt-24 bg-white absolute top-0 right-0 
            z-10 flex-col w-full shadow-xl
            ${toggle ? 'menu-slide-enter menu-slide-enter-active' 
            : 'menu-slide-exit menu-slide-exit-active'}`}
          >
            <ul className="list-none flex justify-end 
            flex-col">
              {sideLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-secondary'
                      : 'text-primary'
                  } font-medium cursor-pointer ss:text-[20px] text-[16px] 
                  w-full
                  ${index !== sideLinks.length - 1 ? 'border-b-[1px] pb-1.5 pt-1.5' : 'pt-1.5'}`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavItemClick(link);
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

export default Sidebar;
