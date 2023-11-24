'use client';

import { useRouter } from "next/navigation";
import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Confirm = ({ FormData }) => {

    const router = useRouter();
    const { query } = router;

    const handleEdit = () => {
        router.push("/");
    };

    const handlePayment = () => {
        router.push("/payment");
    };

  return (
    <section className="md:min-h-[2300px] ss:min-h-[1900px] min-h-[2050px] 
    mx-auto flex items-center bg-primary">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex items-center w-full md:mb-10 ss:mb-8 mb-5">
                <h1 className="text-secondary font-manierMedium 
                md:text-[50px] ss:text-[40px] text-[33px] md:mr-14">
                    Are you sure?
                </h1>
            </motion.div>
        
            <motion.div variants={textVariant()}
            className='flex items-start w-full md:mb-10 ss:mb-8 mb-8'>
                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[750px] ss:max-w-[600px] 
                md:leading-[22px]'>
                    Please confirm your submitted details for membership. 
                    Make sure the provided information is correct before 
                    proceeding with payment for membership.
                </p>
            </motion.div>

            <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
            className="w-full">
            <form
            className='flex md:flex-row flex-col w-full md:mt-12 md:gap-10
            ss:gap-8 gap-12'>
                <div className='md:w-1/2 w-full'>
                    <div className="grid grid-cols-2 md:gap-8 ss:gap-4 gap-5">
                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                First Name
                            </label>
                            <input
                            type="text"
                            name="firstname"
                            // value={formik.values.firstname}
                            placeholder="Enter your first name"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt focus:outline-none
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Last Name
                            </label>
                            <input
                            type="text"
                            name="lastname"
                            placeholder="Enter your last name"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Email Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Phone Number
                            </label>
                            <PhoneInput
                            type="text"
                            name="phone"
                            defaultCountry="NG"
                            placeholder="Enter your phone number"
                            className="md:py-3 ss:py-3 py-3 px-4 
                            border-none outline-none md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px] text-white 
                            bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Date of Birth
                            </label>
                            <input
                            type="date"
                            name="birthdate"
                            placeholder="DD/MM/YYYY"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Gender
                            </label>
                            <select
                            type="text"
                            name="gender"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-white-4 cursor-pointer
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            >
                                <option value="" disabled hidden>Select a gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>I prefer not to say</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Employer
                            </label>
                            <input
                            type="text"
                            name="employer"
                            placeholder="Where do you work?"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Occupation
                            </label>
                            <input
                            type="text"
                            name="occupation"
                            placeholder="What do you work as?"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Instagram Handle
                            </label>
                            <input
                            type="text"
                            name="instagram"
                            placeholder="www.instagram.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Twitter Handle
                            </label>
                            <input
                            type="text"
                            name="twitter"
                            placeholder="www.twitter.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Facebook Username
                            </label>
                            <input
                            type="text"
                            name="facebook"
                            placeholder="www.facebook.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What turns you on the most?
                            </label>
                            <textarea
                            rows="4"
                            name="turnons"
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                If you could amplify an erotic trait within yourself, what would it be?
                            </label>
                            <textarea
                            rows="4"
                            name="trait"
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What would you contribute to the Nuude! community?
                            </label>
                            <textarea
                            rows="4"
                            name="contribution"
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                And finally, how did you find us?
                            </label>
                            <select
                            type="text"
                            name="mode"
                            placeholder="Please select an option"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-white-4 cursor-pointer
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            >
                                <option value="" disabled hidden>Select an option</option>
                                <option>Social Media</option>
                                <option>From a friend</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className='text-white text-justify col-span-2'>
                            <div className="flex md:gap-3 ss:gap-3 gap-3 items-center">
                                <input
                                type="checkbox"
                                name="age"
                                className='md:w-5 ss:w-5 w-5 h-5 cursor-pointer 
                                rounded-md'
                                />
                                <label className="text-white md:text-[15px] 
                                ss:text-[14px] text-[12px]">
                                    I confirm and consent that I am over the 
                                    age of 18
                                </label>
                            </div>

                            <div className="flex md:gap-3 ss:gap-3 gap-3 md:mt-3 
                            ss:mt-3 mt-3 items-center">
                                <input
                                type="checkbox"
                                name="terms"
                                className='md:w-5 ss:w-5 w-5 h-5 cursor-pointer 
                                rounded-md'
                                />
                                <label className="text-white md:text-[15px] 
                                ss:text-[14px] text-[12px]">
                                    I agree to the above terms and conditions
                                </label>
                            </div>
                        </div>

                        <div className="col-span-2 md:mt-8 ss:mt-8 mt-5
                        flex md:gap-8 ss:gap-5 gap-4 buttonfull">
                            <button
                            onClick={handleEdit}
                            className="bg-secondary grow2 w-fit shadow-md 
                            md:text-[17px] ss:text-[14px] text-[12px] 
                            md:py-4 ss:py-4 py-3 md:px-20 ss:px-16 px-10
                            text-secondary md:rounded-[6px] ss:rounded-[3px] 
                            rounded-[3px] border-[1px] border-secondary
                            cursor-pointer bg-transparent buttonhalf"
                            > 
                                Edit Details
                            </button>

                            <button
                            onClick={() => console.log(FormData)}
                            className="bg-secondary grow2 w-fit shadow-md 
                            md:text-[17px] ss:text-[14px] text-[12px] 
                            md:py-4 ss:py-4 py-3 md:px-12 ss:px-10 px-5
                            text-primary md:rounded-[6px] ss:rounded-[3px] 
                            rounded-[3px] border-none buttonhalf
                            cursor-pointer"
                            > 
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 md:flex hidden items-center
                justify-center mt-[-300px]'>
                    <h1 className='text-secondary text-[1000px]
                    font-manierBold'>
                        !
                    </h1>
                </div>
            </form>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(Confirm, '');