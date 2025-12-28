import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background text-text relative overflow-hidden">
      
      {/* Hero Gradient Background */}
      <div 
        className="fixed inset-0 -z-10 opacity-15 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: 'var(--bg-hero-gradient)' }}
      />

      <div className="max-w-2xl w-full space-y-8">
        <div className="relative py-4">
          <h1 className="text-9xl font-extrabold text-primary tracking-widest opacity-80 select-none">404</h1>
          <div className="bg-primary px-2 text-sm rounded rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold shadow-lg">
            Page Not Found
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Oops! Có vẻ như bạn đã đi lạc.</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={() => navigate(-1)}
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300"
          >
            Quay lại
          </button>
          
          <Link 
            to="/" 
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-primary/30"
          >
            Về trang chủ
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Tra Hoang. All rights reserved.
      </div>
    </div>
  );
};

export default NotFound;
