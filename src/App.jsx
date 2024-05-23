import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { Navbar, Footer } from './components/index';
import { Home, Blogs, About, Contact, Create, Update, Article, Signup, Login, Dashboard, Temp } from './pages/index';
import useFetch from "./Hooks/useFetch";
import useAuth from "./Hooks/AuthProvider";
import PrivateRoute from "./router/PrivateRoute.jsx";

function App() {
	 const [token, setToken] = useState();
	 if(!token){
    return <Login setToken={setToken} />
   }
	return (

		<Router>
			<div>
				<AuthProvider>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />}/>
						<Route path="/home" element={<Home />} />
						<Route path="/blogs" element={<Blogs />} />
						<Route path='/blogs/:id' element={<Article/>}/>
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/blogs/create" element={<Create />} />
						<Route path="/blogs/update/:id" element={<Update />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<PrivateRoute path="/dashboard" element={ <Dashboard /> } />
						<Route path="*" element={<Temp data='Page Not Found'/>} />
					</Routes>
					<Footer />
				</AuthProvider>
			</div>
		</Router>

	)
}

export default App
