'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import { aboutimg } from "@public/assets";
import { layout } from "@styles/styles";
import Image from "next/image";

const About = () => {
  return (
    <section className="md:min-h-[700px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-12">
                <h1 className="text-secondary font-bold md:text-[55px]
                ss:text-[47px] text-[35px] md:mr-10">
                    What is Nuude!?
                </h1>
                <motion.div variants={slideIn('right', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-secondary md:w-full ss:w-[300px]
                        w-[80px] md:h-[1px] ss:h-[1px] h-[2px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={slideIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col gap-10 w-full">
                <motion.div variants={textVariant()}
                className={`${layout.sectionInfo}`}>
                    <p className='text-white md:text-[17px] ss:text-[18px] 
                    text-[14px] md:max-w-[700px] md:leading-[22px]'>
                    Nuude! is an exclusively private club standing to 
                    serve the social and entertainment needs of its 
                    members and guests by maintaining the highest 
                    standards of excellence in all endeavours, providing 
                    creative and culturally rich programs, and by 
                    providing a safe and comfortable environment for 
                    personal exploration.
                    </p>

                    <p className='text-white md:text-[17px] ss:text-[18px] 
                    text-[14px] md:max-w-[700px] md:mt-5 md:leading-[22px]'>
                    The club's exclusivity adds to its allure, ensuring 
                    that only those who are genuinely curious and 
                    open-minded individuals are granted membership. By 
                    carefully curating its members, Nuude! strives to 
                    foster a community of like-minded individuals who can 
                    share in the exploration of their desires, passions 
                    and interests.
                    </p>    

                    <div className='md:mt-16 ss:mt-8 mt-4 flex md:gap-5'>
                        <button
                            className='grow4 bg-secondary
                            md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                            ss:py-3 py-2 md:px-10 ss:px-14 px-6 text-primary 
                            rounded-[6px] font-medium font-manier cursor-pointer'
                        >
                            Become a Member
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

                <motion.div 
                    variants={slideIn('right', 'tween', 0.2, 0.5)}>
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