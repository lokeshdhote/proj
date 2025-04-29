
import React, { useState } from 'react';
import axios from 'axios';

const Check = () => {
  const [upiID, setUpiID] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setUpiID(event.target.value);
  };

  const verifyUPI = async () => {
    try {
      const response = await axios.post("http://localhost:3000/verify-upi", {
        upiID: upiID,
      },{
        withCredentials: true, // Include credentials
      });
      console.log(response);
      
      setResult(response.data); // Set result from backend
    } catch (error) {
      setResult({ error: error.message });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={upiID}
        onChange={handleChange}
        placeholder="Enter UPI ID"
      />
      <button onClick={verifyUPI}>Verify UPI ID</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default Check;

