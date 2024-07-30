import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Main = () => {
    return (
        <Container className='text-center my-5' >
            <Card  style={{backgroundColor: 'rgba(255, 255, 255, .7)'}}>
                <Card.Header className='text-center'style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                    <h2>Welcome to the Exam Portal!</h2>
                </Card.Header>
                <Card.Body className='text-center' style={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
                    <Row className='p-5'>
                        <Col></Col>
                        <Col>
                            <Link to="/student-login"><Button variant="primary" size="lg">Student Login</Button></Link>
                        </Col>

                        <Col>
                            <Link to="/admin-login"><Button variant="primary" size="lg">Admin Login</Button></Link>
                        </Col>
                        
                        <Col></Col>
                    </Row>
                    <Row className='text-center'>
                        <Col>
                        <h5 className="text-center">New Student?<Link to="/register-student"> Register now.</Link></h5>
                        </Col>
                        
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
