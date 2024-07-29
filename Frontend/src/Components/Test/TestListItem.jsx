import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'

export default function TestListItem(props) {
    return (
        <Card className='my-3 rounded-end'>
            <Card.Body className='align-middle'>
                <Row>
                    <Col>
                        <p>{props.test.testName}</p>
                    </Col>
                    <Col>
                        <Button className='float-right' variant='primary'> Register</Button>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}
