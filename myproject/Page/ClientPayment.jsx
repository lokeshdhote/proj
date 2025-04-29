import React from "react";

// Function to dynamically load the Razorpay script
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const ClientPayment = () => {
  
  const displayRazorpay = async () => {
    // Load the Razorpay checkout.js script
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      return;
    }

    // Hardcoded Razorpay options
    const options = {
      key: "rzp_test_q6BbMtempA0k7h", // Replace with your Razorpay test/live key_id
      amount: 50000, // Hardcoded amount in paise (50000 = 500 INR)
      currency: "INR", // Currency
      name: "My Cozee", // Business name
      description: "Test Transaction", // Description of the payment
      image: "", // URL to your business logo (optional)
      order_id: "", // No `order_id` since we're skipping backend
      handler: (response) => {
        console.log("Payment successful! Details:", response);
        alert(
          `Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "John Doe", // Hardcoded user name
        email: "johndoe@example.com", // Hardcoded user email
        contact: "9876543210", // Hardcoded user phone
      },
      notes: {
        address: "123 Main Street, Your City", // Hardcoded address
      },
      theme: {
        color: "#BC2C3D", // Theme color for the Razorpay modal
      },
    };

    // Open Razorpay checkout
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    // Optional: handle checkout close event
    paymentObject.on("payment.failed", (response) => {
      console.error("Payment Failed. Details:", response.error);
      alert(
        `Oops! Payment failed.\nError: ${response.error.description}\nCode: ${response.error.code}`
      );
    });
  };

  return (
    <div className="App">
      <button
        onClick={displayRazorpay}
        className="bg-primary border-2 p-2 px-10 rounded-md text-white font-semibold"
        type="button"
      >
        Pay Now
      </button>
    </div>
  );
};

export default ClientPayment;
