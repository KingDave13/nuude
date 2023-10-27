'use client';

import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '@utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '@constants';
import { logo } from '@public/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='min-h-[500px] flex items-center'>
        <div className='flex mx-auto items-center w-full relative 
        flex-col justify-center font-manierRegular'>
            <motion.div variants={textVariant()} className='flex flex-col
            items-center justify-center md:mt-14'>
                <Image 
                    src={logo} 
                    alt='logo' 
                    className='md:w-[300px] ss:w-[180px] w-[150px] h-auto' 
                />

                <p className='text-maintext md:text-[22px] ss:text-[16px] 
                text-[14px] md:mt-10 ss:mt-8 mt-5 md:leading-[25px] 
                ss:leading-[23px] leading-[20px] text-center'>
                    Nuude! is an exclusively private social and <br></br>
                    entertainment club in Lagos, Nigeria.
                </p>
            </motion.div>

            <motion.div variants={textVariant()} 
            className='flex md:mt-6 ss:mt-2 mt-1 items-center'>
                <BiCopyright className='sm:mr-1 mr-1 md:text-[16px] 
                ss:text-[18px] text-[15px] md:mt-1 ss:mt-1 mt-[3px]
                text-maintext' />

                <p className='md:text-[17px] ss:text-[16px] text-[14px] 
                text-maintext mt-1'>
                    2023. All Rights Reserved.
                </p>
            </motion.div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className='flex md:mt-8 ss:mt-2 mt-1 items-center'>
                {socialMedia.map((social, index) => (
                    <Link 
                    target='_blank'
                    href={social.link}
                    rel='noreferrer'
                    key={social.id}
                    >
                        <Image
                        src={social.Icon}
                        alt={social.id}
                        className={`md:w-[30px] ss:w-[24px] w-[20px] 
                        h-auto object-contain cursor-pointer grow2 
                        ${index !== socialMedia.length - 1 ? 'mr-3' : 'mr-0' }`}
                        />
                    </Link>
                ))}
            </motion.div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className='flex md:mt-8 ss:mt-2 mt-1 items-center flex-col'>
                <h1 className='text-primary md:text-[18px] ss:text-[16px] 
                    text-[14px] font-manierBold'>
                    Website Quick Links
                </h1>
            
                <div className='flex md:mt-5 ss:mt-2 mt-1 items-center'>
                    {footerLinks.map((footer, index) => (
                        <ul className='list-none' key={footer.name}>
                            <Link
                            href={`#${footer.id}`}
                            >
                                <li className={`md:text-[18px] ss:text-[16px] grow2
                                text-[14px] text-maintext hover:text-secondary 
                                cursor-pointer text-maintext
                                ${index !== footerLinks.length - 1 ? 'md:mr-12 ss:mr-2 mr-2' : 'mr-0'}`}>
                                    {footer.name}
                                </li>
                            </Link>
                        </ul>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className='borderTop md:pt-8 ss:pt-2 pt-1 md:mt-10 
            ss:mt-2 mt-1 w-full flex items-center'>
                <p className='md:text-[15px] ss:text-[14px] text-[12px]
                text-maintext w-full text-center'>
                Website designed and developed with love by
                    <span className='text-[#069D6D] font-manierBold 
                    cursor-pointer grow3'>
                        <a href='https://pluggresources.com/' target='blank'> Plugg Resources.
                        </a>
                    </span>
                </p>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Footer, '');