import React, { useState, useEffect } from 'react';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    setPayments([
      { id: 1, name: 'John Doe', date: '2024-12-01', amount: 1000, status: 'Completed' },
      { id: 2, name: 'Jane Doe', date: '2024-11-29', amount: 1500, status: 'Pending' },
    ]);
  }, []);

  return (
    <div className="p-6 sm:p-8 md:p-10 bg-white shadow-lg rounded-lg border border-gray-200">
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Payment History</h3>
      <ul className="space-y-4">
        {payments.map((payment) => (
          <li
            key={payment.id}
            className="p-4 sm:p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300"
          >
            <p className="text-sm sm:text-base md:text-lg"><strong>Client Name:</strong> {payment.name}</p>
            <p className="text-sm sm:text-base md:text-lg"><strong>Date:</strong> {payment.date}</p>
            <p className="text-sm sm:text-base md:text-lg"><strong>Amount:</strong> ₹{payment.amount}</p>
            <p className="text-sm sm:text-base md:text-lg">
              <strong>Status:</strong>{' '}
              <span className={payment.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}>
                {payment.status}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
