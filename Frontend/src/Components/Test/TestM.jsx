import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Badge, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 'q1',
    question: 'What is the result of 5 + 3?',
    options: ['6', '7', '8', '9']
  },
  {
    id: 'q2',
    question: 'Solve for x: 2x - 4 = 10',
    options: ['x = 4', 'x = 5', 'x = 6', 'x = 7']
  },
  {
    id: 'q3',
    question: 'What is the area of a rectangle with length 8 cm and width 5 cm?',
    options: ['30 cm²', '35 cm²', '40 cm²', '45 cm²']
  },
  {
    id: 'q4',
    question: 'Find the square root of 144.',
    options: ['10', '12', '14', '16']
  },
  {
    id: 'q5',
    question: 'What is the value of 7 × (6 - 2)?',
    options: ['20', '24', '28', '32']
  }
];

const TestM = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [isMarkedForReview, setIsMarkedForReview] = useState(Array(questions.length).fill(false));
  const [timer, setTimer] = useState(10719); // Time in seconds (2 hours 58 minutes 39 seconds)
  const navigate = useNavigate();

  // Timer function
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTime => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.id);
  };

  const handleMarkForReview = () => {
    const updatedMarks = [...isMarkedForReview];
    updatedMarks[currentQuestionIndex] = !isMarkedForReview[currentQuestionIndex];
    setIsMarkedForReview(updatedMarks);

    alert(isMarkedForReview[currentQuestionIndex] ? 'Question unmarked for review.' : 'Question marked for review.');
  };

  const handleClearResponse = () => {
    setSelectedOption(null);
    alert('Response cleared.');
  };

  const handleSaveAndNext = () => {
    const updatedAnswers = [...answers];
    if (selectedOption !== null) {
      updatedAnswers[currentQuestionIndex] = selectedOption;
      alert('Response saved.');
    } else {
      // If no response is selected, mark as not answered
      if (updatedAnswers[currentQuestionIndex] === null) {
        alert('Question not answered.');
      }
    }
    setAnswers(updatedAnswers);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(updatedAnswers[currentQuestionIndex + 1]);
    } else {
      alert('You have completed the test.');
      navigate('/test/summary'); // Navigate to a summary page or wherever you want
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours} Hours ${minutes} Minutes ${secs} Seconds`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  const getButtonVariant = (index) => {
    if (answers[index] !== null) {
      return isMarkedForReview[index] ? 'warning' : 'success'; // Answered and marked for review vs. answered
    } else {
      return isMarkedForReview[index] ? 'info' : 'light'; // Not answered but marked vs. not answered
    }
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Header>
          <h5>Math Test</h5>
        </Card.Header>
        <Card.Body>
          {/* Question Section */}
          <Row className="mb-4">
            <Col>
              <h5>Question No. {currentQuestionIndex + 1}</h5>
              <p>{currentQuestion.question}</p>
              <Form>
                {currentQuestion.options.map((option, index) => (
                  <Form.Check 
                    key={index}
                    type="radio"
                    label={option}
                    name={`question${currentQuestionIndex}`}
                    id={`option${index}`}
                    checked={selectedOption === `option${index}`}
                    onChange={handleOptionChange}
                  />
                ))}
              </Form>
            </Col>
          </Row>
          
          {/* Action Buttons */}
          <Row className="mb-4">
            <Col>
              <Button 
                variant={isMarkedForReview[currentQuestionIndex] ? "warning" : "primary"} 
                className="me-2" 
                onClick={handleMarkForReview}
              >
                {isMarkedForReview[currentQuestionIndex] ? "Unmark for Review" : "Mark for Review"}
              </Button>
              <Button variant="danger" className="me-2" onClick={handleClearResponse}>Clear Response</Button>
              <Button variant="success" onClick={handleSaveAndNext}>Save & Next</Button>
            </Col>
          </Row>
          
          {/* Timer and Question Palette */}
          <Row>
            <Col md={6} className="mb-4">
              <div className="border p-3">
                <h6>Time Remaining</h6>
                <div className="text-center">
                  <h5>{formatTime(timer)}</h5>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="border p-3">
                <h6>Question Palette</h6>
                <div className="d-flex flex-wrap">
                  {questions.map((_, index) => (
                    <Button 
                      key={index} 
                      variant={getButtonVariant(index)} 
                      className="m-1"
                      onClick={() => {
                        setCurrentQuestionIndex(index);
                        setSelectedOption(answers[index]);
                      }}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
                <div className="mt-3">
                  <Badge pill bg="success" className="me-2">Answered</Badge>
                  <Badge pill bg="danger" className="me-2">Not Answered</Badge>
                  <Badge pill bg="warning" className="me-2">Marked</Badge>
                  <Badge pill bg="info" className="me-2">Answered & Marked for Review</Badge>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TestM;
