import React, { useState, useEffect } from 'react';
import profileData from '@/data/profile.json';

const ProfilePhotoCard: React.FC = () => {
  // Load images from profile data
  const images = profileData.profileImages.map(img => {
    const folder = profileData.profileImagesFolder.startsWith('/') 
      ? profileData.profileImagesFolder 
      : `/${profileData.profileImagesFolder}`;
    return `${folder}${img}`;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 15000); // Change every 15 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full p-1 bg-gradient-to-tr from-primary via-secondary to-primary shadow-2xl animate-pulse-slow">
       <div className="w-full h-full rounded-full overflow-hidden border-4 border-surface relative bg-surface">
         {images.map((img, index) => (
           <img
             key={index}
             src={img}
             alt="Profile"
             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
               index === currentIndex ? 'opacity-100' : 'opacity-0'
             }`}
           />
         ))}
       </div>
    </div>
  );
};

export default ProfilePhotoCard;
