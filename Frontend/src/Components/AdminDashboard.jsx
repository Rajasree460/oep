import React from 'react';
import { Button, Container, Row, Card } from 'react-bootstrap';
import createTest from '../Resources/create-test.png';
import testlist from '../Resources/list-of-test.png';
import registration from '../Resources/registration.png';

export default function AdminDashboard(props) {

  const styleImg = {
    width: "18rem",
    height: "18rem",
    padding: "3rem"
  };

  const createNewTest = (e) => {
    e.preventDefault();
    props.createTest();
  }

  const createdTests = () => {

  }

  const registeredStudents = () => {

  }

  return (
    <>
      <Container className='my-5 px-5'>
        <Row className='mx-1'>
          <Card className='shadow-lg text-center mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={createTest} style={styleImg} />
            <Card.Body>
              <Card.Title>Create Test</Card.Title>
              <Card.Text>
                Create a new MCQ test for your students.
              </Card.Text>
              <Button variant="primary" onClick={createNewTest}>Create Test</Button>
            </Card.Body>
          </Card>

          <Card className='shadow-lg text-center mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={testlist} style={styleImg} />
            <Card.Body>
              <Card.Title>Created Tests</Card.Title>
              <Card.Text>
                View or edit tests that you have created.
              </Card.Text>
              <Button variant="primary" onClick={createdTests}>Available Tests</Button>
            </Card.Body>
          </Card>

          <Card className='shadow-lg text-center mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={registration} style={styleImg} />
            <Card.Body>
              <Card.Title>Registered Students</Card.Title>
              <Card.Text>
                List of students registered for tests.
              </Card.Text>
              <Button variant="secondary" onClick={registeredStudents}>Unavailable</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}
