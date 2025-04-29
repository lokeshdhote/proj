import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TaskManagement from './TaskManagement';
import TodoList from './TodoList';
import Contract from './Contract';
import Dashboard from './Dashboard';
import EarningAnalytics from './EarningAnalytics';
import FeedbackReview from './FeedbackReview';
import Shoebox from './Shoebox';
import ProgressTracker from './ProgressTracker';
import Chat from './Chat';
import { FaHome, FaTasks, FaCog, FaUserAlt, FaChartBar, FaFileAlt, FaFileMedicalAlt, FaList } from "react-icons/fa"; 
import Nav from '../../components/Nav/Nav';
import { useLocation } from 'react-router-dom';

const Workspace = () => {
  const location = useLocation();
  const project = location.state?.project; // Access the passed project data
  console.log(project,"project");

  const components = [
    { label: 'Dashboard', component: <Dashboard project={project} />, icon: <FaHome /> },
    { label: 'Task Management', component: <TaskManagement project={project} />, icon: <FaTasks /> },
    { label: 'Todo List', component: <TodoList project={project} />, icon: <FaList /> },
    { label: 'Progress Tracker', component: <ProgressTracker project={project} />, icon: <FaChartBar /> },
    { label: 'Conversation', component: <Chat project={project} />, icon: <FaUserAlt /> },
    { label: 'Document Sharing', component: <Shoebox project={project} />, icon: <FaFileAlt /> },
    { label: 'Contract', component: <Contract project={project} />, icon: <FaFileMedicalAlt /> },
    { label: 'Feedback Review', component: <FeedbackReview project={project} />, icon: <FaCog /> },
  ];

  const [activeComponent, setActiveComponent] = useState(components[0].component);

  return (
   < div className='overflow-hidden'>
   
    <div className='w-[100%] h-[5vw]  shadow-md '>
      <Nav />
    </div>
    <div className="flex w-screen h-[42.7vw] bg-white overflow-hidden">
      <div className='w-[20%] bg-[#196eaf]'>
        <Sidebar components={components} onSelect={(c) => setActiveComponent(c.component)} />
      </div>
      <div className="w-[80%] h-screen p-4 bg-white">
        {activeComponent}
      </div>
    </div>
  </div>
  );
};

export default Workspace;
