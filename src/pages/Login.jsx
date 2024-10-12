import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { json, useNavigate } from 'react-router-dom'
import "./Register.scss"
import axios from 'axios'

function Register() {

    const [usersTime, setUsersTime] = useState([]);
    const getUsername = useRef()
    const getPassword = useRef()

    const navigate = useNavigate()

    const loginUserData = async () => {
        const response = await axios.get(`http://localhost:3000/users`)

        const matchUser = response.data.find(
            data => data.username === getUsername.current.value && data.password === getPassword.current.value
        );

        if (matchUser) {

            toast.success(`Welcome ${matchUser.username} 😀`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                onClose: () => navigate("/"),
                transition: Bounce
            });

            console.log(matchUser)

        } else {

            toast.error('You have no account', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });

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