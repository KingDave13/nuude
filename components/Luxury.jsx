'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import { layout } from "@styles/styles";

const Luxury = () => {
  return (
    <section className="md:min-h-[800px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-20 ss:mb-8">
                <h1 className="text-white font-manierMedium md:text-[55px]
                ss:text-[40px] text-[35px] md:mr-14 ss:mr-6">
                    Unparalled Luxury <br></br>for the Select
                </h1>
                <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-white md:w-full ss:w-full
                        w-[80px] md:h-[1px] ss:h-[1px] h-[2px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={slideIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col gap-10 w-full">
                <motion.div variants={textVariant()}
                className={`${layout.sectionInfo}`}>
                    <p className='text-white md:text-[17px] ss:text-[15px] 
                    text-[14px] md:max-w-[700px] ss:max-w-[550px] 
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
                    text-[14px] md:max-w-[700px] ss:max-w-[550px] md:mt-5 
                    ss:mt-5 md:leading-[22px]'>
                        In addition, the pool parties add an exciting and 
                        playful dimension to the luxury erotic experience. 
                        These poolside events offer a relaxed yet sensuous 
                        atmosphere, where guests can enjoy the company of 
                        like-minded individuals in a more casual setting. 
                        The Pool Party series often features entertainment, 
                        music, and activities that embrace the spirit of 
                        sensuality and freedom.
                    </p>    

                    <div className='md:mt-16 ss:mt-10 mt-4 flex md:gap-5
                    ss:gap-5'>
                        <button
                            className='grow4 bg-secondary border-none
                            md:text-[17px] ss:text-[14px] text-[14px] md:py-4
                            ss:py-4 py-2 md:px-10 ss:px-5 px-6 text-primary 
                            rounded-[6px] cursor-pointer'
                        >
                            Become a Member
                        </button>

                        <button
                            className='border-[1px] grow2 border-secondary 
                            md:text-[17px] ss:text-[14px] text-[14px] md:py-4 
                            ss:py-4 py-2 md:px-16 ss:px-10 px-6 text-secondary 
                            rounded-[6px] bg-transparent cursor-pointer'
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