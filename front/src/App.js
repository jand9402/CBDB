import './App.css';
import { Routes, Route } from "react-router-dom";
import NavbarVisit from "../src/components/views/NavbarVisit/NavbarVisit.js"
import Login from "../src/components/views/Login"
import Register from "../src/components/views/Register/Register"
import Dashboard from './components/views/Dashboard/Dashboard';

function App() {
  return (
    
	<div className="App">
	<NavbarVisit/>
	<Routes>
	  <Route path="/" exact element={<Login/>}/>
	  <Route path="/login" exact element={<Login/>}/>
	  <Route path="/register" exact element={<Register/>}/>
	  <Route path='/dashboard' exact element={<Dashboard/>}/>
	</Routes>
  </div>
      
		
  );
}

export default App;
