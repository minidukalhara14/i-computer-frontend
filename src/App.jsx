import {Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'
import LogingPage from './pages/logingPage'
import { Toaster } from 'react-hot-toast'
import TestPage from './pages/test'
import RegisterPage from './pages/registerPage'
import { GoogleOAuthProvider } from '@react-oauth/google'
//1098176682059-l6v3l7ncj8pafmoptgllm4pkg5e0nl2t.apps.googleusercontent.com

function App() {
  

  return (
    <GoogleOAuthProvider clientId="1098176682059-l6v3l7ncj8pafmoptgllm4pkg5e0nl2t.apps.googleusercontent.com">
      <div className="w-full h-screen bg-primary text-secondary flex justify-center items-center ">
       <Toaster position='top-right'/>
        <Routes>

          <Route path="/*" element={<HomePage/>} />
          <Route path="/admin/*" element={<AdminPage/>} />
          <Route path="/login" element={<LogingPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/test" element={<TestPage/>} />

        </Routes>
        
        
      </div>
      
    </GoogleOAuthProvider>
  )
}

export default App
