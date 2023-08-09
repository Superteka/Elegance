import React from 'react';
import './LoadingStyle.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
    </div>
  );
};

export default Loading;
