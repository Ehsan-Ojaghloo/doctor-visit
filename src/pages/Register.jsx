import React, { useRef } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import "./Register.scss"
import axios from 'axios'

function Register() {

    const getEmail = useRef()
    const getUsername = useRef()
    const getPassword = useRef()

    const navigate = useNavigate()

    const regUserData = async () => {
        if (getEmail.current.value !== "" && getUsername.current.value !== "" && getPassword.current.value !== "") {

            try {
                const res = await axios.post('https://668fe602c0a7969efd9a0985.mockapi.io/users/visit', {
                    email: getEmail.current.value,
                    username: getUsername.current.value,
                    password: getPassword.current.value
                })
                console.log(res.data)
            } catch (error) {
                console.error(error)
            }

            toast.success('Welcome', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                onClose: () => navigate("/sign"),
                transition: Bounce
            });

        } else {

            toast.error('Please complete your information', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }

    }

    return (
        <div className='register-con'>
            <ToastContainer />
            <div className="register">
                <h1> Login </h1>
                <input type="email" ref={getEmail} placeholder='Email' />
                <input type="text" ref={getUsername} placeholder='Username' />
                <input type="password" ref={getPassword} placeholder='Password' />
                <button onClick={regUserData}> Register </button>
            </div>
        </div>
    )
}

export default Register