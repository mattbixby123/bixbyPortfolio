import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const formData = {
        name: form.name.value,
        number: form.phone.value,
        email: form.email.value,
        message: form.message.value
      };

      const response = await emailjs.send('service_d4ree3y', 'template_44npnk9', formData, 'zzimTjXZcCaKXqd7a');
      console.log('Email sent successfully:', response);
      setOpen(true);

      // Delay for a moment before redirecting
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally, display an error message
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, my: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" align="center" gutterBottom color="#003300">
          Contact Me
        </Typography>
        <Typography variant="body1" align="center" paragraph color="#181818">
          Please feel free to reach out with any questions, comments, or opportunities that you think align with my portfolio, experiences, or interests.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{ backgroundColor: "#d9d9d9" }}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            autoComplete="name"
            variant="outlined"
          />
          <TextField
            sx={{ backgroundColor: "#d9d9d9" }}
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
            variant="outlined"
          />
          <TextField
            sx={{ backgroundColor: "#d9d9d9" }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            variant="outlined"
          />
          <TextField
            sx={{ backgroundColor: "#d9d9d9" }}
            margin="normal"
            required
            fullWidth
            name="message"
            label="Your Message"
            id="message"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: '#003300',
              color: '#d9d9d9',
              '&:hover': { bgcolor: '#004400' }
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        message="Email sent successfully!"
      />
    </Container>
  );
};

export default ContactForm;