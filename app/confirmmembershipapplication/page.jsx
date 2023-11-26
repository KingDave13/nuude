'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';


const ConfirmMembership = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        setFormData(storedFormData);
    }, []);

    const handleEdit = () => {
        // const storedFormData = JSON.parse(localStorage.getItem('formData'));
        console.log('Retrieved form data for edit:', formData);
        // router.replace("/membershipapplication?edit=true");
    };

    const handlePayment = () => {
        router.push("/membershippayment");
    };

  return (
    <section className="md:min-h-[2300px] ss:min-h-[1700px] min-h-[1950px] 
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
                            readOnly
                            type="text"
                            name="firstname"
                            value={formData.firstname || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            focus:outline-none bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Last Name
                            </label>
                            <input
                            readOnly
                            type="text"
                            name="lastname"
                            value={formData.lastname || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Email Address
                            </label>
                            <input
                            readOnly
                            type="email"
                            name="email"
                            value={formData.email || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Phone Number
                            </label>
                            <input
                            readOnly
                            type="text"
                            name="phone"
                            value={formData.phone || ''}
                            className="md:py-3 ss:py-3 py-3 px-4 
                            border-none outline-none md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px] text-textalt 
                            bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Date of Birth
                            </label>
                            <input
                            readOnly
                            type="date"
                            name="birthdate"
                            value={formData.birthdate || ''}
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
                            readOnly
                            type="text"
                            name="gender"
                            value={formData.gender || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            cursor-pointer bg-primaryalt"
                            >
                               <option>{formData.gender}</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Employer
                            </label>
                            <input
                            readOnly
                            type="text"
                            name="employer"
                            value={formData.employer || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Occupation
                            </label>
                            <input
                            readOnly
                            type="text"
                            name="occupation"
                            value={formData.occupation || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Instagram Handle
                            </label>
                            <input
                            readOnly
                            type="text"
                            name="instagram"
                            value={formData.instagram || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Twitter Handle
                            </label>
                            <input
                            readOnly
                            type="text"
                            name="twitter"
                            value={formData.twitter || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Facebook Username
                            </label>
                            <input
                            readOnly
                            type="text"
                            name="facebook"
                            value={formData.facebook || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What turns you on the most?
                            </label>
                            <textarea
                            readOnly
                            rows="4"
                            name="turnons"
                            value={formData.turnons || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                If you could amplify an erotic trait within yourself, what would it be?
                            </label>
                            <textarea
                            readOnly
                            rows="4"
                            name="trait"
                            value={formData.trait || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What would you contribute to the Nuude! community?
                            </label>
                            <textarea
                            readOnly
                            rows="4"
                            name="contribution"
                            value={formData.contribution || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                And finally, how did you find us?
                            </label>
                            <select
                            readOnly
                            type="text"
                            name="mode"
                            value={formData.mode || ''}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] cursor-pointer 
                            bg-primaryalt"
                            >
                                <option>{formData.mode || ''}</option>
                            </select>
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
                            onClick={handlePayment}
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

export default SectionWrapper(ConfirmMembership, '');