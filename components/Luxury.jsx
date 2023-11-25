'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import { layout } from "@styles/styles";

import scrollToSection from "@constants/scrollToSection";

const Luxury = () => {
  return (
    <section className="md:min-h-[800px] ss:min-h-[620px] min-h-[650px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-20 ss:mb-8
            mb-8">
                <h1 className="text-white font-manierMedium md:text-[55px]
                ss:text-[40px] text-[33px] md:mr-14 ss:mr-6 mr-5 
                md:leading-[70px] ss:leading-[50px] leading-[40px]">
                    Unparalled Luxury <br className="ss:flex hidden"></br>
                    for the Select
                </h1>
                <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-white md:w-full ss:w-full
                        w-[95px] h-[1px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={slideIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col md:gap-10 
            ss:gap-10 gap-12 w-full">
                <motion.div variants={textVariant()}
                className={`${layout.sectionInfo}`}>
                    <p className='text-white md:text-[17px] ss:text-[15px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[550px] 
                    md:leading-[22px]'>
                        The black-tie luxury dinner series is characterized by
                        its attention to detail, featuring gourmet cuisine, 
                        fine wines, and elegant décor that create an 
                        atmosphere of refinement and indulgence. The intimate
                        setting encourages conversation and connection 
                        among attendees amidst the classes, fostering a 
                        sense of community among those who share an interest
                        in fetish and erotic arts.
                    </p>

                    <p className='text-white md:text-[17px] ss:text-[15px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[550px] md:mt-5 
                    ss:mt-5 mt-5 md:leading-[22px]'>
                        In addition, the pool parties add an exciting and 
                        playful dimension to the luxury erotic experience. 
                        These poolside events offer a relaxed yet sensuous 
                        atmosphere, where guests can enjoy the company of 
                        like-minded individuals in a more casual setting. 
                        The Pool Party series often features entertainment, 
                        music, and activities that embrace the spirit of 
                        sensuality and freedom.
                    </p>    

                    <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-8 ss:gap-5 
                    gap-3 items-center font-manierRegular buttonfull'>
                        <button
                            className='grow4 bg-secondary border-none buttonhalf
                            md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                            ss:py-3 py-3 md:px-12 ss:px-7 px-3 text-primary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer'
                            onClick={() => scrollToSection('membership')}
                        >
                            Become a Member
                        </button>

                        <button
                            className='border-[1px] grow2 border-secondary 
                            md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                            ss:py-3 py-3 md:px-20 ss:px-14 px-6 text-secondary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium bg-transparent font-manier cursor-pointer
                            buttonhalf'
                            onClick={() => scrollToSection('events')}
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

export default SectionWrapper(Luxury, '');