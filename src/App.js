import React, { useState } from 'react'
import data from './components/data/data.json';
import attendance from './components/data/attendance.json'
import { Route, Routes } from "react-router-dom";  
import List from './components/list/List'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Login from './components/login/Login'
import Home from './Home'
import Sidebar from './components/Sidebar'
import ProfileId from './components/ProfileId'
import Punch from './components/Punch'
import Logout from './components/Logout'





function App() {
  const [people, setPeople] = useState(data)
  const [attend, setAttendance] = useState(attendance)
 
  
  return (
    <>
        <Navbar/>
      
      <Routes>
        <Route path="/login" element={<Login  people={people}/>} />
        <Route path="/list" element={<List people={people} />} />
        <Route path="/attendance" element={<Profile/>} />
        <Route path="/attendance/:id" element={<ProfileId  attend={attend}  people={people}  />} />
        <Route path="/punch" element={<Punch/>} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <Sidebar/>
     
      <Home />
     
      
    </>
  )
}

export default App


