import React, { useState, useEffect } from "react";

function PaymentTracking() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
 
        const paymentData = data.users.map(user => ({
          client: `${user.firstName} ${user.lastName}`,
          amount: Math.floor(Math.random() * 1000) + 100, 
          status: Math.random() > 0.5 ? "Paid" : "Pending" 
        }));
        setPayments(paymentData);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Payment Tracking</h2>
      <table className="w-full text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Client</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <tr key={index}>
                <td className="p-2">{payment.client}</td>
                <td className="p-2">₹{payment.amount}</td>
                <td
                  className={`p-2 ${
                    payment.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {payment.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2" colSpan="3">
                No payments to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTracking;
