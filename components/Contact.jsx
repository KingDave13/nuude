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
        
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}>
                <p className='text-white md:text-[17px] ss:text-[18px] 
                text-[14px] max-w-[700px] md:leading-[22px]'>
                Got any more inquiries, complaints, sponsorship 
                proposals, payment disputes and any other general 
                info? Contact us today and we'll get back to you 
                very, very swiftly.
                </p>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Contact, 'contact');