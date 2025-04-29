import React, { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { AyscnFreelancerproposal } from "../../src/Store/Actions/ClientAction";

const ProposalAccept = () => {
  const dispatch = useDispatch()
  const location = useLocation();
    const id = location.state?.project._id;
    const {proposals}=useSelector(state=>state.Client?.proposals)
console.log(proposals);


useEffect(()=>{

dispatch( AyscnFreelancerproposal(id))

},[dispatch])
  
  // const proposals = [
  //   {
  //     id: "001",
  //     title: "Proposal for New Website",
  //     status: "Pending",
  //   },
  //   {
  //     id: "002",
  //     title: "Mobile App Proposal",
  //     status: "Pending",
  //   },
  //   // Add more proposals as needed
  // ];

  return (
    <div className="h-screen flex flex-col  text-black">
         <div className='w-screen h-[5vw]' > <Nav /> </div>

         <div className="w-full mt-2 overflow-x-auto bg-white/20 rounded-lg shadow-md">
  <table className="w-full text-left text-white border-collapse">
    <thead className="bg-black/50">
      <tr>
        <th className="p-4 border-b-2 border-white">S.No.</th>
        {/* <th className="p-4 border-b-2 border-white">Proposal ID</th> */}
        <th className="p-4 border-b-2 border-white">Proposal Title</th>
        {/* <th className="p-4 border-b-2 border-white">Status</th> */}
        <th className="p-4 border-b-2 border-white">Actions</th>
      </tr>
    </thead>
    <tbody>
      {proposals?.map((proposal, index) => (
        <tr
          key={index}
          className="text-black hover:bg-white/10 border-b border-white/20"
        >
          <td className="p-4 border-b border-white">{index + 1}</td>
          {/* <td className="p-4 border-b border-white">{proposal.proposalId}</td> */}
          <td className="p-4 border-b border-white">{proposal.title}</td>
          {/* <td
            className={`p-4 font-bold border-b  border-white ${
              proposal.status === "Pending"
                ? "text-yellow-700"
                : "text-teal-700"
            }`}
          >
            {proposal.status}
          </td> */}
          <td className="p-4 border-b border-white">
            <div className="flex gap-2">
              <NavLink
                to="/agreement"
                key={proposal?._id}
                state={{ proposal }}
              >
                <button
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                >
                  Approve
                </button>
              </NavLink>
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
              >
                Reject
              </button>
              <NavLink
                key={proposal?._id}
                state={{ proposal }}
                to="/proposaldetails"
              >
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                >
                  View
                </button>
              </NavLink>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  </div>
  );
};

export default ProposalAccept;




// {import React from "react";
//   import proposals from "../data/data";
  
//   const ProposalTable = () => {
//     const handleAction = (action, proposalId) => {
//       alert(`${action} clicked for Proposal ID: ${proposalId}`);
//     };
  
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-300 to-[#1a2d42] text-white">
//         <h1 className="mb-12 text-4xl uppercase tracking-widest">Pending Proposals</h1>
//         <div className="w-full overflow-x-auto bg-white/20 rounded-lg shadow-md">
//           <table className="w-full text-left text-white border-collapse">
//             <thead className="bg-black/50">
//               <tr>
//                 <th className="p-4">S.No.</th>
//                 <th className="p-4">Proposal ID</th>
//                 <th className="p-4">Proposal Title</th>
//                 <th className="p-4">Status</th>
//                 <th className="p-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {proposals.map((proposal, index) => (
//                 <tr
//                   key={proposal.id}
//                   className="hover:bg-white/10 border-b border-white/20"
//                 >
//                   <td className="p-4">{index + 1}</td>
//                   <td className="p-4">{proposal.proposalId}</td>
//                   <td className="p-4">{proposal.title}</td>
//                   <td
//                     className={`p-4 font-bold ${
//                       proposal.status === "Pending"
//                         ? "text-yellow-500"
//                         : "text-teal-400"
//                     }`}
//                   >
//                     {proposal.status}
//                   </td>
//                   <td className="p-4">
//                     <div className="flex gap-2">
//                       <button
//                         className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
//                         onClick={() => handleAction("Approve", proposal.proposalId)}
//                       >
//                         Approve
//                       </button>
//                       <button
//                         className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
//                         onClick={() => handleAction("Reject", proposal.proposalId)}
//                       >
//                         Reject
//                       </button>
//                       <button
//                         className="px-4 py-2 bg-[#1a2d42] hover:bg-blue-700 text-white rounded-md transition"
//                         onClick={() => handleAction("View", proposal.proposalId)}
//                       >
//                         View
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//  };
  

// //   }




// {

// <div className="bg-white min-h-screen">
// {/* Header */}
// {/* <header className="bg-blue-600 text-white p-4 text-center">
//   <h1 className="text-2xl font-bold">Welcome to the Proposals App!</h1>
//   <p className="mt-2">
//     Navigate to{" "}
//     <a href="/proposals" className="underline">
//       View Proposals
//     </a>
//   </p>
// </header> */}
// <div className="w-screen h-[6vw] ">
//   <Nav/>
// </div>

// {/* Content */}
// <div className="container mx-auto p-6">
//   <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//     Pending Proposals
//   </h2>

//   {/* Proposal Table */}
//   <div className="overflow-x-auto">
//     <table className="min-w-full bg-white shadow-md rounded-lg">
//       <thead>
//         <tr className="bg-blue-500 text-white">
//           <th className="py-2 px-4 text-left">Proposal ID</th>
//           <th className="py-2 px-4 text-left">Proposal Title</th>
//           <th className="py-2 px-4 text-left">Status</th>
//           <th className="py-2 px-4 text-left">Actions</th>
//         </tr>
//       </thead>
//       <tbody>

//         {proposals?.map((proposal,index) => (
        
//           <tr key={index} className="border-t">
//             <td className="py-2 px-4">{index+1}</td>
//             <td className="py-2 px-4">{proposal?.title}</td>
//             <td className="py-2 px-4 text-yellow-600">{proposal?.proposal}</td>
//             <td className="py-2 px-4">
//               <NavLink
//               to="/agreement"
//                key={proposal?._id}
//                state={{proposal}}>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//                 Approve
//               </button>
//               </NavLink>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">
//                 Reject
//               </button>
//               <NavLink
//               key={proposal?._id}
//               state={{proposal}}
//               to="/proposaldetails">
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">

//                 View
//               </button>
//               </NavLink>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
// </div>
// }