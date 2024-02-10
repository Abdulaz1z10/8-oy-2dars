import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Mainpage from './pages/main/Mainpage';

export default function App() {
  return (
        <Routes>
          <Route path="" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path='main' element={<Mainpage/>}/>
        </Routes>
  );
}
