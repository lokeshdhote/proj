import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AyscnAcceptProposal } from '../../src/Store/Actions/ClientAction';
import { toast } from 'react-toastify';

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Agreements = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const proposal = location.state?.proposal;
console.log(proposal); 

  const proposalid = proposal?._id;
  const email = proposal?.email;
  const id = proposal?.projectid;

  const { data, message } = useSelector((state) => state.Client?.pro);
  console.log(message);

  const [agreed, setAgreed] = useState(false);

  const displayRazorpay = async (amount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Failed to load Razorpay SDK. Please check your internet connection.');
      return;
    }

    const options = {
      
      key: 'rzp_test_q6BbMtempA0k7h',
      amount: proposal?.budget * 100, // Amount in paise
      currency: 'INR',
      name: 'My Cozee',
      description: 'Proposal Payment',
      handler: (response) => {
        console.log('Payment successful! Details:', response);
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
        navigate('/'); // Redirect after successful payment
      },
      prefill: {
        name: proposal?.freelancerName || 'John Doe', // Default to dummy name
        email: email || 'johndoe@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#BC2C3D',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', (response) => {
      console.error('Payment Failed. Details:', response.error);
      alert(`Oops! Payment failed.\nError: ${response.error.description}\nCode: ${response.error.code}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (agreed) {
      dispatch(AyscnAcceptProposal(id, { email, proposalid }))
        .then(() => {
          toast.success(message || 'Agreement accepted successfully!');
          setAgreed(false);
          const amount = proposal?.amount || 500; // Use the proposal amount or default to 500
          displayRazorpay(amount); // Call Razorpay with the dynamic amount
        })
        .catch((error) => {
          toast.error('Something went wrong. Please try again.');
          console.error(error);
        });
    } else {
      alert('You must agree to the terms.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Agreement Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#2E4156] ">Freelancing Terms & Conditions</h3>
            <div className="max-h-96 overflow-y-scroll p-4 bg-gray-50 rounded-md">
              {/* Terms & Conditions */}
              <div className="max-h-96 overflow-y-scroll p-4 bg-gray-50 rounded-md">
            <ul class="list-decimal pl-5 space-y-2">
  <li>This agreement is made between [Client Name] (referred to as "Client") and [Freelancer Name] (referred to as "Freelancer").</li>
  <li>The Freelancer agrees to perform tasks and complete the project as per the scope defined by the Client.</li>
  <li>The total budget for the project is ₹[amount], inclusive/exclusive of applicable taxes.</li>
  {/* <li>The payment will be transferred by the Client to the platform's secure escrow system before the project starts.</li> */}
  <li>Payments will be divided into milestones:</li>
  <ul class="list-disc pl-5 space-y-2">
    <li>Milestone 1: [Description] - ₹[Amount]</li>
    <li>Milestone 2: [Description] - ₹[Amount]</li>
  </ul>
  <li>Upon successful completion of each project, the platform will release the corresponding payment to the Freelancer.</li>
  <li>A [percentage]% platform service fee will be deducted from the Freelancer’s payment.</li>
  <li>The Freelancer must complete the project by [deadline date], unless otherwise agreed in writing.</li>
  <li>If there is a delay, the Freelancer must inform the Client immediately with valid reasons.</li>
  {/* <li>The Client is entitled to [number] free revisions. Additional revisions will incur a charge of ₹[amount] each.</li> */}
  {/* <li>All deliverables become the sole property of the Client upon full payment of the agreed amount.</li> */}
  <li>The Freelancer agrees to submit quality work, meet deadlines, and communicate clearly and professionally with the Client.</li>
  <li>The Freelancer will respect intellectual property rights and confidentiality agreements.</li>
  <li>Both freelancers and clients are expected to leave honest feedback after the project.</li>
  <li>The Freelancer agrees not to engage in any fraudulent, misleading, or unethical activities.</li>
  <li>Payments will remain in the platform's until the Client confirms the milestone or project is completed satisfactorily.</li>
  <li>If the Freelancer fails to deliver or abandons the project:</li>
  <ul>
    <li>The platform will track the Freelancer's activity.</li>
    <li>The Client will be refunded the undelivered milestone amount, excluding the platform service fee.</li>
    <li>The remaining funds can be redirected to a new Freelancer.</li>
  </ul>
  <li>Any disputes will be resolved through the platform’s dispute resolution system.</li>
  <li>By starting the project, both the Client and the Freelancer acknowledge and accept these terms and conditions.</li>
</ul>

            </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="agreement"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              I agree to the terms and conditions above
            </label>
          </div>

          <button
            type="submit"
            disabled={!agreed}
            className={`w-full py-3 px-6 rounded-md text-white font-semibold transition duration-200 ease-in-out transform ${
              agreed ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Agreements;
