import React from 'react'
import axios from 'axios'
import logo1 from "../../../assets/logo1.png"
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'



const Login = () => {

    const [body, setBody] = useState({ email: '', password: '' })
    const { push } = useNavigate()

    function handleChange(e) {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        const login = async () => {
            const data = await axios.post('http://localhost:4000/users/login', body)
            if(data.data){
                localStorage.setItem('auth', '"yes"')
                push('/app')
            }else{
                alert("Credenciales incorrectas")
            }
        }
    }
    useEffect( () => {
        login()
    },[])

    // const [body, setBody] = useState({ username: '', password: '' })

    // const inputChange = ({ target }) => {
    //     const { name, value } = target
    //     setBody({
    //         ...body,
    //         [name]: value
    //     })
    // }

    // const onSubmit = () => {
    //     console.log(body)
    //     let username = {"username" : body.username};
    //     axios.post('http://localhost:4000/api/0.0.1/users/login', body)
    //         .then(({ data }) => {
    //             console.log(data);
    //             localStorage.setItem('User', JSON.stringify(data));
    //             localStorage.setItem('auth', JSON.stringify("yes"));
    //         })
    //         .catch(({ response }) => {
    //             console.log(response.data)
    //         })
    // }

return(
    <>
    <div className='loginfondo'>
    <div className='container container_login'>
        <div className='row row_form justify-content-center'>
        <div className='login-box'>
            {/* <img className='img_login' src={logo1} alt="FindInk"/> */}
            <form method='POST'>
                <div className='user-box'>
                    <input 
                    id='username'
                    type="email"
                    label='username'
                    value={body.username}
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
                    placeholder="Contrase??a"
                    name='password'/>
                </div>
                <a className='iniciar_sesion' onClick={handleSubmit} value="Login">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar Sesi??n
                </a>
                <a className='iniciar_sesion'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar con Google
                </a>
                <div className='links_login'>
                <a className="olvido" href="#">??Olvidaste la contrase??a?</a>
                <p className="crear_cuenta">??No tienes una cuenta?  <Link className="Links" to="/Register">Crear cuenta</Link></p>
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
