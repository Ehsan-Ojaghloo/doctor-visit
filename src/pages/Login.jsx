import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { json, useNavigate } from 'react-router-dom'
import "./Register.scss"
import axios from 'axios'
import { useTitle } from '../hooks/useTitle';

function Register() {

    const [users, setUsers] = useState([]);

    const getUsername = useRef()
    const getPassword = useRef()

    const navigate = useNavigate()

    useTitle("Login Page")

    const loginUserData = async () => {
        const response = await axios.get(`http://localhost:3000/users`)
        console.log(response.data)


        const matchUser = users.find(
            data => data.username === getUsername && data.password === getPassword
        );

        if (matchUser) {
            console.log('success', matchUser);
        } else {
            console.log('No matching user found');
        }
    }

    return (
        <div className='register-con'>
            <ToastContainer />
            <div className="register">
                <h1> Login </h1>
                <input type="text" ref={getUsername} placeholder='Username' />
                <input type="password" ref={getPassword} placeholder='Password' />
                <button onClick={loginUserData}> Login </button>
            </div>
        </div>
    )
}

export default Register