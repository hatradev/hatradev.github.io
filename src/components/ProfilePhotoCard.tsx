import React, { useState, useEffect } from 'react';

const ProfilePhotoCard: React.FC = () => {
  // Load images using Vite's glob import
  // We use a glob pattern to match the images in the profile folder
  const imagesGlob = import.meta.glob('/src/assets/images/profile/*.{png,jpg,jpeg,svg}', { eager: true });
  
  // Convert the glob object to an array of image URLs
  // The values in imagesGlob are modules with a default export containing the URL
  const images = Object.values(imagesGlob).map((mod: any) => mod.default);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 15000); // Change every 30 seconds

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
