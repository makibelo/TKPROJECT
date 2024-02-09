// Contact.js

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to a server)
    console.log(formData);
    // Clear form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? Reach out to us using the form below or contact us through
        other means.
      </p>

      <div className="contact-info">
        <div>
          <strong>Address:</strong>
          <p>123 Main Street, Cityville, State, 345</p>
        </div>
        <div>
          <strong>Phone:</strong>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <strong>Email:</strong>
          <p>info@example.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
