import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Select from 'react-select';
import PhoneInput from "react-phone-input-2";
import '../assets/CSS/phoneinput.css';
import "react-phone-input-2/lib/style.css";

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

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    skills: Yup.array().of(Yup.string()).min(1, 'At least one skill is required'),
    portfolioUrl: Yup.string().required('Portfoliourl required'),
    githubUrl: Yup.string().required('GithubUrl required'),
    phone: Yup.string().required('Phone number is required'),
});

const DeveloperForm = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 text-white rounded-xl">
            <div className="bg-black shadow-lg rounded-lg p-8 w-full max-w-3xl">
                <h1 className="text-center font-bold text-3xl">Developer Details</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        skills: [],
                        portfolioUrl: '',
                        githubUrl: '',
                        phone: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ setFieldValue, values }) => (
                        <Form className='flex flex-col mb-4'>

                            <label className="block font-semibold text-white mb-2">Full Name</label>
                            <Field type="text" name="name" placeholder="Full name" className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300 bg-transparent" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                            <label className="block font-semibold text-white mb-2">Email Address</label>
                            <Field type="email" name="email" placeholder="Email Address" className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300 bg-transparent" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                            <label className="block font-semibold text-white mb-2">Skills</label>
                            <Select
                                className=""
                                name="skills"
                                options={skillsOptions}
                                isMulti
                                onChange={(selectedOptions) => {
                                    const skills = selectedOptions.map(option => option.value);
                                    setFieldValue('skills', skills);
                                }}
                                value={values.skills.map(skill => skillsOptions.find(option => option.value === skill))}
                                styles={{
                                    control: (styles) => ({
                                        ...styles,
                                        backgroundColor: 'transparent',
                                        padding: 3,
                                    }),
                                    option: (styles) => ({
                                        ...styles,
                                        backgroundColor: 'white',
                                        color: 'black',
                                        '&:hover': {
                                            backgroundColor: 'grey', // slight grey on hover 
                                        },
                                    }),
                                    multiValue: (styles) => ({
                                        ...styles,
                                        backgroundColor: 'white'
                                    }),
                                    multiValueLabel: (styles) => ({
                                        ...styles,
                                        color: 'black'
                                    }),
                                    input: (styles) => ({
                                        ...styles,
                                        color: 'white' // enter skills on white color 
                                    }),
                                }}

                            />
                            <ErrorMessage name="skills" component="div" className="text-red-500 text-sm" />

                            <label className="block font-semibold text-white mb-2">PortfolioUrl</label>
                            <Field type="text" name="portfolioUrl" placeholder="PortfolioUrl" className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300 bg-transparent" />
                            <ErrorMessage name="portfolioUrl" component="div" className="text-red-500 text-sm" />

                            <label className="block font-semibold text-white mb-2">GithubUrl</label>
                            <Field type="text" name="githubUrl" placeholder="GithubUrl" className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300 bg-transparent" />
                            <ErrorMessage name="githubUrl" component="div" className="text-red-500 text-sm" />
                            <label className="block font-semibold text-white mb-2">Phone Number</label>
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
                                            disableCountryCode
                                        />
                                    </div>


                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />


                            <button type="submit" className="w-full bg-blue-500 text-white py-3 mt-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition duration-200">SUBMIT</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    );
};

export default DeveloperForm;
