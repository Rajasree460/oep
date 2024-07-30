import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Main } from './Components/Main';
import StudentLogin from './Components/StudentLogin';
import AdminLogin from './Components/AdminLogin';
import RegisterStudent from './Components/RegisterStudent';
import Header from './Components/Header';
import StudentDashboard from './Components/StudentDashboard';
import AdminDashboard from './Components/AdminDashboard';
import StudentProfile from './Components/StudentDashboard/StudentProfile';
import AvailableTest from './Components/StudentDashboard/AvailableTest';
import TrackRecords from './Components/StudentDashboard/TrackRecords';
import CreateTest from './Components/AdminDashboard/CreateTest';
import ViewStudent from './Components/ViewStudent';
import Test from './Components/Test/Test'; // General Test component
import TestE from './Components/Test/TestE'; // English Test component
import TestM from './Components/Test/TestM'; // Math Test component

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [adminId, setAdminId] = useState(null);
  const [studentName, setStudentName] = useState(null);

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/");
  };

  const loginStudent = (email, pass) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, pass })
    };

    fetch('/portal/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.studentId) {
          setIsLoggedIn(true);
          setIsAdmin(false);
          setStudentId(data.studentId);
          setStudentName(data.studentName);
          navigate("/student-dashboard");
        } else {
          alert("Username/Password not correct");
        }
      });
  };

  const loginAdmin = (name, pass) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adminName: name, pass })
    };

    fetch('/portal/admin-login', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.adminId) {
          setIsLoggedIn(true);
          setIsAdmin(true);
          setAdminId(data.adminId);
          navigate("/admin-dashboard");
        } else {
          alert("Adminname/Password not correct");
        }
      });
  };

  const registerStudent = (student) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    };

    fetch('/portal/create-student', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data > 0) {
          alert("Registration Successful!!");
          navigate("/");
        } else {
          alert("Registration unsuccessful, please try again.");
        }
      });
  };

  const saveStudentDetails = (student) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    };

    fetch('/portal/edit-student-details', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.studentId === studentId) {
          alert("Details saved successfully!");
          setStudentName(data.studentName);
          navigate("/student-dashboard/student-profile");
        } else {
          alert("Failed to save changes, please try again.");
        }
      });
  };

  const openDashboard = () => {
    navigate('/student-dashboard');
  };

  const openAdminDashboard = () => {
    navigate('/admin-dashboard');
  };

  const availableTest = () => {
    navigate('/student-dashboard/available-test');
  };

  const createTest = () => {
    navigate('/admin-dashboard/create-new-test');
  };

  const saveTest = (test) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(test)
    };

    fetch('/portal/create-test', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data > 0) {
          alert("Test Created Successfully!!");
          navigate("/admin-dashboard");
        } else {
          alert("Test not created, please try again.");
        }
      });
  };

  return (
    <>
      <Header 
        title="Online Exam Portal" 
        isLoggedIn={isLoggedIn} 
        isAdmin={isAdmin} 
        logout={logout} 
        studentName={studentName} 
      />
      <div className="myImg">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/student-login' element={<StudentLogin loginStudent={loginStudent} />} />
          <Route path='/admin-login' element={<AdminLogin loginAdmin={loginAdmin} />} />
          <Route path='/register-student' element={<RegisterStudent registerStudent={registerStudent} />} />
          <Route path='/student-dashboard' element={<StudentDashboard openProfile={() => navigate('/student-dashboard/student-profile')} availableTest={availableTest} />} />
          <Route path='/admin-dashboard' element={<AdminDashboard createTest={createTest} />} />
          <Route path='/admin-dashboard/create-new-test' element={<CreateTest adminId={adminId} saveTest={saveTest} openAdminDashboard={openAdminDashboard} />} />
          <Route path='/student-dashboard/student-profile' element={<StudentProfile saveStudentDetails={saveStudentDetails} openDashboard={openDashboard} />} />
          <Route path='/student-dashboard/available-test' element={<AvailableTest />} />
          <Route path='/student-dashboard/track-records' element={<TrackRecords />} />
          <Route path="/view-student/:studentId" element={<ViewStudent />} />
          <Route path="/test/gk" element={<Test />} /> {/* General Test component */}
          <Route path="/test/english" element={<TestE />} /> {/* English Test component */}
          <Route path="/test/math" element={<TestM />} /> {/* English Test component */}
        </Routes>
      </div>
    </>
  );
}

export default App;
