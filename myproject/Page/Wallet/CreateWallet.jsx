import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createwallet } from "../../src/Store/Actions/userAction";
import { useNavigate } from "react-router-dom";

const CreateWallet = ({ onCreateWallet }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [walletDetails, setWalletDetails] = useState({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    UPIphoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWalletDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createwallet(walletDetails)); // Dispatch wallet creation.
    onCreateWallet(walletDetails); // Pass wallet details to parent component.
    navigate("/wallet");
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <h2 className="text-2xl font-bold">Create Your Wallet</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-md"
      >
        {Object.keys(walletDetails).map((key) => (
          <div key={key}>
            <label className="block text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, " $1")}:
            </label>
            <input
              type="text"
              name={key}
              value={walletDetails[key]}
              onChange={handleInputChange}
              placeholder={`Enter ${key}`}
              className="w-full p-2 border rounded-lg mt-1"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateWallet;
