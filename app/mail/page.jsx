'use client';

import { BiCopyright } from 'react-icons/bi';
import { socialMedia } from '@constants';
import { contact, logo } from '@public/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MailTemplate = () => {

  return (
    <section className='flex items-center bg-white sm:px-16 px-6'>
        <div className='flex mx-auto items-center w-full relative 
        flex-col justify-center max-w-[95rem]'>
            <div className='flex flex-col items-center justify-center
            md:gap-8 ss:gap-8 gap-6'>
                <Image 
                    src={logo} 
                    alt='logo' 
                    className='md:w-[300px] ss:w-[200px] w-[170px] h-auto' 
                />

                <Image 
                    src={contact} 
                    alt='contact' 
                    className='w-full md:h-[400px] ss:h-[400px] h-[300px]' 
                />
            </div>

            <div className='flex md:pt-8 ss:pt-8 pt-6 md:pb-8 ss:pb-8 pt-6 
            items-center'>
                <p className='md:text-[16px] ss:text-[16px] text-[14px] 
                text-primary text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Pellentesque imperdiet purus at sapien 
                    tincidunt, et feugiat turpis suscipit. Fusce nec 
                    ligula ut justo placerat dictum. Nullam ut 
                    scelerisque velit. Nam ac velit nec sapien suscipit 
                    fermentum. In sit amet magna arcu. Curabitur 
                    malesuada orci nec sapien interdum scelerisque. 
                    Proin ullamcorper lacinia velit a fermentum. 
                    Suspendisse potenti. Nam in urna id eros auctor 
                    vehicula non at metus. Fusce dapibus, lectus a 
                    facilisis aliquet, metus orci fermentum leo, sed 
                    blandit est libero vel libero. Duis vel lacinia 
                    metus. Curabitur luctus mi ut erat dictum, vel 
                    faucibus lectus vehicula. Sed vel dui vel lorem 
                    accumsan auctor.
                </p>
            </div>

            <div className='bg-mail flex flex-col items-center md:p-8 
            ss:p-8 p-6 flex md:gap-8 ss:gap-8 gap-6 text-mailtext'>
                <div className='flex items-center'>
                    <BiCopyright className='sm:mr-1 mr-1 md:text-[15px] 
                    ss:text-[15px] text-[13px]' />

                    <p className='md:text-[14px] ss:text-[14px] text-[12px]'>
                        2024 Nuude! Private Members' Club. All Rights Reserved.
                    </p>
                </div>

                <div className='flex items-center md:gap-6 ss:gap-6 gap-4'>
                    <Link href='https://nuude.club/about'>
                        <p className='md:text-[14px] ss:text-[14px] grow2
                        text-[12px] cursor-pointer'>
                            About Us
                        </p>
                    </Link>

                    <Link href='https://nuude.club/contact'>
                        <p className='md:text-[14px] ss:text-[14px] grow2
                        text-[12px] cursor-pointer'>
                            Contact Us
                        </p>
                    </Link>
                </div>

                <div className='flex items-center'>
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
                            className={`md:w-[20px] ss:w-[20px] w-[18px] 
                            h-auto object-contain cursor-pointer grow2 
                            ${index !== socialMedia.length - 1 ? 'mr-3' : 'mr-0' }`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
};

export default MailTemplate;