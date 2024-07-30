import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container, Row } from 'react-bootstrap';
import userprofile from '../Resources/user-profile.png';
import testlist from '../Resources/list-of-test.png';
import performance from '../Resources/performance.png';

export default function StudentDashboard(props) {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };

  const styleImg = {
    width: '18rem',
    height: '18rem',
    padding: '3rem'
  };

  const buttonStyle = {
    width: '100%',
    height: '3rem',
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    cursor: 'not-allowed', // Default cursor for disabled buttons
    transition: 'background-color 0.3s ease'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = cardHoverStyle.transform;
    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
  };

  const openProfile = (e) => {
    e.preventDefault();
    props.openProfile(); // Navigate to student profile
  };

  const availableTest = (e) => {
    e.preventDefault();
    props.availableTest(); // Fetch available tests and navigate
  };

  const trackRecord = (e) => {
    e.preventDefault();
  };

  return (
    <Container className='my-5 px-5'>
      <Row className='mx-1'>
        <Card
          className='shadow-lg text-center'
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card.Img variant="top" src={userprofile} style={styleImg} />
          <Card.Body>
            <Card.Title>Your Profile</Card.Title>
            <Card.Text>
              View or edit details in your student profile.
            </Card.Text>
            <Button variant="primary" onClick={openProfile}>Open Profile</Button>
          </Card.Body>
        </Card>

        <Card
          className='shadow-lg text-center'
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card.Img variant="top" src={testlist} style={styleImg} />
          <Card.Body>
            <Card.Title>View Available Tests</Card.Title>
            <Card.Text>
              Check out the latest list of available tests for you.
            </Card.Text>
            <Button variant="primary" onClick={availableTest}>Available Tests</Button>
          </Card.Body>
        </Card>

        <Card
          className='shadow-lg text-center'
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card.Img variant="top" src={performance} style={styleImg} />
          <Card.Body>
            <Card.Title>Track Records</Card.Title>
            <Card.Text>
              Under Maintenance. Will be soon available.
            </Card.Text>
            <Button
              variant="secondary"
              style={buttonStyle}
              onClick={trackRecord}
              onMouseEnter={(e) => e.currentTarget.style.cursor = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z\'/></svg>"), auto'}
              onMouseLeave={(e) => e.currentTarget.style.cursor = 'not-allowed'}
            >
              Unavailable
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
