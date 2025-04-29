import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function FeedbackReview({project}) {
  const { freelancer } = useSelector((state) => state?.Auth?.user)
  const { role } = useSelector((state) => state?.Auth)
 
  const [rating, setRating] = useState(0);  // Rating state to manage the number of stars
  const [feedback, setFeedback] = useState('');  // Feedback text state
  // const [clientName, setClientName] = useState('John Doe'); // Client's name

  // Handle star rating change
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  // Handle feedback change
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Feedback  </h2>

      <div className="p-6 bg-white shadow-md  rounded-md">
      <div className="mb-4">

        <span className="bg-yellow-400 text-black py-1 px-4 rounded-full text-sm">Top Feedback</span>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>

      <div className="mb-2">
        <p>“Great work on the project!”</p>
        <span className="text-sm text-gray-500">-  {freelancer?.firstname} {freelancer?.lastname} </span>
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Rating:</p>
        <div className="flex">
          {Array(5)
            .fill(false)
            .map((_, index) => (
              <svg
                key={index}
                onClick={() => handleStarClick(index)}
                className={`w-6 h-6 cursor-pointer ${
                  index < rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
        </div>
      </div>

  
      <div className="mb-4">
        <textarea
          placeholder="Add your feedback..."
          value={feedback}
          onChange={handleFeedbackChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

    
      {feedback && (
        <div className="mt-4">
          <h3 className="font-semibold">Your Feedback:</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default FeedbackReview;
