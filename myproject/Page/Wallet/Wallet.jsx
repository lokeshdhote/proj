import React, { useState, useEffect } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(5000); 
  }, []);

  return (
    <div className="p-6 sm:p-8 md:p-10 bg-white shadow-lg rounded-lg border border-gray-200 w-full max-w-md mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Wallet</h2>
      <p className="text-4xl sm:text-5xl font-bold text-[#196eaf] ">₹{balance}</p>
      <p className="mt-2 text-lg sm:text-xl text-gray-600">Current Balance</p>
    </div>
  );
};

export default Wallet;
