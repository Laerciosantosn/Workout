import React from 'react';

const ExperienceBar: React.FC = () => {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: '60%' }} />

        <span className=" current-experience" style={{ left: '50%' }}>
          360 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
};

export default ExperienceBar;
