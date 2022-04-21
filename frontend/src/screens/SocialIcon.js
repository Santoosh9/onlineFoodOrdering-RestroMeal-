import React from 'react';
import './socialIcon.css';
const SocialIcon = () => {
  return (
    <>
      <div className="icon-bar">
        <a href="#facebook" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="twitter" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="google" className="google">
          <i className="fa fa-google"></i>
        </a>
        <a href="linkedin" className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="youtube" className="youtube">
          <i className="fa fa-youtube"></i>
        </a>
      </div>
    </>
  );
};

export default SocialIcon;
