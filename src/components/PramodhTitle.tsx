import React, { useState } from 'react';
import './NetflixTitle.css';

interface PramodhTitleProps {
  onFinish: () => void;
}

const PramodhTitle: React.FC<PramodhTitleProps> = ({ onFinish }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePlaySound = () => {
    if (isAnimating) return;
    setIsClicked(true);
    setIsAnimating(true);
    const audio = new Audio('/netflix-sound.mp3');
    audio.volume = 1;
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
    setTimeout(() => {
      onFinish();
    }, 3000);
  };

  return (
    <div className="netflix-container" onClick={handlePlaySound} style={{ cursor: isClicked ? 'default' : 'pointer' }}>
      <img
        src="/pramodh_logo.png"
        alt="Pramodh"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        draggable={false}
      />
      {!isClicked && (
        <div style={{ position: 'absolute', bottom: 40, width: '100%', textAlign: 'center', color: '#fff', fontSize: 20, letterSpacing: 1 }}>
        </div>
      )}
    </div>
  );
};

export default PramodhTitle;
