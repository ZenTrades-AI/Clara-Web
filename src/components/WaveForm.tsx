import React, { useEffect, useState } from "react";

interface WaveFormProps {
  progress: number;
  isPlaying: boolean;
}

const WaveForm: React.FC<WaveFormProps> = ({ progress, isPlaying }) => {
  const [animationFrame, setAnimationFrame] = useState(0);

  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '0.125rem',
    width: '100%',
    maxWidth: '24rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    height: '3rem'
  };

  const waveBarStyle = {
    transition: 'all 0.3s ease-out',
    borderRadius: '9999px'
  };

  useEffect(() => {
    if (!isPlaying) return;

    const animate = () => {
      setAnimationFrame(prev => prev + 1);
      if (isPlaying) {
        requestAnimationFrame(animate);
      }
    };
    
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying]);

  const bars = Array.from({ length: 32 }, (_, i) => {
    const heights = [0.3, 0.8, 0.5, 0.9, 0.4, 0.7, 0.6, 0.85, 0.35, 0.75, 0.55, 0.9, 0.45, 0.8, 0.65, 0.7, 0.4, 0.85, 0.5, 0.9, 0.3, 0.75, 0.6, 0.8, 0.45, 0.7, 0.55, 0.85, 0.35, 0.9, 0.5, 0.75];
    const height = heights[i] || 0.5;
    const isActive = (i / 32) * 100 <= progress;
    
    const animationScale = isPlaying && isActive 
      ? 1 + Math.sin((animationFrame * 0.1) + i * 0.3) * 0.3
      : isActive ? 1.1 : 1;
    
    return (
      <div
        key={i}
        style={{
          ...waveBarStyle,
          background: isActive ? 'hsl(0 75% 60%)' : 'hsl(220 13% 25%)',
          height: `${height * 32 + 8}px`,
          width: "2px",
          transform: `scaleY(${animationScale})`,
          filter: isActive ? 'brightness(1.2)' : 'brightness(0.7)',
        }}
      />
    );
  });

  return (
    <div style={containerStyle}>
      {bars}
    </div>
  );
};

export default WaveForm;