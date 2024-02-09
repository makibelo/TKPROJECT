// ServicePage.js

import React from 'react';


export default function ServicePage() {
  return (
    <div className="service-page">
      <header>
        <h1>Our Services</h1>
      </header>

      <section className="intro-section">
        <p>Welcome to our clothing store! We offer a wide range of stylish and high-quality clothing for all occasions.</p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>1. Trendy Collections</h3>
          <p>Explore our latest trendy collections featuring the latest fashion styles and designs.</p>
        </div>
        <div className="service-item">
          <h3>2. Premium Quality</h3>
          <p>Our clothing is made from premium quality materials to ensure comfort and durability.</p>
        </div>
        <div className="service-item">
          <h3>3. Hassle-Free Returns</h3>
          <p>We offer hassle-free returns and exchanges to ensure your satisfaction with every purchase.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to contact our customer support team.</p>
        <div className="contact-info">
          <p>Email: info@yourclothingstore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </section>
    </div>
  );
}
