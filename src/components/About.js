// AboutPage.js

import React from 'react';


export default function AboutPage() {
  return (
    <div className="about-page">
      <header>
        <h1>About Us</h1>
      </header>

      <section className="company-description">
        <p>Welcome to [Sergant Pepper Clothing Co], your one-stop destination for the latest fashion trends and high-quality clothing.</p>
        <p>At [Sergant Pepper Clothing Co], we are passionate about providing our customers with stylish and comfortable clothing that suits every occasion.</p>
      </section>

      <section className="key-features">
        <h2>Key Features</h2>
        <ul>
          <li>Wide range of trendy collections</li>
          <li>Premium quality materials</li>
          <li>Hassle-free returns and exchanges</li>
          {/* Add more key features as needed */}
        </ul>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          
          <img src="https://images.pexels.com/photos/7333512/pexels-photo-7333512.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Team Member 1" />
          <h3>Zak Venter</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://images.pexels.com/photos/4348398/pexels-photo-4348398.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Lead Designer</p>
        </div>
        {/* Add more team members as needed */}
      </section>
    </div>
  );
}
