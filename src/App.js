import React, { useState } from 'react'
import data from './data.json';
import { Route, Routes } from "react-router-dom";  
import List from './components/login/list/List'
import Navbar from './Navbar'
import Login from './components/login/Login'
import Home from './Home'
import Sidebar from './Sidebar'




function App() {
  const [people, setPeople] = useState(data)
  return (
    <>
        <Navbar/>
      <Routes>
        <Route path="/login" element={<Login  people={people}/>} />
        <Route path="/list" element={<List people={people} />} />
      </Routes>
        <Home />
      <Sidebar />
    </>
  )
}

export default App


