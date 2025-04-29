import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EarningAnalytics = ({ projects }) => {
  const projectNames = projects.map((project) => project.projectName);
  const projectEarnings = projects.map((project) => project.earnings);

  const data = {
    labels: projectNames,
    datasets: [
      {
        label: 'Earnings (₹)',
        data: projectEarnings,
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Project Earnings Analytics',
      },
    },
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Earning Analytics</h2>
      <div className="mt-6 bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-medium mb-2">Earnings by Project</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default EarningAnalytics;
