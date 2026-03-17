import {Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'
import LogingPage from './pages/logingPage'
import { Toaster } from 'react-hot-toast'
import TestPage from './pages/test'


function App() {
  

  return (
    <>
      <div className="w-full h-screen bg-primary text-secondary flex justify-center items-center ">
       <Toaster position='top-right'/>
        <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/admin/*" element={<AdminPage/>} />
          <Route path="/login" element={<LogingPage/>} />
          <Route path="/test" element={<TestPage/>} />

        </Routes>
        
        
      </div>
      
    </>
  )
}

export default App
