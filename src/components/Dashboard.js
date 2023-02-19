import React from 'react';
import { auth } from './Firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { login, userSelector } from '../redux/userSlice';

const Dashboard = () => {

    const userData = useSelector(userSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        signOut(auth);
        dispatch(login({email: '', isLoggedin : false}));
        navigate("/login");
    }

    return (
        <div className='mt-5'>
            <h2>Welcome! {userData.email}</h2>
            <button className='btn btn-danger' onClick={() => logOut()}>Sign Out</button>
        </div>
    )
}
 


export default Dashboard;