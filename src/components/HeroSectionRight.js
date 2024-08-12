import React from 'react';
import './HeroSectionRight.css';

import dotsImage from './Images/dots.png';
import cubeImage from './Images/cube.png';
import circleImage from './Images/circle.png';
import zigzagImage from './Images/zigzags.png';
import plusImage from './Images/plus.png';
import userImage from './Images/naval.jpg';

export const HeroSectionRight = () => {
  return (
    <div>
      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src={dotsImage} alt="" />
        </div>
        <div className="absolute icons icon-cube">
          <img src={cubeImage} alt="" />
        </div>
        <div className="absolute icons icon-circle">
          <img src={circleImage} alt="" />
        </div>
        <div className="absolute icons icon-zigzag">
          <img src={zigzagImage} alt="" />
        </div>
        <div className="absolute icons icon-plus">
          <img src={plusImage} alt="" />
        </div>
        <div className="user-image">
          <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  );
};