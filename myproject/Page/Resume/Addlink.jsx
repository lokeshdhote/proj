import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Asyncaddlink } from "../../src/Store/Actions/ResumeAction";


export default function Addlink(props) {
  const disptach = useDispatch()

  const [Blog, setBlog] = useState("");
  const [GitHub, setGitHub ] = useState("");
  const [Portfolio, setPortfolio] = useState("");





  const handleSubmit = async (e) => {
    e.preventDefault();
    disptach(Asyncaddlink({Blog,GitHub,Portfolio}))

  };

  
  return (
    <>
      <>
      <div className=" z-[9] flex items-center  h-[110vh]  justify-center fixed  top-0 pt-8 w-full bg-black/30 ">
          <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[40vw]  h-[90vh] py-[5%] pt-0 overflow-y-scroll ">
                <div className="min-h-[60vh]  mt-8 pb-5 pt-2 px-10 rounded-md w-[100%]  bg-white ">
                    <RiCloseLine
                    size={30}
                    onClick={props.onClose}
                    className="ml-[65vh]  cursor-pointer  "
                    color="#1c1c1c9d" // set custom `width` and `height`
                    />
                    <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
                    <h1>Work samples</h1>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <h1 className=" mt-16 text-base font-semibold mb-2 text-[#272727c1]">
                        Blog link
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={(e)=>setBlog(e.target.value)}
                        name="blog"
                        value={Blog}
                        placeholder="eg. https://example.com"
                        id=""
                        />
                    </div>
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                        GitHub profile
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        value={GitHub}
                        onChange={(e)=>setGitHub(e.target.value)}
                        name="GitHub"
                        placeholder="eg. https://example.com"
                        id=""
                        />
                    </div>
                   
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                        Play store developer A/c (Portfolio link)
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={(e)=>setPortfolio(e.target.value)}
                        name="Portfolio"
                        value={Portfolio}
                        placeholder="eg. https://example.com/organization"
                        id=""
                        />
                    </div>
                    
                    
                   
                   
                    <button
                      onClick={props.onClose}
                        type="submit"
                        className="px-[4vh] py-[1vh]  text-base  mt-8 font-semibold rounded-md text-white bg-[#008BDC] "
                    >A
                        Update
                    </button>
                    </form>
                </div>
          </div>
        </div>
      </>
    </>
  );
}
