import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const notificationsData = [
  {
    id: 1,
    type: 'success',
    title: 'Project Approved',
    message: 'Your recent project "Website Redesign" has been approved by the client.',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'message',
    title: 'New Message',
    message: 'You have a new message from "John Doe" regarding the "Mobile App Development" project.',
    time: '4 hours ago',
  },
  {
    id: 3,
    type: 'payment',
    title: 'Payment Received',
    message: 'You have received a payment of $500 for the project "SEO Optimization".',
    time: '6 hours ago',
  },
  {
    id: 4,
    type: 'warning',
    title: 'Project Deadline Approaching',
    message: 'Reminder: The deadline for "Landing Page Development" is tomorrow.',
    time: '8 hours ago',
  },
  {
    id: 5,
    type: 'feedback',
    title: 'New Feedback',
    message: 'You have received 5-star feedback from the client "Sarah Lee".',
    time: '10 hours ago',
  }
  ,
  {
    id: 6,
    type: 'warning',
    title: 'Project Deadline Approaching',
    message: 'Reminder: The deadline for "Landing Page Development" is tomorrow.',
    time: '8 hours ago',
  },
  {
    id: 7,
    type: 'feedback',
    title: 'New Feedback',
    message: 'You have received 5-star feedback from the client "Sarah Lee".',
    time: '10 hours ago',
  }
];

const NotificationItem = ({ notification }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <i className="fas fa-check-circle text-blue-500"></i>;
      case 'message':
        return <i className="fas fa-comment-alt text-blue-400"></i>;
      case 'payment':
        return <i className="fas fa-file-invoice-dollar text-green-400"></i>;
      case 'warning':
        return <i className="fas fa-exclamation-triangle text-red-400"></i>;
      case 'feedback':
        return <i className="fas fa-star text-yellow-400"></i>;
      default:
        return null;
    }
  };

  const getBorderColor = () => {
    switch (notification.type) {
      case 'success':
        return 'border-blue-500';
      case 'message':
        return 'border-blue-300';
      case 'payment':
        return 'border-green-300';
      case 'warning':
        return 'border-red-300';
      case 'feedback':
        return 'border-yellow-300';
      default:
        return '';
    }
  };

  return (
    <div className={`bg-white border-l-4 shadow p-4 rounded-lg flex justify-between items-center ${getBorderColor()}`}>
      <div className="flex items-center space-x-4">
        <div className="icon text-2xl">
          {getIcon()}
        </div>
        <div>
          <p className="text-gray-800 font-semibold">{notification.title}</p>
          <p className="text-gray-500 text-sm">{notification.message}</p>
        </div>
      </div>
      <div className="text-gray-500 text-xs">{notification.time}</div>
    </div>
  );
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(notificationsData);
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      type: 'read',
    })));
  }

  return (
    <div>
                 <div className='w-screen h-[5vw]' > <Nav /> </div>

  
    {/* <div className="container h-fit   mx-auto px-4 py-12"> */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-md:py-3 max-md:px-3 ">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-3xl font-semibold text-[#196eaf]">Notifications</h2>
          <button
            onClick={markAllAsRead}
            className="bg-[#196eaf] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Mark All as Read
          </button>
        </div>

        <div className="space-y-6 overflow-auto h-fit">
          {notifications.map(notification => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
    {/* </div> */}
    </div>
  );
};

export default Notifications;
