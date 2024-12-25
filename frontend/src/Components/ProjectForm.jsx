import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProjectForm = () => {
  // formik configuration
  const formik = useFormik({
    initialValues: {
      projectTitle: "",
      projectDescription: "",
      technologiesStack: "",
      budget: "",
      timeline: "",
      clientName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      projectTitle: Yup.string().required("Project title is required"),
      projectDescription: Yup.string().required(
        "Project description is required"
      ),
      technologiesStack: Yup.string().required(
        "Technologies stack is required"
      ),
      budget: Yup.number()
        .required("Budget is required")
        .positive("Budget must be a positive number"),
      timeline: Yup.string().required("Timeline is required"),
      clientName: Yup.string().required("Client name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Project Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter project title"
              {...formik.getFieldProps("projectTitle")}
            />
            {formik.touched.projectTitle && formik.errors.projectTitle && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.projectTitle}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter project description"
              {...formik.getFieldProps("projectDescription")}
            />
            {formik.touched.projectDescription &&
              formik.errors.projectDescription && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.projectDescription}
                </div>
              )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies Stack
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter technologies stack"
              {...formik.getFieldProps("technologiesStack")}
            />
            {formik.touched.technologiesStack &&
              formik.errors.technologiesStack && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.technologiesStack}
                </div>
              )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter budget"
              {...formik.getFieldProps("budget")}
            />
            {formik.touched.budget && formik.errors.budget && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.budget}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timeline
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter timeline"
              {...formik.getFieldProps("timeline")}
            />
            {formik.touched.timeline && formik.errors.timeline && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.timeline}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter client name"
              {...formik.getFieldProps("clientName")}
            />
            {formik.touched.clientName && formik.errors.clientName && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.clientName}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter phone number"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.phoneNumber}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
