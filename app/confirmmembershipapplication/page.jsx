'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import SectionWrapper from '../../hoc/SectionWrapper';
import PhoneInput from 'react-phone-number-input';
import { useFormik } from "formik";
import * as Yup from 'yup';


const ConfirmMembership = () => {
    const router = useRouter();
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        setFormData(storedFormData);
    }, []);

    const formik = useFormik({
        initialValues: {
            firstname: formData.firstname || '',
            lastname: formData.lastname || '',
            email: formData.email || '',
            phone: formData.phone || '',
            birthdate: formData.birthdate || '',
            gender: formData.gender || '',
            employer: formData.employer || '',
            occupation: formData.occupation || '',
            instagram: formData.instagram || '',
            twitter: formData.twitter || '',
            facebook: formData.facebook || '',
            turnons: formData.turnons || '',
            trait: formData.trait || '',
            contribution: formData.contribution || '',
            mode: formData.mode || '',
            age: formData.age || false,
            terms: formData.terms || false,
        },
        enableReinitialize: true,
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
        onSubmit: async (values) => {
            localStorage.setItem('formData', JSON.stringify(values));
            setFormData(values);
            formik.resetForm({ values });
            setIsEditable(false);
        },        
    });

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditable(true);
    };

    const handlePayment = (e) => {
        e.preventDefault();
        if (Object.keys(formData).length > 0) {
            router.push("/membershippayment");
        } else {
            console.log('Cannot proceed with payment. Form data is empty.');
        }
    };

  return (
    <section className="md:min-h-[2300px] ss:min-h-[1750px] min-h-[2000px] 
    mx-auto flex items-center bg-primary">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular'>
            <div className="flex items-center w-full md:mb-10 ss:mb-8 mb-5">
                <h1 className="text-secondary font-manierMedium 
                md:text-[50px] ss:text-[40px] text-[33px] md:mr-14">
                    Are you sure?
                </h1>
            </div>
        
            <div className='flex items-start w-full md:mb-10 ss:mb-8 mb-8'>
                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[750px] ss:max-w-[600px] 
                md:leading-[22px]'>
                    Please confirm your submitted details for membership. 
                    Make sure the provided information is correct before 
                    proceeding with payment for membership.
                </p>
            </div>

            <div className="w-full">
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
                                value={formik.values.firstname || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                                type="text"
                                name="lastname"
                                value={formik.values.lastname || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                                type="email"
                                name="email"
                                value={formik.values.email || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                                disabled={!isEditable}
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
                                value={formik.values.birthdate || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!isEditable}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            cursor-pointer bg-primaryalt"
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
                                value={formik.values.employer || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                                type="text"
                                name="occupation"
                                value={formik.values.occupation || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                                type="text"
                                name="instagram"
                                value={formik.values.instagram || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
                                className="md:py-3 ss:py-2 py-2 px-4 border-none 
                                outline-none text-textalt md:rounded-[3px]
                                ss:rounded-[3px] rounded-[3px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                X (Twitter) Handle
                            </label>
                            <input
                                type="text"
                                name="twitter"
                                value={formik.values.twitter || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                                type="text"
                                name="facebook"
                                value={formik.values.facebook || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly={!isEditable}
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
                                readOnly={!isEditable}
                                rows="4"
                                name="turnons"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.turnons || ''}
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
                                readOnly={!isEditable}
                                rows="4"
                                name="trait"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.trait || ''}
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
                                readOnly={!isEditable}
                                rows="4"
                                name="contribution"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.contribution || ''}
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
                            name="mode"
                            value={formik.values.mode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!isEditable}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px] cursor-pointer 
                            bg-primaryalt"
                            >
                                <option value="" disabled hidden>Select an option</option>
                                <option>Social Media</option>
                                <option>From a friend</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="col-span-2 md:mt-8 ss:mt-8 mt-5
                        flex md:gap-8 ss:gap-5 gap-4 buttonfull">
                            {!isEditable ? (
                                <button
                                    onClick={handleEdit}
                                    className="bg-secondary grow2 w-fit 
                                    shadow-md md:text-[17px] 
                                    ss:text-[14px] text-[12px] md:py-4 
                                    ss:py-4 py-3 md:px-20 ss:px-16 px-10 
                                    text-secondary md:rounded-[6px] 
                                    ss:rounded-[3px] rounded-[3px] 
                                    border-[1px] border-secondary 
                                    cursor-pointer bg-transparent
                                    buttonhalf"
                                >
                                    Edit Details
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="bg-secondary grow2 w-fit 
                                    shadow-md md:text-[17px] 
                                    ss:text-[14px] text-[12px] md:py-4 
                                    ss:py-4 py-3 md:px-20 ss:px-16 px-10 
                                    text-secondary md:rounded-[6px] 
                                    ss:rounded-[3px] rounded-[3px] 
                                    border-[1px] border-secondary 
                                    cursor-pointer bg-transparent 
                                    buttonhalf"
                                >
                                    Save Changes
                                </button>
                            )}

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
            </div>
        </div>
    </section>
  );
};

export default SectionWrapper(ConfirmMembership, '');