'use client';

import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';

const Application = () => {
  return (
    <section className="md:min-h-[1100px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex items-center w-full md:mb-10">
                <h1 className="text-secondary font-bold md:text-[50px]
                ss:text-[47px] text-[35px] md:mr-14">
                    Membership Application Form
                </h1>
            </motion.div>
        
            <motion.div variants={textVariant()}
            className='flex items-start w-full md:mb-10'>
                <p className='text-white md:text-[17px] ss:text-[18px] 
                text-[14px] md:max-w-[750px] md:leading-[22px]'>
                Please read the terms and conditions carefully before 
                completing and submitting this membership application 
                form. An email will be sent to you upon successful 
                payment and completion of the form as well as on approval 
                of your membership.
                </p>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Application, '');