'use client';

import SectionWrapperAlt from '../hoc/SectionWrapperAlt';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '../constants/index';
import { logo } from '../public/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();

  return (
    <section className='md:min-h-[600px] ss:min-h-[420px] min-h-[360px] 
    flex items-center bg-white sm:px-16 px-6'>
        <div className='flex mx-auto items-center w-full relative 
        flex-col justify-center font-manierRegular max-w-[95rem]'>
            <motion.div variants={textVariant()} className='flex flex-col
            items-center justify-center md:mt-24 ss:mt-10 mt-8'>
                <Image 
                    src={logo} 
                    alt='logo' 
                    className='md:w-[300px] ss:w-[200px] w-[170px] h-auto' 
                />

                <p className='text-maintext md:text-[20px] ss:text-[16px] 
                text-[14px] md:mt-10 ss:mt-8 mt-5 md:leading-[25px] 
                ss:leading-[23px] leading-[20px] text-center'>
                    Nuude! is an exclusively private social and <br></br>
                    entertainment club in Lagos, Nigeria.
                </p>
            </motion.div>

            <motion.div variants={textVariant()} 
            className='flex md:mt-5 ss:mt-2 mt-2 items-center'>
                <BiCopyright className='sm:mr-1 mr-1 md:text-[16px] 
                ss:text-[18px] text-[15px] md:mt-1 ss:mt-1 mt-[5px]
                text-maintext' />

                <p className='md:text-[16px] ss:text-[16px] text-[14px] 
                text-maintext mt-1'>
                    2024. All Rights Reserved.
                </p>
            </motion.div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className='flex md:mt-5 ss:mt-4 mt-3 items-center'>
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
                        className={`md:w-[30px] ss:w-[26px] w-[25px] 
                        h-auto object-contain cursor-pointer grow2 
                        ${index !== socialMedia.length - 1 ? 'mr-3' : 'mr-0' }`}
                        />
                    </Link>
                ))}
            </motion.div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className='flex md:mt-8 ss:mt-4 mt-4 items-center flex-col'>
                <h1 className='text-primary md:text-[18px] ss:text-[16px] 
                text-[14px] font-manierBold'>
                    Website Quick Links
                </h1>
            
                <div className='flex md:mt-2 ss:mt-2 mt-1 items-center'>
                    {footerLinks.map((footer, index) => (
                        <ul className='list-none' key={footer.name}>
                            <Link href={router.pathname !== '/' ? `/#${footer.id}` : `#${footer.id}`}
                            >
                                <li className={`md:text-[18px] ss:text-[16px] grow2
                                text-[14px] text-maintext hover:text-secondary 
                                cursor-pointer text-maintext
                                ${index !== footerLinks.length - 1 ? 'md:mr-12 ss:mr-8 mr-5' : 'mr-0'}`}>
                                    {footer.name}
                                </li>
                            </Link>
                        </ul>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className='borderTop md:pt-5 ss:pt-3 pt-3 md:mt-10 ss:mt-5 mt-5 
            w-full flex items-center'>
                <p className='md:text-[15px] ss:text-[13px] text-[11px]
                text-maintext w-full text-center font-manierLight'>
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

export default SectionWrapperAlt(Footer, '');