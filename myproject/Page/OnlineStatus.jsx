import React, { useState, useEffect } from 'react';

function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Event listeners for online and offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Status: {isOnline ? "Online" : "Offline"}</h2>
      <div
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: isOnline ? "green" : "gray",
          color: "white",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        {isOnline ? "Connected" : "Disconnected"}
      </div>
    </div>
  );
}

export default OnlineStatus;
