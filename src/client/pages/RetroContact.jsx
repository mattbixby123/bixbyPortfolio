import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PageLayout from '../components/PageLayout';

const RetroContact = ({ currentPath }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, message: 'Sending message...' });

    try {
      const response = await emailjs.send(
        'service_d4ree3y',
        'template_44npnk9',
        formData,
        'zzimTjXZcCaKXqd7a'
      );

      console.log('Email sent successfully:', response);
      setStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <PageLayout
      currentPath={currentPath}
      bannerText="Contact Me"
    >
      {/* Contact Form Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> Get In Touch <span className="diamond">♦</span>
      </div>

      <div className="pixel-card form-card">
        <p className="form-intro">
          Please feel free to reach out with any questions, comments, or opportunities that you think align with my portfolio, experiences, or interests.
        </p>

        <form className="retro-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="retro-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="retro-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="retro-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="retro-textarea"
            ></textarea>
          </div>

          <button type="submit" className="retro-button">
            {status.submitted && !status.success ? 'Sending...' : 'SUBMIT'}
          </button>

          {status.submitted && (
            <div className={`status-message ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </PageLayout>
  );
};

export default RetroContact;