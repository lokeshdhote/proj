import React from 'react';
import Nav from '../components/Nav/Nav.jsx';

const Client = () => {
  return (
    <>
      <Nav />
      <div className='h-screen flex flex-col gap-8 w-full bg-white'>
        <h1 className='mt-24 text-4xl justify-center items-center flex'>Sign up to hire talent</h1>
        <div className='h-fit w-full flex items-center justify-center'>
          <div className='h-fit w-96 bg-slate-50 rounded-lg shadow-2xl px-4 py-2'>
            <div className="w-full flex flex-col justify-center gap-1 h-10 mt-4 pl-3">
              <label className="label">
                <span className="label-text text-lg">Mobile Number/ Email ID</span>
              </label>
              <input type="text" placeholder="" className="input input-bordered border-2 w-full max-w-xs" />
            </div>

            <div className="w-full flex flex-col text-lg justify-center gap-1 h-10 mt-6 pl-3">
              <label className="label">
                <span className="label-text text-lg">Country</span>
              </label>
              <input type="text" placeholder="" className="input input-bordered border-2 w-full max-w-xs" />
            </div>

            <div className="w-full flex flex-col justify-center gap-1 h-10 mt-7 pl-3">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input type="text" placeholder="" className="input input-bordered border-2 w-full max-w-xs" />
            </div>

            <h1 className='ml-3 mt-5 text-[#196eaf]'>Forgot Password?</h1>

            <div className="form-control pr-20 pt-3 flex items-center">
              <label className="label cursor-pointer">
                <input type="checkbox" checked="checked" className="checkbox" />
                <span className="label-text text-base pl-3 font-light">Login with OTP instead of password</span>
              </label>
            </div>

            <button className="bg-[#196eaf] ml-24 mt-4 text-white font-normal py-2 px-10 rounded-md">
              Create my account
            </button>

            <div className="divider">OR</div>

            {/* Google Authentication */}
            <div className='flex flex-col items-center justify-center py-1 px-5'>
              <img className='h-7 w-7' src="/google.png" alt="Google" />
              <span className='text-[#196eaf] mt-2 text-lg font-medium'>Login with Google</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
