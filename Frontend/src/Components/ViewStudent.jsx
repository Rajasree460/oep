import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ViewStudent() {
  const { studentId } = useParams(); // Get the student ID from the URL

  // Dummy student data for demonstration
  const student = {
    id: studentId,
    name: 'John Doe',
    email: 'johndoe@example.com',
    registrationDate: '2023-01-15',
  };

  return (
    <Container className='my-5'>
      <Row className='justify-content-center'>
        <Card className='shadow-lg text-center' style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>Student Details</Card.Title>
            <Card.Text><strong>ID:</strong> {student.id}</Card.Text>
            <Card.Text><strong>Name:</strong> {student.name}</Card.Text>
            <Card.Text><strong>Email:</strong> {student.email}</Card.Text>
            <Card.Text><strong>Registration Date:</strong> {student.registrationDate}</Card.Text>
            <Button variant="primary" onClick={() => window.history.back()}>Back</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
