// import './App.css';
// import { Routes, Route } from "react-router-dom";
import NavbarVisit from "../src/components/views/NavbarVisit/NavbarVisit.js"
// import Login from "../src/components/views/Login"
// import Register from "../src/components/views/Register/Register"
// import Dashboard from './components/views/Dashboard/Dashboard';
// import Home from './components/views/Home/Home';

// function App() {
//   return (
    
// 	<div className="App">
// 	<NavbarVisit/>
// 	<Routes>
// 	  <Route path="/" exact element={<Home/>}/>
// 	  <Route path="/login" exact element={<Login/>}/>
// 	  <Route path="/register" exact element={<Register/>}/>
// 	  <Route path='/dashboard' exact element={<Dashboard/>}/>
// 	</Routes>
//   </div>
      
		
//   );
// }

// export default App;


import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { renderRoutes } from './routes/RouteUtils'
import routes from './routes/routes'
import Login from "../src/components/views/Login"
import Register from "../src/components/views/Register/Register"
import Dashboard from './components/views/Dashboard/Dashboard';
import Home from './components/views/Home/Home';
import RouteController from "./routes/RouteController.jsx";

const App = () => {
	return (
		<>
			{/* <CssBaseline /> */}
			<NavbarVisit/>
			<Routes>
				<Route path="/" exact element={<Home/>}/>
				<Route path= "/" exact element={<Home/>}/>
				<Route path= "/home" exact element={<Home/>}/>
				<Route path= "/login" exact element={<Login/>}/>
				<Route path= "/register" exact element={<Register/>}/>
				<Route path= "/dashboard" exact element={<RouteController/>}/>
			</Routes>
		</>
	)
}

export default App

