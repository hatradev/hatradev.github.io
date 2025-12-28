import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage: React.FC = () => {
  const { slug } = useParams();
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-text mb-8">Project: {slug}</h1>
      <p className="text-muted">Details coming soon...</p>
    </div>
  );
};

export default ProjectPage;
