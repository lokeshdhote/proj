import Footer from '/components/Footer/Footer'
import Nav from '/components/Nav/Nav'
import React from 'react'

const About = () => {
  return (
    <>
    <Nav/>
    <div className='h-screen w-full   max-md:h-fit flex max-md:flex-col max-md:justify-start max-md:items-start items-center justify-center px-10 gap-10 py-16'>
 <div className='flex flex-col gap-5 max-md:mt-8 '>
    <h1 className='text-4xl max-md:text-sm font-semibold' style={{color:"#196eaf"}}>About us</h1>

    <p className='items-start text-xl w-[30vw] max-md:w-full max-md:text-sm'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat eum veniam at unde quam est, a voluptatem quos quaerat.</p>

<button className='bg-[#196eaf] max-md:w-[20vw] w-[9vw] text-white px-2 py-3 text-lg max-md:text-xs rounded-xl'>Discover</button>

 </div>
 <div className='w-[36vw] max-md:w-[70vw] max-md:ml-5'>
    <img src="https://edushalaacademy.com/images/team.gif" alt="" />
 </div>

    </div>
<Footer/>
    </>
  )
}

export default About