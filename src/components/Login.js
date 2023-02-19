import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../redux/userSlice'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password).then((res) => {
            dispatch(login({ email: res.user.email, isLoggedin: true }));
            navigate("/dashboard");
        }).catch((error)=> {
            console.log(error.message);
            alert("Email ID or Password is Incorrect");
        })
    }

    return (
        <div className='mt-5 loginForm'>
            <h2 className='text-center'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type="email" className='form-control' placeholder="Enter Email" onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type="password" className='form-control' placeholder="Enter Password" minLength="6" onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className=''>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </div>
            </form>
            <p className='mt-3 text-end'>Don't have an account? <a href="/register">Register</a></p>
        </div>
    )
}

export default Login;