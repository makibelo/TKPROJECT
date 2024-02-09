// Footer.js

import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Sergeant Pepper Clothing Co</h1>
        </div>
        <div className="footer-links">
          <ul>
            {/* <li><a href="/">Sergeant Pepper Clothing Co </a></li> */}
            {/* <li><a href="/about">SPCC</a></li>
            <li><a href="/services">Sergant Pepper</a></li> */}
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Professional Designer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
