import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container, Row } from 'react-bootstrap';
import userprofie from '../Resources/user-profile.png';
import testlist from '../Resources/list-of-test.png';
import performance from '../Resources/performance.png';


export default function StudentDashboard(props) {

  const styleImg = {
    width: "18rem",
    height: "18rem",
    padding: "3rem"
  };

  const openProfile = (e) => {
    e.preventDefault();
    props.openProfile();
  }

  const availableTest = (e) => {
    e.preventDefault();
    props.availableTest();
  }

  const trackRecord = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Container className='my-5 px-5'>
        <Row className='mx-1'>
          <Card className='shadow-lg text-center mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={userprofie} style={styleImg} />
            <Card.Body>
              <Card.Title>Your Profile</Card.Title>
              <Card.Text>
                View or edit details in your student profile.
              </Card.Text>
              <Button variant="primary" onClick={openProfile}>Open Profile</Button>
            </Card.Body>
          </Card>

          <Card className='shadow-lg text-center mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={testlist} style={styleImg} />
            <Card.Body>
              <Card.Title>View Available Tests</Card.Title>
              <Card.Text>
                Check out latest list of available tests for you.
              </Card.Text>
              <Button variant="primary" onClick={availableTest}>Available Tests</Button>
            </Card.Body>
          </Card>

          <Card className='shadow-lg text-center mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={performance} style={styleImg} />
            <Card.Body>
              <Card.Title>Track Records</Card.Title>
              <Card.Text>
                Under Maintenance. Will be soon available.
              </Card.Text>
              <Button variant="secondary" onClick={trackRecord}>Unavailable</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}
