import React from 'react';

const Resume = () => {
  return (
   <div>
    <div className="max-w-4xl mx-auto p-6 font-sans bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Project: Rental Agreement Generator with Payment Integration</h1>

      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Technologies Used:</h3>
        <p><strong className="font-medium">Frontend:</strong> React, React PDF Renderer, Razorpay API</p>
        <p><strong className="font-medium">Libraries:</strong> @react-pdf/renderer, React Ref, Razorpay SDK</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Project Overview:</h2>
        <p className="text-gray-700">
          Developed a React-based rental agreement generator with an integrated payment solution using Razorpay. The system allows landlords and tenants to digitally generate and download rental agreements upon successful payment.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Key Features:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong className="font-medium">Rental Agreement Generation:</strong> Utilized the @react-pdf/renderer library to generate a PDF document containing all the terms of a rental agreement with dynamic data insertion.</li>
          <li><strong className="font-medium">Payment Integration (Razorpay):</strong> Integrated Razorpay’s payment gateway to handle rental payments for generating the agreement.</li>
          <li><strong className="font-medium">Interactive UI Components:</strong> Developed an intuitive UI for landlords and tenants to input necessary details and handle the payment process.</li>
          <li><strong className="font-medium">Document Styling:</strong> Applied custom styles using @react-pdf/renderer for a well-structured and easy-to-read rental agreement.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Responsibilities:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong className="font-medium">Frontend Development:</strong> Created and styled React components for document generation and payment processing.</li>
          <li><strong className="font-medium">Payment Flow Implementation:</strong> Integrated Razorpay API to handle online payments and trigger PDF download upon successful payment.</li>
          <li><strong className="font-medium">Document Generation:</strong> Implemented logic to dynamically fill rental agreement details into a formatted PDF document.</li>
          <li><strong className="font-medium">UI/UX:</strong> Ensured the user interface is clean, intuitive, and responsive for a smooth user experience.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Challenges Overcome:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong className="font-medium">Dynamic Data Binding in PDFs:</strong> Successfully integrated dynamic data input into a static PDF layout.</li>
          <li><strong className="font-medium">Payment Gateway Integration:</strong> Handled Razorpay payment API and ensured seamless payment processing.</li>
          <li><strong className="font-medium">PDF Download Handling:</strong> Created a smooth process for users to download the generated PDF without interruption.</li>
        </ul>
      </div>
    </div>
    </div>

  );
}

export default Resume;
