import './App.css';
import { Main } from './Components/Main';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import StudentLogin from './Components/StudentLogin';
import AdminLogin from './Components/AdminLogin';
import RegisterStudent from './Components/RegisterStudent';
import Header from './Components/Header';
import StudentDashboard from './Components/StudentDashboard';
import AdminDashboard from './Components/AdminDashboard';
import { useState } from 'react';
import StudentProfile from './Components/StudentDashboard/StudentProfile';
import AvailableTest from './Components/StudentDashboard/AvailableTest';
import TrackRecords from './Components/StudentDashboard/TrackRecords';
import CreateTest from './Components/AdminDashboard/CreateTest';

function App() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [studentId, setstudentId] = useState(null);
  let [student, setStudent] = useState({
    studentName: "",
    email: "",
    mobNo: null,
    pass: "",
    address: {
      city: "",
      state: "",
      country: "",
      zip: null
    }
  });
  let [studentTestList, setstudentTestList] = useState(null);
  const [adminId, setadminId] = useState(null);
  const [studentName, setstudentName] = useState(null);

  const logout = () => {
    setIsLoggedIn(false);
    setisAdmin(false);
    navigate("/");

  }

  const loginStudent = (email, pass) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        pass: pass
      })
    };


    fetch('/portal/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.studentId) {
          setIsLoggedIn(true);
          setisAdmin(false);
          setstudentId(data.studentId);
          setstudentName(data.studentName);
          navigate("/student-dashboard");
        } else {
          setIsLoggedIn(false);
          setisAdmin(false);
          alert("Username/Password not correct");
        }
      });


  }

  const loginAdmin = (name, pass) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        adminName: name,
        pass: pass
      })
    };
    fetch('/portal/admin-login', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.adminId) {
          setIsLoggedIn(true);
          setisAdmin(true);
          setadminId(data.adminId);
          navigate("/admin-dashboard");
        } else {
          setIsLoggedIn(false);
          setisAdmin(false);
          alert("Adminname/Password not correct");
        }
      });
  }

  const registerStudent = (student) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...student
      })
    };
    fetch('/portal/create-student', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data > 0) {
          alert("Registration Successful!!");
          navigate("/");
        } else {
          alert("Please retry, registration unsuccessful.");
        }
      });
  }

  const openProfile = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentId: studentId
      })
    };
    fetch('/portal/student-details', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.studentId) {
          setStudent({
            ...student,
            studentName: data.studentName,
            studentId: data.studentId,
            email: data.email,
            mobNo: data.mobNo,
            pass: data.pass,
            address: {
              ...student.address,
              addrId: data.address.addrId,
              city: data.address.city,
              state: data.address.state,
              country: data.address.country,
              zip: data.address.zip
            }
          });
          navigate("/student-dashboard/student-profile");
        } else {
          alert("We're facing some network issues!");
        }
      });
  }

  const saveStudentDetails = (student) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...student
      })
    };
    fetch('/portal/edit-student-details', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.studentId === studentId) {
          alert("Details saved successfully!");
          setstudentName(data.studentName);
          openProfile();
        } else {
          alert("Please retry, failed to save changes.");
        }
      });
  }

  const openDashboard = () => {
    navigate('/student-dashboard');
  }

  const openAdminDashboard = () => {
    navigate('/admin-dashboard');
  }


  const availableTest = () => {
    fetch('/portal/all-test-list')
      .then(response => response.json())
      .then(data => {
        if (data.testDTOList) {
          setstudentTestList({ ...data.testDTOList })
          navigate("/student-dashboard/available-test");
        } else {
          alert("No tests available right now.");
        }
      });
  }

  const createTest = () => {
    navigate('/admin-dashboard/create-new-test');
  }

  const saveTest = (test) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...test
      })
    };

    fetch('/portal/create-test', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data > 0) {
          alert("Test Created Successful!!");
          navigate("/admin-dashboard");
        } else {
          alert("Please retry, test not saved.");
        }
      });
  }

  return (
    <>
      <Header title="Online Exam Portal" isLoggedIn={isLoggedIn} isAdmin={isAdmin} logout={logout} studentName={studentName} />
      <div className="myImg">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/student-login' element={<StudentLogin loginStudent={loginStudent} />} />
        <Route path='/admin-login' element={<AdminLogin loginAdmin={loginAdmin} />} />
        <Route path='/register-student' element={<RegisterStudent registerStudent={registerStudent} />} />
        <Route path='/student-dashboard' element={<StudentDashboard openProfile={openProfile} availableTest={availableTest} />} />
        <Route path='/admin-dashboard' element={<AdminDashboard createTest={createTest} />} />
        <Route path='/admin-dashboard/create-new-test' element={<CreateTest adminId={adminId} saveTest={saveTest} openAdminDashboard={openAdminDashboard}/>} />
        <Route
          path='/student-dashboard/student-profile'
          element={<StudentProfile
            student={student}
            saveStudentDetails={saveStudentDetails}
            openDashboard={openDashboard} />} />
        <Route
          path='/student-dashboard/available-test'
          element={<AvailableTest
            studentTestList={studentTestList}
            openDashboard={openDashboard} />} />
        <Route path='/student-dashboard/track-records' element={<TrackRecords />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
