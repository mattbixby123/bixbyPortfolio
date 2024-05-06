import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ContactPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#d9d9d9',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#003300',
  maxWidth: 650, // Limit width to prevent stretching
  marginTop: theme.spacing(2), // Add top margin
}));

const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& .input-group': {
    marginBottom: '10px', // Adjust spacing between input groups
  },
  '& input, textarea': {
    width: '100%', // Make inputs fill the width of their container
    padding: '5px', // Add padding for better appearance
    marginLeft: '25px', // Adjust spacing between inputs
    boxSizing: 'border-box', // Include padding in width calculation
  },
  '& button': {
    width: '75%', // Make button fill the width of its container
    padding: '10px', // Add padding for better appearance
    cursor: 'pointer', // Change cursor to pointer on hover
    backgroundColor: '#003300', // Change button color
    color: '#d9d9d9', // Change text color
    border: 'none', // Remove border
    borderRadius: '5px', // Add border radius
    marginTop: '1px', // Add top margin ... but there is already the 10px margin under the input boxes
  }
});

function Contact() {
  return (
    <div className="ContactForm">
    <ContactPaper elevation={3}>
      <section>
        <p className="main-text-contact">Please feel free to reach out with any questions, comments, or opportunities that you think align with my portfolio, experiences, or interests.</p>
        <FormContainer>

          <div className="input-group">
            <input type="text" id="name" required placeholder="Your Name" />
          </div>

          <div className="input-group">
            <input type="text" id="number" required placeholder="Phone No." />
          </div>

          <div className="input-group">
            <input type="email" id="email" required placeholder="Email" />
          </div>

          <div className="input-group">
            <textarea id="message" rows="8" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </FormContainer>
      </section>
    </ContactPaper>
    </div>
  );
}

export default Contact;
