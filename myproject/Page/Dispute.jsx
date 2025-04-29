import React from 'react';
import Nav from '../components/Nav/Nav';

const DisputeResolution = () => {
  return (
    <div className="container mx-auto px-4 py-8">
             <div className='w-screen h-[5vw]' > <Nav /> </div>


      <p className="text-gray-600 mb-6">Effective Date: [Date]</p>

      <p className="text-gray-700 mb-4">
        This Dispute Resolution Agreement (the "Agreement") sets forth the procedures and requirements for resolving disputes between users on <span className="font-bold">GigTaskr</span> (the "Platform"). By using the Platform, you agree to the terms of this Agreement.
      </p>

      <h2 className="text-2xl font-bold mb-4">1. Dispute Resolution Procedure</h2>

      <h3 className="text-xl font-bold mb-2">1.1 Reporting a Dispute</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>Notification:</strong> If you have a dispute with another user, you must notify us within 15 to 30 days from the occurrence of the issue. Disputes can be reported through the Platform’s Dispute Resolution Form or via email at <span className="font-bold">support@gigtaskr.com</span>.</li>
        <li><strong>Details:</strong> Provide a detailed description of the dispute, including relevant facts, dates, and any supporting documentation.</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.2 Initial Review</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>Acknowledgment:</strong> Upon receiving your dispute report, we will acknowledge receipt via email within a few days and begin an initial review of the issue.</li>
        <li><strong>Investigation:</strong> We will assess the information provided and may request additional details or documentation from the parties involved.</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.3 Mediation</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>Process:</strong> We may offer mediation services to help resolve the dispute amicably. Mediation is a non-binding process where a neutral third party facilitates discussions between the parties.</li>
        <li><strong>Agreement:</strong> Any resolution reached through mediation will be documented and must be agreed upon by all parties involved.</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">1.4 Formal Resolution</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>Decision:</strong> If mediation does not resolve the dispute, we will make a final decision based on the information provided and the Platform’s policies. This decision is binding and must be adhered to by all parties.</li>
        <li><strong>Enforcement:</strong> We may take actions such as account suspension or other measures to enforce the decision.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">2. Platform’s Role and Limitations</h2>

      <h3 className="text-xl font-bold mb-2">2.1 Neutrality</h3>
      <p className="text-gray-700 mb-4">
        The Platform acts as a neutral facilitator in the dispute resolution process. We do not take sides or make judgments on the merits of individual disputes beyond the scope of our policies.
      </p>

      <h3 className="text-xl font-bold mb-2">2.2 Limitation of Liability</h3>
      <p className="text-gray-700 mb-6">
        The Platform is not liable for any damages or losses resulting from disputes or the resolution process. Users are responsible for resolving disputes in accordance with these Terms and applicable laws.
      </p>

      <h2 className="text-2xl font-bold mb-4">3. Dispute Resolution Terms</h2>

      <h3 className="text-xl font-bold mb-2">3.1 Governing Law</h3>
      <p className="text-gray-700 mb-4">
        This Agreement and any disputes arising from it are governed by and construed in accordance with the laws of India. Disputes will be subject to the exclusive jurisdiction of the courts located in [City, India].
      </p>

      <h3 className="text-xl font-bold mb-2">3.2 Waiver of Class Actions</h3>
      <p className="text-gray-700 mb-6">
        Any disputes must be resolved on an individual basis. Users waive any right to participate in class actions or collective claims related to disputes.
      </p>

      <h2 className="text-2xl font-bold mb-4">4. Changes to the Dispute Resolution Agreement</h2>
      <p className="text-gray-700 mb-6">
        We may update this Agreement from time to time. Changes will be posted on the Platform, and continued use constitutes acceptance of the revised Agreement.
      </p>

      <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
      <p className="text-gray-700 mb-4">
        For any questions or concerns regarding this Dispute Resolution Agreement or to report a dispute, please contact us at:
      </p>
      <ul className="list-none pl-0 text-gray-700">
        <li><strong>Email:</strong> support@gigtaskr.com</li>
        <li><strong>Phone:</strong> +91-123-456-7890</li>
        <li><strong>Address:</strong> 1234 Street, Delhi, India</li>
      </ul>
    </div>
  );
};

export default DisputeResolution;
