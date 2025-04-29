import React from "react";

const PaymentDetail = ({ walletDetails }) => {
  if (!walletDetails) return <p>Loading wallet details...</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Wallet Details</h1>
      <p><strong>Account Holder Name:</strong> {walletDetails.accountHolderName}</p>
      <p><strong>Bank Name:</strong> {walletDetails.bankName}</p>
      <p><strong>Account Number:</strong> {walletDetails.accountNumber}</p>
      <p><strong>IFSC Code:</strong> {walletDetails.ifscCode}</p>
      <p><strong>UPI ID:</strong> {walletDetails.upiId}</p>
      <p><strong>UPI Phone Number:</strong> {walletDetails.UPIphoneNumber}</p>
    </div>
  );
};

export default PaymentDetail;
