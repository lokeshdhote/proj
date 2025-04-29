import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FreelancerPayment from "./FreelancerPayment";
import CreateWallet from "./CreateWallet";
import { AsuncUserProfile } from "../../src/Store/Actions/userAction";
import Nav from "../../components/Nav/Nav";

const CheckWallet = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state?.user); // Assuming wallet details are stored in state.user.wallet.
console.log(wallet);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dispatch the action to fetch wallet details.
    dispatch(AsuncUserProfile()).then(() => setLoading(false));
  }, [dispatch]);

  const handleCreateWallet = (details) => {
    // Optionally update local state or perform additional actions after wallet creation.
    console.log("Wallet created:", details);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
         <div className='w-screen h-[5vw]' > <Nav /> </div>

      {wallet ? (
        <FreelancerPayment walletDetails={wallet} />
      ) : (
        <CreateWallet onCreateWallet={handleCreateWallet} />
      )}
    </div>
  );
};

export default CheckWallet;
