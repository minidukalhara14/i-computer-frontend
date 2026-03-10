import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'


function App() {
  

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center border-[6px]">
       
        <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/admin" element={<AdminPage/>} />

        </Routes>
        
        
      </div>
      
    </>
  )
}

export default App
