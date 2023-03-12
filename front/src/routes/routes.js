import React, { lazy } from 'react'
import RouteController from './RouteController'
const Dashboard = lazy(() => import('../components/views/Dashboard/Dashboard'))
const Login = lazy(() => import('../components/views/Login/Login'))
const Home = lazy(() => import('../components/views/Home/Home'))
const Register = lazy(() => import('../components/views/Register/Register'))

const routes = [
    {
        path: "/",
        exact: true,
        render: props => <Home {...props}/>
    },
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/app",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/app",
                exact: true,
                render: props => <RouteController component={Dashboard} {...props} />
            }
        ]
    }
]

export default routes