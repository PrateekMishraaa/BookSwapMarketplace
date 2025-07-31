import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'
import ViewAllBooks from './Pages/ViewBooks.jsx'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<SignIn/>}/>
     <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
   <Route
    path="/dashboard/view-books"
    element={
      <ProtectedRoute>
        <ViewAllBooks />
      </ProtectedRoute>
    }
  />
     </Routes>
   </Router>
  </>
  )
}

export default App
