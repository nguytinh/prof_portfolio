import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import "../styles/Contact.css";
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log('Success:', result.text);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
    }, (error) => {
        console.log('Error:', error.text);
    });
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{
    duration: 0.3, 
    ease: "easeInOut" 
  }}
    >
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md="8">
          <Card style={{ border: 'none' }}>
            <Card.Body>
              <Card.Title className="text-center">Contact</Card.Title>
              <br></br>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ border: '1px solid #ced4da', borderRadius: '0' }}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ border: '1px solid #ced4da', borderRadius: '0' }}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ border: '1px solid #ced4da', borderRadius: '0' }}
                  />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </motion.div>
  );
}

export default Contact;
