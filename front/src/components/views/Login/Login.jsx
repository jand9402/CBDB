import React from 'react'
import axios from 'axios'
import logo1 from "../../../assets/logo1.png"
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../redux/actions/index'



const Login = () => {

    const [body, setBody] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleChange(e) {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        
        
             e.preventDefault()
            
            dispatch(login(body))
            
            console.log(body)
            setBody({
                email: '', password: ''
            })
  
        }
    

return(
    <>
    <div className='loginfondo'>
    <div className='container container_login'>
        <div className='row row_form justify-content-center'>
        <div className='login-box'>
            {/* <img className='img_login' src={logo1} alt="FindInk"/> */}
            <form method='POST' >
                <div className='user-box'>
                    <input 
                    id='username'
                    type="email"
                    label='username'
                    value={body.email}
                    onChange={(e) => handleChange(e)}
                    name='email'
                    placeholder='Correo'
                    required/>
                </div>
                <div className='user-box'>
                <input 
                    id='password'
                    type="password" 
                    label='password'
                    value={body.password}
                    onChange={(e) => handleChange(e)}
                    placeholder="Contraseña"
                    name='password'/>
                </div>
                <a className='iniciar_sesion' onClick={(e) => handleSubmit(e)}  value="Login">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar Sesión
                </a>
                <a className='iniciar_sesion'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar con Google
                </a>
                <div className='links_login'>
                <a className="olvido" href="#">¿Olvidaste la contraseña?</a>
                <p className="crear_cuenta">¿No tienes una cuenta?  <Link className="Links" to="/Register">Crear cuenta</Link></p>
                </div>
                            
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
)
}

export default Login
