import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayPage from './Pages/BirthdayPage';
import WelcomePage from './Pages/WelcomePage';
import MemoriesPage from './Pages/MemoriesPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
        <Routes>
          <Route path="/Birthday" element={<BirthdayPage/>} />
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/memories" element={<MemoriesPage/>} />
          
        </Routes>
      </Router> 
    </>
  )
}

export default App
