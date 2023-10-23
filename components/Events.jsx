'use client';

import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import { event } from "@public/assets";
import Image from "next/image";

const Events = () => {
  return (
    <section className="md:min-h-[700px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-12">
                <h1 className="text-secondary font-bold md:text-[55px]
                ss:text-[47px] text-[35px] md:mr-10">
                    Upcoming Events
                </h1>
                <motion.div variants={slideIn('right', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-secondary md:w-full ss:w-[300px]
                        w-[80px] md:h-[1px] ss:h-[1px] h-[2px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={slideIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col gap-10 w-full">
                <motion.div 
                    variants={slideIn('left', 'tween', 0.2, 0.5)}
                    className='flex-1 justify-center items-start'>
                    <Image src={aboutimg} alt='event'
                    className='md:h-[400px] ss:h-[300px] w-auto'
                    />
                </motion.div>

                <motion.div variants={textVariant()}>
                    <h1 className='text-white md:text-[45px] ss:text-[35px] 
                    text-[20px] mb-5'>
                        Nuude!
                    </h1>

                    <p className='text-white md:text-[18px] ss:text-[18px] 
                    text-[14px] md:max-w-[700px] md:leading-[22px] mb-5'>
                    Step into a world of fine dining, intrigue and 
                    sensuality where we hand you the key to your dreams.
                    </p>

                    <p className='text-white md:text-[17px] ss:text-[18px] 
                    text-[14px] md:mb-5'>
                    Featuring: Connect, pool party, fine dining.
                    </p>

                    <div className="relative items-center justify-center
                    md:mb-5">
                        <div className='bg-secondary md:w-full ss:w-[300px]
                        w-[80px] md:h-[1px] ss:h-[1px] h-[1px]' />
                    </div>

                    <h1 className='text-white md:text-[45px] ss:text-[35px] 
                    text-[20px] mb-5'>
                        24th November, 2023
                    </h1>

                    <p className='text-white md:text-[16px] ss:text-[16px] 
                    text-[14px] max-w-[700px] md:mt-5 md:leading-[22px]'>
                    Other details including time and venue will be 
                    communicated privately via email after successful 
                    screening and approval.
                    </p>    

                    <div className='md:mt-16 ss:mt-8 mt-4 flex md:gap-5'>
                        <button
                            className='grow4 bg-secondary
                            md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                            ss:py-3 py-2 md:px-10 ss:px-14 px-6 text-primary 
                            rounded-[6px] font-medium font-manier cursor-pointer'
                        >
                            Apply for Event
                        </button>

                        <button
                            className='border-[1px] grow2 border-secondary 
                            md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                            ss:py-3 py-2 md:px-16 ss:px-14 px-6 text-secondary 
                            rounded-[6px] font-medium bg-transparent font-manier
                            cursor-pointer'
                        >
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Events, 'events');