import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onRegister = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password).then((res) => {
            dispatch(login({ email: res.user.email, isLoggedin: true }));
            navigate("/dashboard")
        })
    }

    return (
        <div className='mt-5 registerForm'>
            <h2 className='text-center'>Register</h2>
            <form onSubmit={onRegister}>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type="email" className='form-control' placeholder="Enter Email" onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type="password" className='form-control' placeholder="Enter Password" minLength="6" onChange={e => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className='btn btn-primary'>Register</button>
            </form>
        </div>
    )
}

export default Register;