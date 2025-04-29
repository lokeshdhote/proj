import React from "react";
import Wallet from "./Wallet";
import PaymentDetails from "./PaymentDetail";
import PaymentHistory from "./PaymentHistory";

const FreelancerPayment = ({ walletDetails }) => {
  return (
    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col space-y-8 w-full lg:w-1/3">
        <Wallet wallet={walletDetails} />
        <PaymentDetails walletDetails={walletDetails} />
      </div>
      <div className="w-full lg:w-2/3">
        <PaymentHistory />
      </div>
    </div>
  );
};

export default FreelancerPayment;
