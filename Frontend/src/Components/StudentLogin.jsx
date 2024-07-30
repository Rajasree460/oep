import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentLogin(props) {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if (emailAddress && password) {
            // Simulate successful login
            navigate('/student-dashboard');
            setEmailAddress("");
            setPassword("");
        } else {
            // Handle empty fields or show an error message
        }
    };

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-7 mx-auto" align="center">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Student Login</h1>
                                </div>
                                <form className="user" onSubmit={submit} method="post" autoComplete="off">
                                    <div className="form-group">
                                        <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className="form-control form-control-user" id="emailAddress"
                                            placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-user"
                                            id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                    </div>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <p className="medium">New Student?<a href="/register-student"> Register now.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
