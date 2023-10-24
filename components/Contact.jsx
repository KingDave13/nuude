'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import { layout } from "@styles/styles";

const Contact = () => {
  return (
    <section className="md:min-h-[800px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-20">
                <h1 className="text-white font-bold md:text-[55px]
                ss:text-[47px] text-[35px] md:mr-14">
                    Contact Us
                </h1>
                <motion.div variants={slideIn('right', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-white md:w-full ss:w-[300px]
                        w-[80px] md:h-[1px] ss:h-[1px] h-[2px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={slideIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col gap-10 w-full">
                <motion.div variants={textVariant()}
                className={`${layout.sectionInfo}`}>
                    <p className='text-white md:text-[17px] ss:text-[18px] 
                    text-[14px] max-w-[700px] md:leading-[22px]'>
                    Got any more inquiries, complaints, sponsorship 
                    proposals, payment disputes and any other general 
                    info? Contact us today and we'll get back to you 
                    very, very swiftly.
                    </p>

                    <p className='text-white md:text-[17px] ss:text-[18px] 
                    text-[14px] max-w-[700px] md:mt-5 md:leading-[22px]'>
                    In addition, the pool parties add an exciting and 
                    playful dimension to the luxury erotic experience. 
                    These poolside events offer a relaxed yet sensuous 
                    atmosphere, where guests can enjoy the company of 
                    like-minded individuals in a more casual setting. 
                    The Pool Party series often features entertainment, 
                    music, and activities that embrace the spirit of 
                    sensuality and freedom.
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
                            View Events
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Contact, 'contact');