import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function RegisterStudent(props) {
    const validationSchema = Yup.object({
        studentName: Yup.string().required("First name is required"),
        email: Yup.string().email("Invalid Email format").required("Email is required"),
        mobNo: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Mobile number is required"),
        pass: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    });

    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        mobNo: "",
        pass: "",
        address: {
            city: "",
            state: "",
            country: "",
            zip: ""
        }
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate(student, { abortEarly: false });
            console.log("Form submitted successfully");

            // Simulate successful registration and navigate to student dashboard
            navigate('/student-dashboard'); // Redirect to student dashboard
        } catch (error) {
            const newError = {};

            error.inner.forEach(err => {
                newError[err.path] = err.message;
            });

            setErrors(newError);
            console.log(newError);
        }
    };

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Student Registration</h1>
                                </div>
                                <form className="user" onSubmit={submit} method="post" autoComplete="off">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={student.studentName}
                                            onChange={(e) => setStudent({ ...student, studentName: e.target.value })}
                                            className="form-control form-control-user"
                                            id="studentName"
                                            placeholder="Student Name"
                                            style={{ marginBottom: '1rem' }}
                                        />
                                        <div style={{ color: 'red', fontSize: '15px', marginBottom: '1rem' }}>{errors.studentName}</div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            value={student.email}
                                            onChange={(e) => setStudent({ ...student, email: e.target.value })}
                                            className="form-control form-control-user"
                                            id="exampleInputEmail"
                                            placeholder="Email Address"
                                            style={{ marginBottom: '1rem' }}
                                        />
                                        <div style={{ color: 'red', fontSize: '15px', marginBottom: '1rem' }}>{errors.email}</div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                value={student.mobNo}
                                                onChange={(e) => setStudent({ ...student, mobNo: e.target.value })}
                                                className="form-control form-control-user"
                                                id="mobileNo"
                                                placeholder="Mobile no."
                                                style={{ marginBottom: '1rem' }}
                                            />
                                            <div style={{ color: 'red', fontSize: '15px', marginBottom: '1rem' }}>{errors.mobNo}</div>
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="password"
                                                value={student.pass}
                                                onChange={(e) => setStudent({ ...student, pass: e.target.value })}
                                                className="form-control form-control-user"
                                                id="password"
                                                placeholder="Password"
                                                style={{ marginBottom: '1rem' }}
                                            />
                                            <div style={{ color: 'red', fontSize: '15px', marginBottom: '1rem' }}>{errors.pass}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                value={student.address.city}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, city: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="city"
                                                placeholder="City"
                                                style={{ marginBottom: '1rem' }}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                value={student.address.state}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, state: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="state"
                                                placeholder="State"
                                                style={{ marginBottom: '1rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                value={student.address.country}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, country: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="country"
                                                placeholder="Country"
                                                style={{ marginBottom: '1rem' }}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                value={student.address.zip}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, zip: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="zip"
                                                placeholder="Zipcode"
                                                style={{ marginBottom: '1rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <button type="submit" className="btn btn-primary btn-user btn-block" style={{ marginBottom: '1rem' }}>Register</button>
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <button type="reset" className="btn btn-secondary btn-user btn-block" style={{ marginBottom: '1rem' }}>Reset</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <Link className="medium" to="/student-login">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
