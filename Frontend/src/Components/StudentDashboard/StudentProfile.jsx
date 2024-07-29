import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function StudentProfile(props) {


    let formData = { ...props.student };
    const [student, setStudent] = useState({ ...props.student });
    const [isFormDisabled, setIsFormDisabled] = useState(true)

    const editForm = () => {
        setIsFormDisabled(false);
    }

    const resetForm = () => {
        setStudent({ ...formData });
        setIsFormDisabled(true);
    }

    const saveDetails = (e) => {
        e.preventDefault();
        props.saveStudentDetails(student);
        setIsFormDisabled(true);
    }

    const backToDashboard = (e) => {
        e.preventDefault();
        props.openDashboard();
    }

    return (
        <Container className='sm my-5'>
            <Card className='bg-light'>
                <Card.Header className="lg">
                    <b>User details</b>
                    <button type="button" className="close" onClick={backToDashboard} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Card.Header>
                <Card.Body className='p-3'>
                    <Row className='mx-5 mb-3'>
                        <Col>
                            <Form.Label htmlFor="inputName">Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputName"
                                value={student.studentName}
                                onChange={(e) => setStudent({ ...student, studentName: e.target.value })}
                                aria-describedby="Student Name"
                                disabled={isFormDisabled ? true : false}
                            />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="inputEmail">Email Address</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputEmail"
                                value={student.email}
                                onChange={(e) => setStudent({ ...student, email: e.target.value })}
                                aria-describedby="Email Address"
                                disabled={true}
                            />
                        </Col>
                    </Row>
                    <Row className='mx-5 mb-3'>
                        <Col>
                            <Form.Label htmlFor="inputMobno">Mobile No.</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputMobno"
                                value={student.mobNo}
                                onChange={(e) => setStudent({ ...student, mobNo: e.target.value })}
                                aria-describedby="Mobile No"
                                disabled={isFormDisabled ? true : false}
                            />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="inputPass">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPass"
                                value={student.pass}
                                onChange={(e) => setStudent({ ...student, pass: e.target.value })}
                                aria-describedby="Mobile No"
                                disabled={isFormDisabled ? true : false}
                            />
                        </Col>
                    </Row>
                    <Row className='mx-5 mb-3'>
                        <Col>
                            <Form.Label htmlFor="inputCity">City</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputCity"
                                value={student.address.city}
                                onChange={(e) => setStudent({ ...student, address: { ...student.address, city: e.target.value } })}
                                aria-describedby="Address City"
                                disabled={isFormDisabled ? true : false}
                            />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="inputState">State</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputState"
                                value={student.address.state}
                                onChange={(e) => setStudent({ ...student, address: { ...student.address, state: e.target.value } })}
                                aria-describedby="Address State"
                                disabled={isFormDisabled ? true : false}
                            />
                        </Col>
                    </Row>
                    <Row className='mx-5 mb-3'>
                        <Col>
                            <Form.Label htmlFor="inputCountry">Country</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputCountry"
                                value={student.address.country}
                                onChange={(e) => setStudent({ ...student, address: { ...student.address, country: e.target.value } })}
                                aria-describedby="Address Country"
                                disabled={isFormDisabled ? true : false}
                            />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="inputZip">Zipcode</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputZip"
                                value={student.address.zip}
                                onChange={(e) => setStudent({ ...student, address: { ...student.address, zip: e.target.value } })}
                                aria-describedby="Address Zipcode"
                                disabled={isFormDisabled ? true : false}
                            />
                        </Col>
                    </Row>
                </Card.Body>
                <Row className='mx-5 mb-5 text-center'>
                    {isFormDisabled ? <Col>
                        <Button variant="primary" size="lg" onClick={editForm}>Edit</Button>
                    </Col> : <><Col>
                        <Button variant="primary" size="lg" onClick={saveDetails}>Save</Button>
                    </Col><Col>
                            <Button variant="primary" size="lg" onClick={resetForm}>Cancel</Button>
                        </Col></>}
                </Row>

            </Card>
        </Container>
    )
}
