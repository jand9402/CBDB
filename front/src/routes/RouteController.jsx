import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../components/views/Dashboard/Dashboard'

const RouteController = props => {
    const navigate = useNavigate()
    const { component: Component, isAuthenticated, ...rest } = props

    const [isAuth, setIsAuth] = useState(true)

    const init = () => {
        if (!localStorage.getItem("auth")) {
            setIsAuth(false)
        } else {
            const auth = JSON.parse(localStorage.getItem('auth'))
            if (auth === 'yes') {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        }
    }
    useEffect(init, [])

    return isAuth ? <Dashboard/>  : navigate('/login')
}

export default RouteController