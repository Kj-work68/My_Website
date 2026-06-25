import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoutes'
import { Login } from './pages'
import 'antd/dist/reset.css'

const Dashboard = () => <h2>ยินดีต้อนรับสู่หน้า Dashboard (เฉพาะคนที่ล็อกอินแล้ว)</h2>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* หน้าแรก "/" คือหน้า Login (ห้ามเข้าถ้าล็อกอินแล้ว) */}
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />

          {/* หน้าหลังจากนี้ที่ต้อง ล็อกอินก่อน ถึงจะเข้าได้ */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />

          {/* คุณสามารถเพิ่มหน้าอื่นๆ ที่จะเกิดขึ้นหลังจากนี้ตรงนี้ได้เลย */}
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
          
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App