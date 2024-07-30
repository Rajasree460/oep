import React from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const testList = [
  { name: 'GK Test', description: 'A test to assess your GK skills.' },
  { name: 'English Test', description: 'A test to assess your knowledge in English.' },
  { name: 'Math Test', description: 'A test to evaluate your understanding of math.' },
];

const AvailableTest = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartTest = (testName) => {
    // Navigate to the appropriate test page based on the test name
    if (testName === 'English Test') {
      navigate('/test/english'); // Route to the TestE component
    } else if (testName === 'GK Test') {
      navigate('/test/gk'); // Route to the Test component
    } else {
      navigate('/test/math'); // Route to the TestM component
    }
  };

  return (
    <Container className='my-5'>
      <Row>
        {testList.length > 0 ? (
          testList.map((test, index) => (
            <Card key={index} className='mb-3'>
              <Card.Body>
                <Card.Title>{test.name}</Card.Title>
                <Card.Text>{test.description}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleStartTest(test.name)}
                >
                  Start Test
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card>
            <Card.Body>
              <Card.Text>No tests available at the moment.</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default AvailableTest;
