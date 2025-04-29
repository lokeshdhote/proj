import { useDispatch } from 'react-redux';
import { AysncClientLogin } from '../src/Store/Actions/ClientAction';
import { AysncUserLogin } from '../src/Store/Actions/userAction';
import Nav from '/components/Nav/Nav';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { freelancerLogin, userLogin } from '../src/Store/Actions/AuthAction';

const Login = () => {
  const location = useLocation();
  const roles = location.state?.role;
  console.log(roles);
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(roles === "Client" );
  console.log(isClient);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleToggleUserType = (userType) => {
    setIsClient(userType === 'Client');
    // Clear the form inputs when switching
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.error('Email and Password are required');
      return;
    }

    if (isClient ||roles ==="Client") {
      dispatch(userLogin({ email, password }))
    
        console.log('Client login successful')
       
        
    } else {
      dispatch(freelancerLogin({ email, password }))
    
        console.log('Freelancer login successful')
      
       
    }
    navigate("/")
    setEmail("")
    setPassword("")
  };

  
  return (
    <>
      <Nav />
      <div className="h-[90vh]  flex max-md:flex-col items-center justify-center gap-28 max-md:gap-2 w-full bg-white py-3 max-md:py-1 mt-2">
        {/* Image Section */}
        <div className="h-full items-center justify-center py-14 max-md:py-1">
          <img
            className="h-full w-full max-md:h-[30vh] max-md:mt-20 object-contain"
            src="/login.jpg"
            alt="Login illustration"
          />
        </div>

        {/* Form Section */}
        <div className="h-full  flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="h-[100] w-96 max-md:px-10 bg-white rounded-lg shadow-2xl p-6"
            style={{ borderTop: '3px solid lightblue' }}
          >
            <div className="flex justify-center mb-4">
              <button
                type="button"
                className={`${
                  isClient ? 'bg-[#196eaf] text-white' : 'bg-blue-200 text-blue-800'
                }  font-bold py-2 px-4 rounded-l transition duration-200`}
                onClick={() => handleToggleUserType('Client')}
              >
                Client
              </button>
              <button
                type="button"
                className={`${
                  !isClient ? 'bg-[#196eaf] text-white' : 'bg-blue-200 text-blue-600'
                }  font-bold py-2 px-4 rounded-r transition duration-200`}
                onClick={() => handleToggleUserType('Freelancer')}
              >
                Freelancer
              </button>
            </div>

            {/* Form Content */}
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col">
                <label className="text-lg font-semibold">Email ID</label>
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered border-2 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <div className="w-full flex flex-col">
                <label className="text-lg font-semibold">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered border-2 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <h1 className="ml-1 mt-2 text-cyan-600 cursor-pointer text-sm hover:underline">
                Forgot Password?
              </h1>

              <button
                type="submit"
                className="bg-[#196eaf] text-white font-bold py-2 rounded-md hover:bg-[#155d8a] transition duration-200"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-500 mt-4">
                {isClient
                  ? 'Not a client? Register as Freelancer'
                  : 'Not a freelancer? Register as Client'}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

// {import { useDispatch } from 'react-redux';
// import { AysncClientLogin } from '../src/Store/Actions/ClientAction';
// import { AysncUserLogin } from '../src/Store/Actions/userAction';
// import Nav from '/components/Nav/Nav';
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { freelancerLogin, userLogin } from '../src/Store/Actions/AuthAction';

// const Login = () => {
//   const location = useLocation();
//   const roles = location.state?.role;
//   console.log(roles);
//   const dispatch = useDispatch();
//   const [isClient, setIsClient] = useState(roles === "Client" );
//   console.log(isClient);
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleToggleUserType = (userType) => {
//     setIsClient(userType === 'Client');
//     // Clear the form inputs when switching
//     setEmail('');
//     setPassword('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       console.error('Email and Password are required');
//       return;
//     }

//     if (isClient ||roles ==="Client") {
//       dispatch(userLogin({ email, password }))
    
//         console.log('Client login successful')
       
        
//     } else {
//       dispatch(freelancerLogin({ email, password }))
    
//         console.log('Freelancer login successful')
      
       
//     }
//     navigate("/")
//     setEmail("")
//     setPassword("")
//   };
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user info if already authenticated
//     axios.get('http://localhost:3001/profile', { withCredentials: true })
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const handleLogin = () => {
//     // Redirect to Google OAuth login
//     window.location.href = 'http://localhost:3001/auth/google';
//   };

  
//   return (
//     <>
//       <Nav />
//       <div className="h-[90vh]  flex max-md:flex-col items-center justify-center gap-28 max-md:gap-2 w-full bg-white py-3 max-md:py-1 mt-2">
//         {/* Image Section */}
//         <div className="h-full items-center justify-center py-14 max-md:py-1">
//           <img
//             className="h-full w-full max-md:h-[30vh] max-md:mt-20 object-contain"
//             src="/login.jpg"
//             alt="Login illustration"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="h-full  flex items-center justify-center">
//           <form
//             onSubmit={handleSubmit}
//             className="h-[100] w-96 max-md:px-10 bg-white rounded-lg shadow-2xl p-6"
//             style={{ borderTop: '3px solid lightblue' }}
//           >
//             <div className="flex justify-center mb-4">
//               <button
//                 type="button"
//                 className={`${
//                   isClient ? 'bg-[#196eaf] text-white' : 'bg-blue-200 text-blue-800'
//                 }  font-bold py-2 px-4 rounded-l transition duration-200`}
//                 onClick={() => handleToggleUserType('Client')}
//               >
//                 Client
//               </button>
//               <button
//                 type="button"
//                 className={`${
//                   !isClient ? 'bg-[#196eaf] text-white' : 'bg-blue-200 text-blue-600'
//                 }  font-bold py-2 px-4 rounded-r transition duration-200`}
//                 onClick={() => handleToggleUserType('Freelancer')}
//               >
//                 Freelancer
//               </button>
//             </div>

//             {/* Form Content */}
//             <div className="flex flex-col gap-4">
//               <div className="w-full flex flex-col">
//                 <label className="text-lg font-semibold">Email ID</label>
//                 <input
//                   value={email}
//                   type="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="input input-bordered border-2 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
//                   required
//                 />
//               </div>

//               <div className="w-full flex flex-col">
//                 <label className="text-lg font-semibold">Password</label>
//                 <input
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                   placeholder="Enter your password"
//                   className="input input-bordered border-2 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
//                   required
//                 />
//               </div>

//               <h1 className="ml-1 mt-2 text-cyan-600 cursor-pointer text-sm hover:underline">
//                 Forgot Password?
//               </h1>

//               <button
//                 type="submit"
//                 className="bg-[#196eaf] text-white font-bold py-2 rounded-md hover:bg-[#155d8a] transition duration-200"
//               >
//                 Login
//               </button>
// <button  onClick={handleLogin} >google</button>
//               <div className="text-center text-sm text-gray-500 mt-4">
//                 {isClient
//                   ? 'Not a client? Register as Freelancer'
//                   : 'Not a freelancer? Register as Client'}
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
// }