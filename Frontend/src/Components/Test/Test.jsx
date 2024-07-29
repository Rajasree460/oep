import React from 'react';
import { Container, Row, Col, Button, Form, Badge } from 'react-bootstrap';

const Test = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h5>Question No. 1</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          <Form>
            <Form.Check 
              type="radio"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              name="question1"
            />
            <Form.Check 
              type="radio"
              label="Aliquam tincidunt mauris eu risus."
              name="question1"
            />
            <Form.Check 
              type="radio"
              label="Vestibulum auctor dapibus neque."
              name="question1"
            />
            <Form.Check 
              type="radio"
              label="Nunc dignissim risus id metus."
              name="question1"
            />
          </Form>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Button variant="primary" className="mr-2">Mark for Review</Button>
          <Button variant="danger" className="mr-2">Clear Response</Button>
          <Button variant="success">Save & Next</Button>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={6}>
          <div className="border p-2">
            <h6>2 Hours 58 Minutes 39 Seconds</h6>
          </div>
        </Col>
        <Col md={6}>
          <div className="border p-2">
            <h6>Question Palette</h6>
            <div>
              <Button variant="light" className="m-1">1</Button>
              <Button variant="light" className="m-1">2</Button>
              <Button variant="light" className="m-1">3</Button>
              <Button variant="light" className="m-1">4</Button>
              <Button variant="light" className="m-1">5</Button>
            </div>
            <div className="mt-3">
              <Badge pill bg="success" className="mr-2">Answered</Badge>
              <Badge pill bg="danger" className="mr-2">Not Answered</Badge>
              <Badge pill bg="warning" className="mr-2">Marked</Badge>
              <Badge pill bg="info" className="mr-2">Answered & Marked for Review</Badge>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
