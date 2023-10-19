'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@styles/styles';
import { navLinks } from '@constants';
import { logoalt } from '@public/assets';
import { BsX, BsList } from 'react-icons/bs';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);

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

    return (
        <nav className='w-full flex items-center fixed md:py-8 ss:py-8 
        py-5 md:px-16 ss:px-16 px-6 top-0 z-20'>
            <div className='w-full flex justify-between items-center
            max-w-[95rem] mx-auto'>
                <div className='flex items-center justify-center w-full'>
                    <ul className='list-none flex flex-row gap-16'>
                        {navLinks.slice(0, 2).map((link) => (
                            <li key={link.id}
                            className={`${
                                active === link.title
                                ? 'border-b-[4px] rounded-[1px] border-b-secondary text-white'
                                : 'text-white'
                            } hover:text-secondary grow3 text-[18px] text-decoration-none
                                cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>

                    <Link href='/'
                        onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                        }}
                        className='ml-40 mr-40'>
                        <Image 
                            src={logoalt}
                            alt='logo'
                            width={150}
                            height={'auto'}
                            className='object-contain'
                        />
                    </Link>

                    <ul className='list-none flex flex-row gap-16'>
                        {navLinks.slice(2, 4).map((link) => (
                            <li key={link.id}
                            className={`${
                                active === link.title
                                ? 'border-b-[4px] rounded-[1px] border-b-secondary text-white'
                                : 'text-white'
                            } hover:text-secondary grow3 text-[18px] text-decoration-none
                                cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* FOR MOBILE */}

                <div className='md:hidden flex flex-1 justify-end 
                items-center'>
                    {toggle ? (
                    <BsX
                        size={40}
                        className="object-contain cursor-pointer"
                        style={{ color: '#fff' }}
                        onClick={() => setToggle(!toggle)}
                    />
                    ) : (
                    <BsList
                        size={35}
                        className="object-contain cursor-pointer"
                        style={{ color: '#fff' }}
                        onClick={() => setToggle(!toggle)}
                    />
                    )}

                    <div ref={menuRef} 
                    className={`p-6 bg-white absolute ss:top-8 top-5 right-0 mx-6 
                    my-14 min-w-[140px] z-10 rounded-xl flex-col ss:mx-16 
                    ss:my-14 ss:min-w-[220px] shadow-xl slide-down-menu`}
                    style={{ height: toggle ? 'auto' : 0, opacity: toggle ? 1 : 0, visibility: toggle ? 'visible' : 'hidden', transition: 'height 0.3s, opacity 0.3s, visibility 0.3s' }}>
                        <ul className='list-none flex justify-end 
                        items-start flex-col gap-4'>
                        {navLinks.map((link) => (
                            <li
                            key={link.id}
                            className={`${
                                active === link.title
                                ? 'text-secondary'
                                : 'text-primary'
                            } font-medium cursor-pointer 
                            text-[16px] ss:text-[20px] w-full 
                            hover:bg-dimWhite`}
                            onClick={() => {
                                setToggle(!toggle)
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
    )
};

export default Navbar;