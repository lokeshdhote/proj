import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const Terms = () => {
  return (
<>
<Nav/>
<div className="w-full h-fit">
  {/* Header Section */}
  <div
    className="w-full h-[40vh] max-md:h-fit justify-center items-center max-md:items-start max-md:px-5 px-28 max-md:py-12 pt-5 relative flex flex-col gap-4"
    style={{ backgroundColor: "#293246" }}
  >
    <h1 className="text-4xl max-md:text-sm max-md:text-center max-md:ml-20 font-semibold text-white text-center">
      Work Your Way With Agreements
    </h1>
    <p className="text-white max-md:text-xs max-md:text-center max-md:w-full">
      We offer flexibility with our Agreements so that you can define exactly
      how you want to work online.
    </p>
  </div>

  {/* Payment Terms Section */}
  <div className="h-fit w-full max-md:h-fit py-10">
    <h1 className="text-4xl max-md:text-base flex justify-center py-5 max-md:py-6 text-center font-semibold text-[#000]">
      Payment Terms
    </h1>

    {/* Payment Options */}
    <div className="h-fit max-md:h-[40vh] px-12 max-md:px-4 w-full flex max-md:flex-col items-start gap-8">
      {/* Fixed Price */}
      <div className="flex bg-slate-100 justify-center items-start py-8 max-md:py-6 gap-5 px-8 max-md:px-4  h-[33vh] rounded-xl w-full ">
        <img className="h-10 max-md:h-5" src="/fixed.png" alt="Fixed Price" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl max-md:text-sm font-medium">Fixed Price</h1>
          <p className="text-lg max-md:text-xs">
            Create milestones for your job. Set due dates and amount to be paid
            for each milestone.
          </p>
        </div>
      </div>

      {/* Hourly */}
      <div className="flex bg-slate-100 justify-center items-start py-8 max-md:py-6 gap-5 px-8 max-md:px-4 h-[33vh] rounded-xl w-full ">
        <img className="h-10 max-md:h-5" src="/hour.png" alt="Hourly" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl max-md:text-sm font-medium">Hourly</h1>
          <p className="text-lg max-md:text-xs">
            Define the hourly rate and maximum weekly hours. Use the Time
            Tracker tool to accurately record billable hours.
          </p>
        </div>
      </div>
    </div>

    {/* Task-Based and Recurring Payments */}
    <div className="h-fit max-md:h-[40vh] px-12 max-md:px-4 w-full flex max-md:flex-col items-start gap-8 mt-4">
      {/* Task-Based */}
      <div className="flex bg-slate-100 justify-center items-start py-8 max-md:py-6 gap-5 px-8 max-md:px-4 h-[33vh] rounded-xl w-full ">
        <img className="h-10 max-md:h-5" src="/list.png" alt="Task-Based" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl max-md:text-sm font-medium">Task-Based</h1>
          <p className="text-lg max-md:text-xs">
            Create and assign tasks as required for freelance work. Payments can
            be made once the task is complete.
          </p>
        </div>
      </div>

      {/* Recurring Payments */}
      <div className="flex  bg-slate-100 justify-center items-start py-8 max-md:py-6 gap-5 px-8 max-md:px-4 h-[33vh] rounded-xl w-full ">
        <img
          className="h-10 max-md:h-5"
          src="/calender.png"
          alt="Recurring Payments"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl max-md:text-sm font-medium">
            Recurring Payments
          </h1>
          <p className="text-lg max-md:text-xs">
            Set up retainers with weekly, biweekly, monthly, or quarterly
            payments.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<Footer/>
</>  )
}

export default Terms