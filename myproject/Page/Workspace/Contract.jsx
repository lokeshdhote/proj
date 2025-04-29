function Contract() {
  return (
   <div>
      <h2 className="text-2xl font-semibold mb-4">Contract Details</h2>

     <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Details</h2>
      <div className="space-y-4">
       
        <div className="border p-4 rounded-md">
          <h3 className="font-medium text-lg">Contract Title: Website Redesign Agreement</h3>
          <p className="text-sm text-gray-500">Client: John Doe</p>
          <p className="text-sm text-gray-500">Start Date: Nov 1, 2024</p>
          <p className="text-sm text-gray-500">End Date: Dec 15, 2024</p>
          <p className="text-sm text-gray-500">
            Status: <span className="text-green-600 font-semibold">Active</span>
          </p>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            View Contract
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Cancel Contract
          </button>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Contract;
