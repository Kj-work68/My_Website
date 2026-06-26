import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoutes'
import { Welcome } from './pages'
import Login from './components/login/Login'
import Sidebar from './components/sidenavigatebar/Sidebar'
import 'antd/dist/reset.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* 1. หน้าแรกคือ Login */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* 2. หน้า Welcome แบบปกติชั้นเดียว ไม่ต้องซ้อนใต้ Sidebar ในนี้แล้ว */}
          <Route
  element={
    <ProtectedRoute>
      <Sidebar />
    </ProtectedRoute>
  }
>
  <Route path="/welcome" element={<Welcome />}/>
</Route>

        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App