import React from 'react';
import TestListItem from '../Test/TestListItem';
import { Container } from 'react-bootstrap';

export default function AvailableTest(props) {
  console.log(props.studentTestList);
  const testList = Object.keys(props.studentTestList).map((key) => props.studentTestList[key]);
  console.log(testList)

  const backToDashboard = (e) => {
    e.preventDefault();
    props.openDashboard();
}

  return (
    <Container className='my-5 bg-light pt-2' style={{maxWidth: "100vh", overflowY: "scroll", maxHeight:"60vh"}}>
    <button type="button" className="close" onClick={backToDashboard} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <br/>
                    <h4 className='text-center'>Available Tests</h4>
    <Container className="bg-light p-2">
      
        {testList.map((test) => {
          console.log(test.testId);
          return (
            <TestListItem key={test.testId} test={test} />
          )
        })}
    </Container>
    
    </Container>
  )
}
