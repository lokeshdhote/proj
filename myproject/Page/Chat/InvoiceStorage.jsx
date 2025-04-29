import React from 'react';

const InvoiceStorage = () => {
  // Example invoices data
  const invoices = [
    {
      id: 123,
      date: '01-11-2024', // Indian date format (DD-MM-YYYY)
      amount: 1500,
      status: 'Unpaid',
      gst: 18, // GST rate in percentage
      gstAmount: 270, // GST amount calculated (e.g., 1500 * 18%)
      totalAmount: 1770, // Total after adding GST (amount + gstAmount)
    },
    {
      id: 124,
      date: '15-10-2024',
      amount: 2000,
      status: 'Paid',
      gst: 18,
      gstAmount: 360,
      totalAmount: 2360,
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Invoices</h2>

      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} className="flex justify-between items-center py-4 border-b">
            <div className="flex flex-col">
              <span className="text-lg font-medium">Invoice #{invoice.id}</span>
              <span className="text-sm text-gray-500">Issued on: {invoice.date}</span>
              <span className="text-sm text-gray-500">GST Rate: {invoice.gst}%</span>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-lg font-medium ${invoice.status === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                {invoice.status}
              </span>
              <span className="text-sm text-gray-600">Amount: ₹{invoice.amount}</span>
              <span className="text-sm text-gray-600">GST: ₹{invoice.gstAmount}</span>
              <span className="text-sm text-gray-600">Total: ₹{invoice.totalAmount}</span>
            </div>
            <button className="ml-4 text-blue-500 hover:text-blue-600">
              <i className="fas fa-download"></i> Download
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default InvoiceStorage;
