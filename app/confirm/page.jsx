'use client';

import { useRouter } from "next/navigation";
import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useFormik } from "formik";
import * as Yup from 'yup';

const Confirm = () => {

    const router = useRouter();

    const handleEdit = () => {
        router.push("/");
    };

    const handlePayment = () => {
        router.push("/payment");
    };

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            birthdate: '',
            gender: '',
            employer: '',
            occupation: '',
            instagram: '',
            twitter: '',
            facebook: '',
            turnons: '',
            trait: '',
            contribution: '',
            mode: '',
            age: false,
            terms: false,
        },

        validationSchema: Yup.object({
            firstname: Yup.string().required('First Name is required.'),
            lastname: Yup.string().required('Last Name is required.'),
            email: Yup.string().email('Invalid email address.').required('Email is required.'),
            phone: Yup.string().required('Phone number is required.'),
            birthdate: Yup.string().required('Birth date is required.'),
            gender: Yup.string().required('Gender is required.'),
            employer: Yup.string().required('Employer is required.'),
            occupation: Yup.string().required('Occupation is required.'),
            instagram: Yup.string().required('Instagram is required.'),
            twitter: Yup.string().required('Twitter is required.'),
            facebook: Yup.string().required('Facebook is required.'),
            turnons: Yup.string().required('This is required.'),
            trait: Yup.string().required('This is required.'),
            contribution: Yup.string().required('This is required.'),
            mode: Yup.string().required('This is required.'),
            age: Yup.boolean().oneOf([true], 'Required.'),
            terms: Yup.boolean().oneOf([true], 'Required.'),
        }),
    });

  return (
    <section className="md:min-h-[2300px] ss:min-h-[3000px] min-h-[4150px] 
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
            <form onSubmit={formik.handleSubmit} 
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
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your first name"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt focus:outline-none
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.firstname && formik.errors.firstname}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Last Name
                            </label>
                            <input
                            type="text"
                            name="lastname"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your last name"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.lastname && formik.errors.lastname}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Email Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your email address"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.email && formik.errors.email}
                            </p>
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
                            value={formik.values.phone}
                            onChange={(value) => {
                            const numericValue = value?.replace(/[^0-9]/g, '') ?? '';

                            if (numericValue.length <= 13) {
                                formik.handleChange({
                                target: {
                                    name: 'phone',
                                    value: numericValue,
                                },
                                });
                            }
                            }}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your phone number"
                            className="md:py-3 ss:py-3 py-3 px-4 
                            border-none outline-none md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px] text-white 
                            bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.phone && formik.errors.phone}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Date of Birth
                            </label>
                            <input
                            type="date"
                            name="birthdate"
                            value={formik.values.birthdate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="DD/MM/YYYY"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.birthdate && formik.errors.birthdate}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Gender
                            </label>
                            <select
                            type="text"
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.gender && formik.errors.gender}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Employer
                            </label>
                            <input
                            type="text"
                            name="employer"
                            value={formik.values.employer}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Where do you work?"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.employer && formik.errors.employer}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Occupation
                            </label>
                            <input
                            type="text"
                            name="occupation"
                            value={formik.values.occupation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="What do you work as?"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.occupation && formik.errors.occupation}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Instagram Handle
                            </label>
                            <input
                            type="text"
                            name="instagram"
                            value={formik.values.instagram}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="www.instagram.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.instagram && formik.errors.instagram}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Twitter Handle
                            </label>
                            <input
                            type="text"
                            name="twitter"
                            value={formik.values.twitter}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="www.twitter.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.twitter && formik.errors.twitter}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Facebook Username
                            </label>
                            <input
                            type="text"
                            name="facebook"
                            value={formik.values.facebook}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="www.facebook.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.facebook && formik.errors.facebook}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What turns you on the most?
                            </label>
                            <textarea
                            rows="4"
                            name="turnons"
                            value={formik.values.turnons}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.turnons && formik.errors.turnons}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                If you could amplify an erotic trait within yourself, what would it be?
                            </label>
                            <textarea
                            rows="4"
                            name="trait"
                            value={formik.values.trait}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.trait && formik.errors.trait}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What would you contribute to the Nuude! community?
                            </label>
                            <textarea
                            rows="4"
                            name="contribution"
                            value={formik.values.contribution}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.contribution && formik.errors.contribution}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                And finally, how did you find us?
                            </label>
                            <select
                            type="text"
                            name="mode"
                            value={formik.values.mode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.mode && formik.errors.mode}
                            </p>
                        </div>

                        <div className="col-span-2 md:mt-5 ss:mt-3 
                        flex md:gap-8 ss:gap-5 gap-3 w-full">
                            <button
                            onClick={handleEdit}
                            className="bg-secondary grow2 w-fit shadow-md 
                            md:text-[20px] ss:text-[14px] text-[13px] 
                            md:py-5 ss:py-3 md:px-24 ss:px-8
                            text-secondary md:rounded-[6px] ss:rounded-[3px] 
                            border-[1px] border-secondary
                            cursor-pointer bg-transparent"
                            > 
                                Edit Details
                            </button>

                            <button
                            onClick={handlePayment}
                            className="bg-secondary grow2 w-fit shadow-md 
                            md:text-[20px] ss:text-[14px] text-[13px] 
                            md:py-5 ss:py-3 md:px-12 ss:px-8
                            text-primary md:rounded-[6px] ss:rounded-[3px] 
                            border-none
                            cursor-pointer"
                            > 
                                Proceed to payment
                            </button>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 md:flex hidden items-center
                justify-center mt-[-200px]'>
                    <h1 className='text-secondary text-[1200px]'>
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