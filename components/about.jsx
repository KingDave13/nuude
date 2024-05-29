'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@utils/motion';
import { aboutimg } from "@public/assets";
import { layout } from "@styles/styles";
import Image from "next/image";

import scrollToSection from "@constants/scrollToSection";

const About = () => {
  return (
    <section className="md:min-h-[800px] ss:min-h-[600px] min-h-[850px] 
    mx-auto flex items-center relative">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular max-w-[95rem] md:mb-0 ss:mb-0'>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-12 ss:mb-8 
            mb-8">
                <h1 className="text-secondary font-manierMedium md:text-[55px]
                ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
                    What is Nuude!?
                </h1>
                <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-secondary w-full h-[1px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={fadeIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col md:gap-10 
            ss:gap-10 gap-12 w-full aboutimage">
                <motion.div variants={textVariant()}
                className={`${layout.sectionInfo}`}>
                    <p className='text-white md:text-[17px] ss:text-[14px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px]  
                    md:leading-[22px]'>
                    Nuude! is an exclusively private club standing to 
                    serve the social and entertainment needs of its 
                    members and guests by maintaining the highest 
                    standards of excellence in all endeavours, providing 
                    creative and culturally rich programs, and by 
                    providing a safe and comfortable environment for 
                    personal exploration.
                    </p>

                    <p className='text-white md:text-[17px] ss:text-[14px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px] 
                    md:mt-5 ss:mt-5 mt-5 md:leading-[22px]'>
                    The club's exclusivity adds to its allure, ensuring 
                    that only those who are genuinely curious and 
                    open-minded individuals are granted membership. By 
                    carefully curating its members, Nuude! strives to 
                    foster a community of like-minded individuals who can 
                    share in the exploration of their desires, passions 
                    and interests.
                    </p>    

                    <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-6 ss:gap-5 
                    gap-3 items-center font-manierRegular buttonfull'>
                        <button
                            className='grow4 bg-secondary border-none buttonhalf
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5
                            ss:py-3 py-3 md:px-12 ss:px-3 px-3 text-primary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer'
                            onClick={() => scrollToSection('membership')}
                        >
                            Become a Member
                        </button>

                        <button
                            className='border-[1px] grow2 border-secondary 
                            md:text-[17px] ss:text-[16px] text-[14px] md:py-3.5 
                            ss:py-3 py-3 md:px-20 ss:px-10 px-6 text-secondary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium bg-transparent font-manier cursor-pointer
                            buttonhalf'
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                <motion.div 
                    variants={fadeIn('down', 'tween', 0.2, 0.5)}>
                    <Image src={aboutimg} alt='about'
                    className='md:h-[400px] ss:h-[300px] w-auto'
                    />
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(About, 'about');