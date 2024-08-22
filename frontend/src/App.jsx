import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to={"/signup"} />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App;