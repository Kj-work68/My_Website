import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoutes'
import {
  Welcome,
  About
} from './pages'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Sidebar from './components/sidenavigatebar/Sidebar'
import 'antd/dist/reset.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route
            element={
              <PublicRoute>
                <Sidebar />
              </PublicRoute>
            }
          >
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          /> */}

          {/* <Route
            element={
              <ProtectedRoute>
                <Sidebar />
              </ProtectedRoute>
            }
          >
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/about" element={<About />} />
          </Route> */}

        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App