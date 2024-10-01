import React, { useEffect, useState } from 'react';
import './circleProgressBar';

const CircleProgressBar = ({ title, value, colors, label }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(value); // Animate progress after initial render
    }, 100);
  }, [value]);

  return (
    <div className="progress-container">
      <h3>{title}</h3>
      <div className="wrapper">
        <div className="progress-wrapper">
          <div className="progressbar">
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side frontView"></div>
            {progress && (
                <div className="side progressTop"></div>
            )}
            {progress && (
                <div className="side progressFrontView"></div>
            )}
          </div>
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default CircleProgressBar;