import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard";
import Login from './Login';
import Register from './Register';
import { userSelector } from "../redux/userSlice";
import { useSelector } from "react-redux";


function App() {
  const userData = useSelector(userSelector);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={ userData.isLoggedin ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}> </Route>
          <Route path="/register" element={userData.isLoggedin ? <Navigate to="/dashboard" /> : <Register />}> </Route>
          <Route path="/login" element={userData.isLoggedin ? <Navigate to="/dashboard" /> : <Login />}> </Route>
          <Route path="/dashboard" element={userData.isLoggedin ? <Dashboard /> : <Navigate to="/login" />}> </Route>
          <Route path='*' element={<Navigate to="/login" />}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
