import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage: React.FC = () => {
  const { slug } = useParams();
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-text mb-8">Post: {slug}</h1>
      <p className="text-muted">Content coming soon...</p>
    </div>
  );
};

export default PostPage;
