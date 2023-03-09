import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "./Register.css"
import logo1 from "../../../assets/logo1.png"
import Swal from 'sweetalert2'
import { postUser } from '../../../redux/actions/index'
import { useDispatch, useSelector } from "react-redux";

function validate(input) {
    let errors = {}
    if (!input.club_name) {
        errors.club_name = "Nombre del club es requerido"
    }
    else if (!input.email) {
        errors.email = "Email es requerido"
    }
    else if (!input.password) {
        errors.password = "Contraseña es requerida"
    }
    else if (input.password != input.password2) {
        errors.password2 = "Las contraseñas deben ser iguales"
    }
    return errors
}

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const allTemps = useSelector((state) => state.temps)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        club_name: "",
        email: "",
        password: "",
        password2: ""
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        if (errors.name || errors.email || errors.password || errors.password2) {
            alert('Debe completar todos los campos')
        }
        else {
            e.preventDefault()
            console.log(input)
            dispatch(postUser(input))
            alert("Ya puedes iniciar sesión")
            setInput({
                club_name: "",
                email: "",
                password: "",
                password2: ""
            })
            navigate('/login')

        }
    }
    

    return (
        <>
        <div className='loginfondo'>
            <div className='container'>
                <div className='row row_form justify-content-center'>
                    <div className='login-box register-box'>
                        <img className='img_login' src="..." alt="Logo" />
                        <form >
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="mb-3">
                                            <input
                                                id='name'
                                                type="text"
                                                value={input.club_name}
                                                onChange={(e) => handleChange(e)}
                                                name='club_name'
                                                placeholder="Nombre del club" />
                                        </div>
                                        {errors.name && (
                                            <p className="errosRegistro">{errors.name}</p>
                                        )}
                                        <div className="mb-3" controlId="formBasicEmail">
                                            <input
                                                id='email'
                                                type="email"
                                                value={input.email}
                                                onChange={(e) => handleChange(e)}
                                                name='email'
                                                placeholder="Correo Electronico" />
                                        </div>
                                        {errors.email && (
                                            <p className="errosRegistro">{errors.email}</p>
                                        )}
                                        <div className="mb-3" controlId="formBasicPassword">
                                            <input
                                                id='password'
                                                type="password"
                                                value={input.password}
                                                onChange={(e) => handleChange(e)}
                                                name='password'
                                                placeholder="Contraseña" />
                                        </div>
                                        {errors.password && (
                                            <p className="errosRegistro">{errors.password}</p>
                                        )}
                                        <div className="mb-3" controlId="formBasicPassword2">
                                            <input
                                                id='confirmpassword'
                                                type="password"
                                                value={input.password2}
                                                onChange={(e) => handleChange(e)}
                                                name='password2'
                                                placeholder="Repetir Contraseña" />
                                        </div>
                                        {errors.password2 && (
                                            <p className="errosRegistro">{errors.password2}</p>
                                        )}
                  <br/>

                  {/* <div className="mb-3">
                                        <label className='textfff alinear_left'>Al registrarse estas aceptando los Términos y Condiciones y Politicas de Privacidad</label>
                                        <div className='d-flex'>
                                        <p className='textfff aceptar'><input type="checkbox" onChange={inputChange} name='terminos' /> Aceptar</p>
                                        </div>
                                        {errors.terminos && (
                    <p className="errosRegistro">{errors.terminos}</p>
                  )}
                                    </div>
                                    <div className="mb-3" >

                                        <label className='textfff alinear_left'>Soy mayor de edad</label>

                                        <div className='d-flex'>
                                        <p className='textfff aceptar'><input type="checkbox" onChange={inputChange} name='edad' /> Aceptar</p>
                                        </div>
                                        {errors.edad && (
                    <p className="errosRegistro">{errors.edad}</p>
                  )}
                                    </div> */}
                  <br/>

                                        <a className='iniciar_sesion' onClick={(e) => handleSubmit(e)} value="Register">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Registrarse
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            </div>

        </>
    )
}

export default Register;