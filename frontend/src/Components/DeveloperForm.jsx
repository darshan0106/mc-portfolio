import React from 'react';
import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Select from 'react-select';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../assets/CSS/phoneinput.css"

const skillsOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
];
const DeveloperForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        skills: Yup.array().of(Yup.string()).min(1, 'At least one skill is required'),
        portfolioUrl: Yup.string().required('Portfoliourl required'),
        githubUrl: Yup.string().required('GithubUrl required'),
        phone: Yup.string().required('Phone number is required'),
    });

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-black rounded-md text-white font-poppins">
            <div className=" shadow-xl rounded-lg w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-center md:text-5xl text-4xl font-bold md:mb-5">Developer Details</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        skills: [],
                        portfolioUrl: '',
                        githubUrl: '',
                        phone: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ setFieldValue, values }) => (
                        <Form className="flex flex-col md:mt-5  ">
                            {/* Full Name Field */}
                            <label htmlFor="name" className="block font-semibold text-white text-xl mb-2">Full Name</label>
                            <Field type="text" id="name" name="name" placeholder="Full name" className="md:h-14 h-10 w-full border border-gray-300 bg-transparent p-4 text-white rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                            {/* Email Field */}
                            <label htmlFor="email" className="block font-semibold text-white  text-xl mb-2">Email Address</label>
                            <Field type="email" id="email" name="email" placeholder="Email Address" className="md:h-14 h-10 w-full border border-gray-300 p-4 bg-transparent  text-white rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                            {/* Skills Field */}
                            <label htmlFor="skills" className="block font-semibold text-white  text-xl mb-2">Skills</label>
                            <Select
                                  className='md:h-14 h-10'
                                id="skills"
                                name="skills"
                                options={skillsOptions}
                                isMulti
                                onChange={(selectedOptions) => {
                                    const skills = selectedOptions.map(option => option.value);
                                    setFieldValue('skills', skills);
                                }}
                                value={values.skills.map(skill => skillsOptions.find(option => option.value === skill))}
                                styles={{
                                    control: (styles) => ({ ...styles, backgroundColor: 'transparent', height: '3.5rem', // h-14
                                        
                                     }),
                                    option: (styles) => ({
                                        ...styles,
                                        backgroundColor: 'white',
                                        color: 'black',
                                        '&:hover': {
                                            backgroundColor: 'grey', // slight grey on hover
                                        },
                                    }),
                                    multiValue: (styles) => ({ ...styles, backgroundColor: 'white' }),
                                    multiValueLabel: (styles) => ({ ...styles, color: 'black' }),
                                    input: (styles) => ({ ...styles, color: 'white' }), // enter skills on white color
                                }}

                                placeholder="Select Skills"
                            />



                            <ErrorMessage name="skills" component="div" className="text-red-500 text-sm" />

                            {/* PortfolioUrl Field */}
                            <label htmlFor="portfolioUrl" className="block font-semibold text-white mt-5 md:mt-2  text-xl  md:mb-2 ">PortfolioUrl</label>
                            <Field type="text" id="portfolioUrl" name="portfolioUrl" placeholder="PortfolioUrl" className="md:h-14 h-10 w-full border bg-transparent border-gray-300 p-4 text-white rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="portfolioUrl" component="div" className="text-red-500 text-sm" />

                            {/* GithubUrl Field */}
                            <label htmlFor="githubUrl" className="block font-semibold text-white  text-xl mb-2">GithubUrl</label>
                            <Field type="text" id="githubUrl" name="githubUrl" placeholder="GithubUrl" className="md:h-14 h-10 w-full border border-gray-300 bg-transparent p-4 text-white rounded-lg font-poppins block mb-4" />
                            <ErrorMessage name="githubUrl" component="div" className="text-red-500 text-sm" />
                            {/* Phone Number Field */}


                            <label
                                htmlFor="phone"
                                className=" font-semibold text-white text-xl font-poppins md:mt-1 mb-3"
                            >
                                Phone Number
                            </label>
                            <div className="phone-input-container">
                                <PhoneInput
                                    country="us"
                                    value={values.phone}
                                    onChange={(phone) => setFieldValue("phone", phone)}
                                    inputProps={{
                                        name: "phone",
                                        id: "phone",
                                        placeholder: "Enter your phone number",
                                    }}
                                    inputClass="form-control"
                                />
                            </div>
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

                            {/* Submit Button */}
                            <button type="submit" className="h-9 w-full md:h-16 bg-[#453FF3] text-white text-2xl font-poppins font-semibold rounded-[20px] mt-6 mb-4">SUBMIT</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    );
};

export default DeveloperForm