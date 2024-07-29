import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin(props) {
    const [adminName, setAdminName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if(!adminName || !password){

        }else{
            props.loginAdmin(adminName, password);
            setAdminName("");
            setPassword("");
        }
    }

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5"  style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter:'blur(10px)'}}>
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-7 mx-auto" align="center">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                                </div>
                                <form className="user" onSubmit={submit} method="post" autoComplete="off">
                                    <div className="form-group">
                                        <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} className="form-control form-control-user" id="adminName"
                                            placeholder="Admin Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-user"
                                            id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <button onClick={() => navigate('/admin-dashboard')} type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
