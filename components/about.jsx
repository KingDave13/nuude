'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';

const About = () => {
  return (
    <section className="md:min-h-[700px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex
        md:flex-row ss:flex-row flex-col items-start md:gap-5 ss:gap-5 
        gap-10'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center justify-between w-full">
                <h1 className="text-secondary font-bold md:text-[55px]
                ss:text-[47px] text-[35px] gap-5">
                    What is Nuude!?
                </h1>
                <motion.div variants={slideIn('right', 'tween', 0.2, 0.5)}
                className="flex relative items-center justify-center">
                    <div className='bg-secondary md:w-[1000px] ss:w-[300px]
                        w-[80px] md:h-[1px] ss:h-[1px] h-[2px]' />
                </motion.div>
            </motion.div>
            
            <div>
                <div>

                </div>

                <div>

                </div>
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(About, 'about');