function PreviousProject() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Previous Projects</h2>
      <ul className="space-y-4">
      
        <li className="border p-4 rounded-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg">Project: Logo Design</h3>
              <p className="text-sm text-gray-500">Client: John Doe</p>
            </div>
            <p className="text-sm text-green-600 font-semibold">Earnings: $250</p>
          </div>
          <p className="text-sm mt-2 text-gray-600">
            Feedback: <span className="italic">"Excellent work! Delivered ahead of time."</span>
          </p>
        </li>
        <li className="border p-4 rounded-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg">Project: E-commerce Website</h3>
              <p className="text-sm text-gray-500">Client: Alice Smith</p>
            </div>
            <p className="text-sm text-green-600 font-semibold">Earnings: $1500</p>
          </div>
          <p className="text-sm mt-2 text-gray-600">
            Feedback: <span className="italic">"Great attention to detail."</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
export default PreviousProject;
