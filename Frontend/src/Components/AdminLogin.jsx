import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import camicon from '../Resources/camicon.png';
import Swal from 'sweetalert2';

export default function AdminLogin(props) {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [isFaceLogin, setIsFaceLogin] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    useEffect(() => {
        if (showCamera && videoRef.current) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    streamRef.current = stream; // Save the stream reference
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                })
                .catch(err => {
                    console.error('Error accessing camera: ', err);
                });
        }

        // Cleanup function to stop the media stream
        return () => {
            if (streamRef.current) {
                const tracks = streamRef.current.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [showCamera]);

    const submit = (e) => {
        e.preventDefault();
        if (!adminName || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in both fields!',
            });
        } else {
            props.loginAdmin(adminName, password);
            setAdminName('');
            setPassword('');
            Swal.fire({
                icon: 'success',
                title: 'Successfully Logged in!',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                navigate('/admin-dashboard');
            });
        }
    };

    const handleFaceLogin = () => {
        setIsFaceLogin(true);
        setTimeout(() => {
            setShowCamera(true);
            setTimeout(() => {
                // Stop the media stream and redirect
                if (streamRef.current) {
                    const tracks = streamRef.current.getTracks();
                    tracks.forEach(track => track.stop());
                }
                setShowCamera(false);
                setIsFaceLogin(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Logged in!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/admin-dashboard');
                });
            }, 3000); // Adjust to match your desired time before redirecting
        }, 2000); // Adjust to match your desired delay before showing the camera
    };

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)' }}>
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
                                        <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <a className="small" href="/admin-login">Forgot Password?</a>
                                </div>
                                <div className="form-group mt-3">
                                    <button onClick={handleFaceLogin} className="btn btn-secondary btn-user btn-block">Face Login</button>
                                    <div className="mt-3" style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto' }}>
                                        {!showCamera && (
                                            <img src={camicon} alt="Camera Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                        )}
                                        {showCamera && (
                                            <video ref={videoRef} style={{ width: '100%', height: '100%', borderRadius: '50%', position: 'absolute', top: 0, left: 0 }} />
                                        )}
                                        {isFaceLogin && !showCamera && (
                                            <div style={{ textAlign: 'center', position: 'absolute', bottom: 0, left: 0, right: 0 }}>Loading...</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
