import React, { useEffect, useState, createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { Navbar, Footer } from './components/index';
import { Home, Blogs, About, Contact, Create, Update, Article, Signup, Login, Dashboard, Temp } from './pages/index';
import {useAuth, AuthProvider} from "./Hooks/useAuth";
import {ProtectedRoute} from "./router/ProtectedRoute";


function App() {

	return (

		<Router>
		<AuthProvider>
			<div>

				<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />}/>
						<Route path="/home" element={<Home />} />
						<Route path="/blogs" element={<Blogs />} />
						<Route path='/blogs/:id' element={<Article/>}/>
						<Route path="/blogs/create" element={<Create />} />
						<Route path="/blogs/update/:id" element={<Update />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route
          		path="/dashboard"
          		element={
            		<ProtectedRoute>
              		<Dashboard />
            		</ProtectedRoute>
          		}
        		/>
						<Route path="*" element={<Temp data='Page Not Found'/>} />
					</Routes>
				<Footer />

			</div>
			</AuthProvider>
		</Router>
	)
}

export default App
