import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const PlatformGuide = () => {
  return (
  <div>
      <div className='w-screen h-[5vw]' > <Nav /> </div>

    {/* <div className='bg-[#196eaf] py-3  flex items-center  max-md:gap-[20vw]  justify-start gap-[35vw] px-[4vw]'>
   
    <NavLink to={"/"}>
      <i className="ri-arrow-left-s-line text-white text-3xl font-[500]"></i>
    </NavLink>
    <h2 className="text-white text-2xl ml-20 font-bold  text-center">Help</h2>
  </div> */}
    <div className="min-h-screen  px-[4vw] py-10">
      <div className="max-w-screen mx-auto bg-white   ">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-500">Platform Guide</h1>
        
        {/* Section 1: Registration and Login */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Registration and Login</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700">New Users:</h3>
            <ul className="list-disc list-inside pl-4 text-gray-600">
              <li>Click on the "Sign Up" button on the homepage.</li>
              <li>Enter your email address, create a password, and provide other required information.</li>
              <li>Verify your email address by clicking on the verification link sent to your inbox.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Existing Users:</h3>
            <ul className="list-disc list-inside pl-4 text-gray-600">
              <li>Click on the "Login" button on the homepage.</li>
              <li>Enter your email address and password.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: User Roles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. User Roles</h2>
          <p className="text-gray-600">Our platform offers two primary user roles:</p>
          <ul className="list-disc list-inside pl-4 text-gray-600">
            <li><strong>Client:</strong> If you're looking to hire freelancers for projects.</li>
            <li><strong>Freelancer:</strong> If you're looking to find freelance work.</li>
          </ul>
        </section>

        {/* Section 3: Client Workflow */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Client Workflow</h2>

          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700">a. Posting a Project:</h3>
            <ol className="list-decimal list-inside pl-4 text-gray-600">
              <li>Log in to your client account.</li>
              <li>Click on the "Post Project" button.</li>
              <li>Fill in the project details, including:
                <ul className="list-disc list-inside pl-6">
                  <li>Project title</li>
                  <li>Description</li>
                  <li>Budget</li>
                  <li>Deadline</li>
                  <li>Skills required</li>
                </ul>
              </li>
              <li>Review the project details and click on "Post Project."</li>
            </ol>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700">b. Finding Freelancers:</h3>
            <ol className="list-decimal list-inside pl-4 text-gray-600">
              <li>Log in to your client account.</li>
              <li>Click on the "Find Freelancer" button.</li>
              <li>Use the filters to narrow down your search based on skills, location, and ratings.</li>
              <li>View freelancer profiles and portfolios.</li>
              <li>Send proposals to freelancers you're interested in.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700">c. Project Management:</h3>
            <ol className="list-decimal list-inside pl-4 text-gray-600">
              <li>Once a freelancer is selected, you can communicate with them through the platform's messaging system.</li>
              <li>Use the virtual workspace to track progress, share files, and conduct video calls.</li>
              <li>Review and approve the freelancer's work.</li>
              <li>Release the payment upon project completion.</li>
            </ol>
          </div>
        </section>

        {/* Section 4: Freelancer Workflow */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Freelancer Workflow</h2>

          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-700">a. Finding Projects:</h3>
            <ol className="list-decimal list-inside pl-4 text-gray-600">
              <li>Log in to your freelancer account.</li>
              <li>Click on the "Find Projects" button.</li>
              <li>Use the filters to find projects that match your skills and interests.</li>
              <li>Apply for projects by submitting proposals.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700">b. Project Work:</h3>
            <ol className="list-decimal list-inside pl-4 text-gray-600">
              <li>Once selected for a project, communicate with the client through the platform's messaging system.</li>
              <li>Use the virtual workspace to track progress, share files, and conduct video calls.</li>
              <li>Submit project milestones and deliverables for client approval.</li>
              <li>Receive payment upon completion of the project.</li>
            </ol>
          </div>
        </section>

        {/* Section 5: Payment and Escrow */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payment and Escrow</h2>
          <p className="text-gray-600">All payments are securely processed through our platform's escrow system:</p>
          <ul className="list-disc list-inside pl-4 text-gray-600">
            <li>Clients can make deposits to their account balance.</li>
            <li>Freelancers receive payment upon project completion and client approval.</li>
          </ul>
        </section>

        {/* Other Sections */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Additional Features</h2>
          <ul className="list-disc list-inside pl-4 text-gray-600">
            <li>Community Forum</li>
            <li>Gamification</li>
            <li>Educational Resources</li>
            <li>Multilingual Support</li>
            <li>Interactive Portfolio</li>
            <li>Blockchain Technology</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
  );
};

export default PlatformGuide;
