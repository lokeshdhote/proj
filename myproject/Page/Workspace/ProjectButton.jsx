import React from 'react';

const ProjectButton = ({ project, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(project)} 
      className="bg-blue-500 text-white py-2 px-4 m-2 rounded hover:bg-blue-600"
    >
      {project.projectName} - {project.clientName}
    </button>
  );
};

export default ProjectButton;
