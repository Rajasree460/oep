import React, { useState } from 'react';
import CreateTest from './CreateTest';
import TestListItem from './TestListItem';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function TestManager() {
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  const handleSaveTest = (newTest) => {
    setTests([...tests, newTest]);
  }

  const openAdminDashboard = () => {
    navigate('/admin-dashboard');
  }

  return (
    <Container>
      <CreateTest adminId={1} onSave={handleSaveTest} openAdminDashboard={openAdminDashboard} />
      {tests.map((test, index) => (
        <TestListItem key={index} test={test} />
      ))}
    </Container>
  );
}
