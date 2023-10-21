import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';

const About = () => {
  return (
    <section className="md:min-h-[700px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center justify-between w-full mx-auto flex 
        md:flex-row ss:flex-row flex-col items-start md:gap-5 ss:gap-5 
        gap-10'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row">
                <h1>
                    What is Nuude?
                </h1>
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

export default SectionWrapper(About, '');