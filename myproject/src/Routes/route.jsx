import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Main from "../../Page/Main.jsx";
import About from "../../Page/About.jsx";
import Contact from "../../Page/Contact.jsx";
import Jobs from "../../Page/Jobs.jsx";
import Login from "../../Page/Login.jsx";
import Terms from "../../Page/Terms.jsx";
import Underc from "../../Page/Underc.jsx";
import PostProject from "../../Page/PostProject.jsx";
import SendProposal from "../../Page/SendProposal.jsx";
import Profile from "../../Page/Profile.jsx";
import FindProject from "../../Page/FindProject.jsx";
import Consult from "../../Page/Consult.jsx";
import Client from "../../Page/Client.jsx";
import Freelancer from "../../Page/Freelance.jsx";
// import Message from '../../Page/Message.jsx'
import Notification from "../../Page/Notification.jsx";
import FindFreelancer from "../../Page/FindFreelancer.jsx";
import Chatroom from "../../Page/Chat/Chat.jsx";
import FreelancerPayment from "../../Page/Wallet/FreelancerPayment.jsx";
import Check from "../../Page/check.jsx";
// import VideoCall from '../../Page/Chat/VideoCall.jsx'
import MyVideoCall from "../../Page/Chat/MyVideoCall.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  ClientLoggedIn,
  frelancerLoggedIn,
} from "../Store/Actions/AuthAction.jsx";
// import Resumepage from "../../Page/Resume/Resume.jsx";
import Resume from "../../Page/Resume/RE.jsx";
import Workspace from "../../Page/Workspace/Workspace.jsx"
import GenreateResume from "../../Page/Resume/ResumePDF.jsx";
import RegistrationForm from "../../Page/Auth/FreelancerSignIn.jsx";
import PlatformGuide from "../../Page/HomeDropdown/PaltformGuide.jsx";
import Ongoing from "../../Page/Nav/Ongoing.jsx";
import Community from "../../Page/Community.jsx";
import AdminPanel from "../../Admin/AdminPanel.jsx";
import FreelancerRecord from "../../Admin/FreelancerRecord.jsx";
import ClientRecord from "../../Admin/ClientRecord.jsx";
import ProjectRecord from "../../Admin/ProjectRecord.jsx";
import Report from "../../Admin/Report.jsx";
import PaymentRecord from "../../Admin/PaymentRecord.jsx";
import ViewProject from "../../Page/proposal/ViewProjects.jsx";
import ProposalAccept from "../../Page/proposal/ProposalAccept.jsx";
import Proposaldetails from "../../Page/proposal/Proposaldetails.jsx";
import Agreements from "../../Page/proposal/Agreements.jsx";
import CheckWallet from "../../Page/Wallet/CheckWallet.jsx";
import ClientProfile from "../../Page/ClientProfile.jsx";
import Analyzer from "../../Page/Resume/Analyzer.jsx";
import Quiz from "../../Page/Quiz.jsx";
import DataAnalyzer from "../../Page/DataAnaylzer.jsx";
import ClientPayment from "../../Page/ClientPayment.jsx";

const route = () => {
  const { isAuthenticated,user, role } = useSelector((state) => state.Auth);
  // console.log(isAuthenticated,user);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!isAuthenticated){

      dispatch(ClientLoggedIn());
      dispatch(frelancerLoggedIn());
    }
  }, [isAuthenticated,role]);

  useEffect(() => {  
    if (isAuthenticated) {
      if (role === "client") {
        dispatch(ClientLoggedIn());
      } else if (role === "freelancer") {
        dispatch(frelancerLoggedIn());
      }
    }
  }, []);

  return (
    <Routes>

      <Route index path="/" element={<Main />} />
      <Route index path="/signin" element={<RegistrationForm />} />
      <Route path="/underc" element={<Underc />} />


      
      <Route path="/admin" element={<AdminPanel />} />
      

      <Route path="/admin/freelancer" element={<FreelancerRecord />} />
      <Route path="/admin/client" element={<ClientRecord />} />
      <Route path="/admin/project" element={<ProjectRecord />} />
      <Route path="/admin/payment" element={<PaymentRecord />} />
      <Route path="/admin/reports" element={<Report />} />
      {!isAuthenticated && <Route path="/login" element={<Login />} />}

      {isAuthenticated && (
        <>
          <Route path="/client" element={<Client />} />
          <Route path="/freelancer" element={<Freelancer />} />

          {role === "freelancer" && (
            <>
            <Route path="/previous" element={<DataAnalyzer />} />
              <Route path="/findproject" element={<FindProject />} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/SendProposal" element={<SendProposal />} />
              <Route path="/resumeview" element={<GenreateResume/>} />
              <Route path="/anlayzer" element={<Analyzer/>} />

            </>
          )}
          <Route path="/communtiy" element={<Community />} />

          <Route path="/proposaldetails" element={<Proposaldetails />} />

          <Route path="/agreement" element={<Agreements />} />
          <Route path="/viewprojects" element={<ViewProject />} />
          <Route path="/proposals" element={<ProposalAccept />} />
          <Route path="/ongoing-projects" element={<Ongoing />} />
         
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<PlatformGuide />} />

          <Route path="/Payment" element={<ClientPayment />} />
          <Route path="/consult" element={<Consult />} />
          
          
          <Route path="/Post" element={<PostProject />} />
          <Route path="/Profile" element={role==="freelancer" ? <Profile /> : <ClientProfile/>} />
         
          <Route path="/skilltest" element={<Quiz/>} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/message" element={<Chatroom />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/find-freelancers" element={<FindFreelancer />} />
          <Route path="/wallet" element={<CheckWallet />} />
          <Route path="/check" element={<Check />} />

          <Route path="/video" element={<MyVideoCall />} />
        </>
      )}
      {/* {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />} */}

      {/* <Route path='/Consult' element={<Consult/>}/> */}
    </Routes>
  );
};

export default route;
