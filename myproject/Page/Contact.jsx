import Nav from "/components/Nav/Nav";
import React from "react";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-screen max-md:h-fit  items-center max-md:items-start justify-center max-md:justify-start flex max-md:flex-col max-md:px-5 max-md:py-20">
        <div
          className="h-[70vh] w-[70vw] max-md:w-[90vw] max-md:h-full rounded-3xl shadow-xl overflow-hidden relative flex max-md:flex-col max-md:items-start max-md:justify-start items-center max-md:gap-5 justify-center"
          style={{ borderTop: "3px solid lightblue" }}
        >
          <div className="w-1/2 max-md:w-full  h-full flex flex-col px-10 py-10 max-md:py-5 gap-4 max-md:px-3 ">
            <h1 className="text-2xl max-md:text-lg text-[#196eaf]">
              Support Team
            </h1>
            <p className="text-lg max-md:text-base max-md:w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              sunt ipsam, at consectetur error nobis eaque! Nam nisi maiores
              doloribus..
            </p>

            <h2>Gigotasker@freelancing.com</h2>
            <h2>+91 9109395170</h2>
          </div>
          <div className="w-1/2 bg-[#196eaf] max-md:w-full h-full flex flex-col px-10 max-md:py-5 py-10 gap-4">
            <h1 className="text-white text-2xl">Application Form</h1>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
                style={{ height: "20px", width: "20px" }}
              >
                <path
                 
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
                style={{ height: "20px", width: "20px" }}

              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <img
                className="h-[20px] w-[20px]"
                style={{ height: "20px", width: "20px" }}
                src="/phone.svg"
                alt=""
              />

              <input
                type="number"
                className="grow"
                placeholder="Phone Number"
              />

              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
            </label>

            <button className="bg-white w-[9vw] max-md:w-[40vw] font-medium text-[#196eaf] px-2 py-2 rounded-xl"style={{color:"#196eaf"}}>
              Send Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
