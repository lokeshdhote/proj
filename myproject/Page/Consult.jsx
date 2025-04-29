export const Consultdr = [

    {
        img:"/men1.avif",
        name:`John Powell`,
        detail:`Product Manager`,
        ex:`3 years experience`,
        language:`English, French, Spanish`,
        Rs:`Rs. 300/hrs`
         
  
    },
  
    {
        img:"/women.avif",
        name:`Dr Sunny Joy`,
        detail:`General Physician`,
        ex:`2 years experience`,
        language:`English, French, Chinese`,
        Rs:`Rs. 600/hrs`
  
    },
  
  
    {
        img:"/men.avif",
        name:`Tom Wilson`,
        detail:`Marking Manager`,
        ex:`4 years experience`,
        language:`English, Russian, German`,
        Rs:`Rs. 200/hrs`
         
  
    },
  
    {
        img:"/men3.avif",
        name:`Thomas Powell`,
        detail:`Designer`,
        ex:`3 years experience`,
        language:`English, Spanish, French`,
        Rs:`Rs. 330/hrs`
         
  
    },
  ]
  import { Divider, Slider } from '@mui/material'
  import React from 'react'
  import Nav from '../components/Nav/Nav.jsx';

  
  const Consult = () => {
    return (
     <>
     <Nav/>
     <div className='min-h-screen w-full  pt-20 pl-36 flex flex-col gap-3 ' >
     <div className='h-fit w-fit flex gap-60 px-6 bg-white items-center justify-center rounded-xl border-gray-300 border-2'>
     <input type="text" placeholder="Search  Freelancer's name" className="input input-bordered text-xs rounded-xl w-full py-2 px-2" />
     <i  class="ri-search-line"></i>
  
     </div>
     <div className='flex h-fit w-full gap-6 '>
      <div className=' w-[30%] rounded-lg  border-gray-300 border-2 '>
          <div className='h-fit w-[100%] pt-6 pb-5 pl-10 gap-2 flex flex-col'>
              <h1 className='text-base font-semibold'>filter</h1>
              <h2 className='text-base font-semibold'> Avability</h2>
              <div className='h-20 w-full '>
                  <div className='w-full flex gap-5 py-1'>
                      <h1 className='bg-white px-4 rounded-xl text-xs py-1 border-gray-300 border-2'>NOW</h1>
                      <h1 className='bg-white px-6 rounded-xl py-1 text-sm border-gray-300 border-2'>TODAY</h1>
  
                  </div>
                  <div className='w-full  flex  gap-5 py-2'>
                  <h1 className='bg-white px-6 py-1 rounded-xl text-sm border-gray-300 border-2'>TOMORROW</h1>
                      <h1 className='bg-white px-4 py-1 rounded-xl text-sm border-gray-300 border-2'>All</h1>
                  </div>
  
              </div>
              <Divider style={{borderBottomWidth:"2px",marginTop:"12px",marginRight:"17px"}} />
          </div>
          <div className='h-fit w-fit pl-10  gap-2 flex flex-col'>
              <h1 className='text-base font-semibold'>Gender</h1>
              <div className='h-fit w-fit flex items-center justify-center gap-5'> 
              <input type="radio" name='a'  className="radio1"   /> Male
  <input type="radio" name="a" className="radio2" /> Female
  <input type="radio" name="a" className="radio3" /> All
              </div>
  <Divider style={{borderBottomWidth:"2px",}} />
          
          </div>
  
  
          <div className='h-fit w-full flex flex-col gap-2 px-10 py-2 '>
              <h1 className='text-base px-1 font-semibold'>Experience (in Years)</h1>
              <div className="w-full">
              <Slider className='w-full'
    style={{width:"100%"}}
    
    size="small"
    defaultValue={0}
    aria-label="Small"
    valueLabelDisplay="auto"
  />
  <Divider style={{borderBottomWidth:"2px",}} />
  
              </div>
      
          </div>
  
          <div className='h-fit w-full flex flex-col gap-2 px-10 py-2 '>
              <h1 className='text-base px-1 font-semibold'>Consultation Fee (in Rupees) </h1>
              <div className="w-full">
              <Slider className='w-full'
    style={{width:"100%"}}
    
    size="small"
    defaultValue={0}
    aria-label="Small"
    valueLabelDisplay="auto"
  />
  <Divider style={{borderBottomWidth:"2px",}} />
  
              </div>
      
          </div>
  
      </div>
      <div className=' pb-10 flex flex-col gap-5 w-[45%]  '>
  
        {Consultdr?.map((dets,index)=>(
      <div key={index}  className='h-[40%] w-full rounded-lg  flex border-gray-300 border-2 '>
      <div className='h-fit py-5 px-5 w-fit '>
       <img className='h-48 shrink-0' src={dets?.img} alt="" />
      </div>
  
      <div className='h-56 w-fit py-4 '>
      <h1 className='text-sm font-semibold'>{dets.name}</h1>
      <h2 className='text-xs' >{dets.details}</h2>
      <h2 className=' px-2 mt-4 py-1 bg-blue-200 w-fit text-xs rounded-xl'>{dets.ex}</h2>
      <div className='h-fit w-fit flex gap-5 py-2 '>
       <h1 className='text-xs font-semibold'>{dets.language}</h1>
      <h2 className=' px-5 mt-4 py-2 bg-blue-400 text-white w-fit  font-semibold text-xs rounded-lg'>Schedule Consult</h2>
        
      </div>
      <Divider style={{borderBottomWidth:"2px",marginTop:"8px"}} />
  
  
      <div className='h-fit w-fit flex gap-24 items-center justify-center py-2 '>
       <h1 className='text-xs font-semibold'>{dets.Rs}</h1>
      <h2 className=' px-10 mt-4 py-2  text-white w-fit  font-semibold text-xs rounded-lg' style={{backgroundColor:"rgb(51 164 32)"}}> Consult Now</h2>
      
        
      </div>
      </div>
       </div>
        ))}
      
      </div>
       
   
     </div>
     <button class="ml-96 rounded-xl mb-16 w-fit  px-52 py-2 text-white font-medium  " style={{backgroundColor:"#196eaf"}}>
    See More
  </button>
  
     </div>
  
     </>
    )
  }
  
  export default Consult