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

            <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
            className='flex md:flex-row w-full md:mt-12'>
                <div className='md:mt-0 ss:mt-5 mt-0 w-1/2'>
                    <form className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
                            First Name
                            </label>
                            <input
                            type="text"
                            name="firstname"
                            // value={form.name}
                            // onChange={handleChange}
                            placeholder="Enter your first name"
                            className="md:py-3 ss:py-3 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
                            Last Name
                            </label>
                            <input
                            type="text"
                            name="lastname"
                            // value={form.name}
                            // onChange={handleChange}
                            placeholder="Enter your last name"
                            className="md:py-3 ss:py-3 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
                            Email Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            // value={form.email}
                            // onChange={handleChange}
                            placeholder="Enter your email address"
                            className="md:py-3 ss:py-3 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
                            Subject
                            </label>
                            <input
                            type="text"
                            name="subject"
                            // value={form.subject}
                            // onChange={handleChange}
                            placeholder="Enter a subject"
                            className="md:py-3 ss:py-3 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
                            Message
                            </label>
                            <textarea
                            rows="6"
                            name="message"
                            // value={form.message}
                            // onChange={handleChange}
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-3 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2">
                            <button
                            type="submit"
                            className="bg-secondary grow2 w-fit shadow-md 
                            md:text-[16px] ss:text-[16px] text-[13px] py-4 px-20
                            text-primary md:rounded-[3px] border-none
                            font-manier cursor-pointer"
                            >
                            {/* {Loading ? 'Sending...' : 'Send'} */} Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className='bg-primaryalt'>
                    
                </div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Application, '');