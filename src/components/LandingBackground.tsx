import React, { useEffect, useState } from 'react';

const LandingBackground: React.FC = () => {
  const [staticDrops, setStaticDrops] = useState<Array<{
    id: number;
    left: number;
    top: number;
    size: number;
    blur: number;
  }>>([]);

  const [runningDrops, setRunningDrops] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate static drops (the mist/spray on the window)
    const sDrops = [];
    const staticCount = 300; // Lots of small drops
    for (let i = 0; i < staticCount; i++) {
      sDrops.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2, // 2px to 6px
        blur: Math.random() > 0.8 ? 1 : 0, // Some drops are blurry
      });
    }
    setStaticDrops(sDrops);

    // Generate running drops (the streaks)
    const rDrops = [];
    const runningCount = 20;
    for (let i = 0; i < runningCount; i++) {
      rDrops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 3 + 3, // 3-6s
      });
    }
    setRunningDrops(rDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden transition-colors duration-500 z-0 pointer-events-none bg-[var(--color-background)]">
      {/* Bokeh Background Layer - Recreating the reference image style */}
      <div className="absolute inset-0 opacity-100 dark:opacity-80 transition-opacity duration-500">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/20" />
        
        {/* Large Bokeh Orbs - Using Theme Colors */}
        {/* Orb 1: Top Left - Large & Darker */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[80px] 
          bg-[var(--color-primary)] opacity-20 dark:opacity-20" />
        
        {/* Orb 2: Center Left - The bright pair in the image */}
        <div className="absolute top-[20%] left-[15%] w-[35vh] h-[35vh] rounded-full blur-[40px] 
          bg-white opacity-40 dark:opacity-10 mix-blend-overlay" />
        <div className="absolute top-[25%] left-[25%] w-[40vh] h-[40vh] rounded-full blur-[50px] 
          bg-white opacity-30 dark:opacity-5 mix-blend-overlay" />

        {/* Orb 3: Right Side - Blue/Orange tint from theme */}
        <div className="absolute top-[10%] right-[-5%] w-[50vw] h-[50vw] rounded-full blur-[100px] 
          bg-[var(--color-secondary)] opacity-20 dark:opacity-20" />
        
        {/* Orb 4: Bottom Right */}
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[80px] 
          bg-[var(--color-primary)] opacity-20 dark:opacity-30" />
      </div>

      {/* Glass Surface Layer */}
      <div className="absolute inset-0 w-full h-full backdrop-blur-[2px]">
        
        {/* Static Drops - High density, small size */}
        {staticDrops.map((drop) => (
          <div
            key={`static-${drop.id}`}
            className="absolute rounded-full transition-colors duration-500"
            style={{
              left: `${drop.left}%`,
              top: `${drop.top}%`,
              width: `${drop.size}px`,
              height: `${drop.size}px`,
              backgroundColor: 'var(--drop-color, rgba(255,255,255,0.1))', // Fallback
              filter: drop.blur ? 'blur(1px)' : 'none',
              boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3), 1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
             {/* Dark mode specific styling via class since inline styles are tricky with media queries */}
             <div className="w-full h-full rounded-full bg-slate-400/30 dark:bg-white/10" />
          </div>
        ))}

        {/* Running Drops - The streaks */}
        {runningDrops.map((drop) => (
          <div
            key={`run-${drop.id}`}
            className="absolute w-[3px] rounded-full bg-slate-400/40 dark:bg-white/20"
            style={{
              left: `${drop.left}%`,
              top: '-20px',
              height: '20px',
              animation: `dropRun ${drop.duration}s ease-in infinite`,
              animationDelay: `${drop.delay}s`,
              boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.1)',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dropRun {
          0% {
            transform: translateY(-20px) scaleY(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
            transform: translateY(80vh) scaleY(1.2);
          }
          100% {
            transform: translateY(100vh) scaleY(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingBackground;
