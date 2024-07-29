import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'

export default function CreateTest(props) {

    const [testForm, setTestForm] = useState({
        admin: {
            adminId: props.adminId
        },
        testName: "",
        questionList: []
    });

    const [questions, setQuestions] = useState([]);

    const submit = (e) => {
        console.log(testForm);
        e.preventDefault();
        props.saveTest(testForm);
    }

    useEffect(() => {
        setTestForm(prevTestForm => ({ ...prevTestForm, questionList: questions }));
    }, [questions]);

    const handleFormChange = (index, event) => {
        event.preventDefault();
        let data = [...questions];
        data[index][event.target.name] = event.target.value;
        setQuestions(data);
    }

    const handleFormChoiceChange = (index, event, choiceNo) => {
        event.preventDefault();
        let data = [...questions];
        data[index]["choicesList"][choiceNo] = { choiceDesc: event.target.value, ans: 0 };
        setQuestions(data);
    }

    const handleAnswerChange = (index, event) => {
        event.preventDefault();
        let data = [...questions];
        for (let i = 0; i < 4; i++) {
            data[index]["choicesList"][i] = { ...(data[index]["choicesList"][i]), ans: 0 };
        }
        data[index]["choicesList"][event.target.value - 1] = { ...(data[index]["choicesList"][event.target.value - 1]), ans: 1 };
        setQuestions(data);
    }

    const addQuestions = (e) => {
        e.preventDefault();
        let newQues = {
            quesDesc: "",
            choicesList: [
                {
                    choiceDesc: "",
                    ans: 0
                },
                {
                    choiceDesc: "",
                    ans: 0
                },
                {
                    choiceDesc: "",
                    ans: 0
                },
                {
                    choiceDesc: "",
                    ans: 0
                }
            ]
        }

        setQuestions([...questions, newQues]);
    }

    const removeFields = (e, index) => {
        e.preventDefault();
        let data = [...questions];
        data.splice(index, 1)
        setQuestions(data)
    }

    const openDashboard = (e) => {
        props.openAdminDashboard();
        e.preventDefault();
    }

    return (
        <Container className='my-5' style={{backgroundColor: 'rgba(255, 255, 255, 0.9)', overflowY: "scroll", maxHeight:"70vh"}}>
            <Form onSubmit={submit}>
                <Card className='my-3'>
                    <Card.Body>
                        <FormLabel htmlFor='testName'><h4>Test Name:</h4></FormLabel>
                        <Form.Control
                            type="text"
                            id="testName"
                            value={testForm.testName}
                            onChange={(e) => setTestForm({ ...testForm, testName: e.target.value })}
                            placeholder="Give a name to your test.."
                        />
                    </Card.Body>
                </Card>

                {questions.map((input, index) => {
                    return (<div key={index}>
                        <Card className='m-1 p-2'>
                            <Card.Header>
                                <Row className="justify-content-center">
                                    <Col md="auto">
                                        <p>{index + 1}.</p>
                                    </Col>
                                    <Col>
                                        <FormLabel htmlFor='quesDesc'></FormLabel>
                                        <Form.Control
                                            type="text"
                                            id="quesDesc"
                                            name="quesDesc"
                                            value={input.quesDesc}
                                            onChange={event => handleFormChange(index, event)}
                                            placeholder="Enter question text"
                                        /></Col>
                                    <Col md="auto">
                                        <button className="float-right mb-2 btn-sm btn-danger" onClick={(e) => removeFields(e, index)}>Delete</button></Col>
                                </Row>

                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            id="choice1"
                                            name="choice1"
                                            value={input.choicesList[0].choiceDesc}
                                            onChange={event => handleFormChoiceChange(index, event, 0)}
                                            placeholder="Option 1 text"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            id="choice2"
                                            name="choice2"
                                            value={input.choicesList[1].choiceDesc}
                                            onChange={event => handleFormChoiceChange(index, event, 1)}
                                            placeholder="Option 2 text"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            id="choice3"
                                            name="choice3"
                                            value={input.choicesList[2].choiceDesc}
                                            onChange={event => handleFormChoiceChange(index, event, 2)}
                                            placeholder="Option 3 text"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            id="choice4"
                                            name="choice4"
                                            value={input.choicesList[3].choiceDesc}
                                            onChange={event => handleFormChoiceChange(index, event, 3)}
                                            placeholder="Option 4 text"
                                        />
                                    </Col>
                                </Row>

                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col>
                                        <Form.Select className='bg-light' onChange={event => handleAnswerChange(index, event)}>
                                            <option>Select Answer</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </div>
                    );
                })}
                <Row className='py-2 text-center'>
                    <Col>
                        <button className="btn btn-primary" onClick={addQuestions}>Add More Question</button>
                    </Col>
                </Row>
                <Row className='py-2 text-center'>
                    <Col>
                        <button className="btn btn-primary" type='submit' onClick={submit}>Save Test</button>
                    </Col>
                    <Col>
                        <button className="btn btn-danger" onClick={openDashboard}>Cancel</button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
