/**
 * File Overview
 * Credit css: https://dev.to/sobhandash/lets-build-a-night-sky-using-pure-scss-2g0n
 */
import React from "react";
import './NightSkyBackground.scss'
const NightSkyBackground = ({children}: any) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="sky">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="comet"></div>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default NightSkyBackground;
