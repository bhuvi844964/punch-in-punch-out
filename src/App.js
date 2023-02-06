import React, { useState } from 'react'
import data from './data.json';
import { Route, Routes } from "react-router-dom";  
import List from './components/list/List'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Login from './components/login/Login'
import Home from './Home'
import Sidebar from './components/Sidebar'
import ProfileId from './components/ProfileId'




function App() {
  const [people, setPeople] = useState(data)
 
  
  return (
    <>
        <Navbar/>
      
      <Routes>
        <Route path="/login" element={<Login  people={people}/>} />
        <Route path="/list" element={<List people={people} />} />
        <Route path="/attendance" element={<Profile/>} />
        <Route path="/attendance/:id" element={<ProfileId  people={people} />} />
       
      </Routes>
      <Sidebar/>
     {people && 
      <Home />
     }
      
    </>
  )
}

export default App


