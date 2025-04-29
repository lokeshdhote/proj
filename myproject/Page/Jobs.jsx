import Nav from '/components/Nav/Nav'
import React from 'react'

const Jobs = () => {
  return (
    <>
     <Nav/>
    <div className='h-[90vh]  flex max-md:flex-col  items-center justify-center gap-28  max-md:gap-2   w-full bg-white py-3 max-md:py-1   mt-2'>
    <div className='h-full  items-center justify-center   py-14  max-md:py-1'>
       <img className='h-full w-full max-md:h-[20vh]  max-md:mt-20 object-contain' src="/ajob.gif" alt="" />
    </div>
    <div  className='h-full   flex items-center justify-center   '>
    
      <div className='h-96 w-96 bg-white rounded-lg  shadow-2xl' style={{borderTop:"3px solid lightblue"}}>
      <div className=" w-full flex flex-col justify-center gap-1 h-10 mt-4 pl-3 ">
 <label className="label">
   <span className="label-text text-xl max-md:text-xs">Mobile Number/ Email ID</span>
  
 </label>
 <input type="text" placeholder="" className="input input-bordered border-2 w-full max-w-xs" />

</div>

<div className=" w-full flex flex-col justify-center gap-1 h-10 mt-7 pl-3 ">
 <label className="label">
   <span className="label-text text-xl max-md:text-xs">Password</span>
  
 </label>
 <input type="text" placeholder="" className="input input-bordered border-2 w-full max-w-xs" />

</div>

<h1 className='ml-6 mt-5 text-cyan-200 max-md:text-xs text-lg'>Forgot Password?</h1>

<div className="form-control  pt-3 flex items-start px-4 ">
 <label className="label cursor-pointer">
 <input type="checkbox" checked="checked" className="checkbox" />
   <span className="label-text text-base max-md:text-sm pl-2 font-light">Login with OTP instead of password</span> 
 </label>
</div>

<button class="bg-[#196eaf]  ml-6 mt-6  text-white font-bold py-2 px-[10vw] rounded-md">
 Login
</button>



      </div>
    </div>
   </div>
    </>
  )
}

export default Jobs