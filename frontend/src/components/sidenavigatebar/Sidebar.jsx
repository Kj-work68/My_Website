import React, { useState } from 'react'; // 1. เรียกใช้ useState
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { 
  LogoutOutlined, 
  HomeOutlined, 
  MenuFoldOutlined, 
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons'; // เพิ่มไอคอนสำหรับกดหุบ-กาง
import { useAuth } from '../../contexts/AuthContext';
import './sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  // 2. สร้าง State สำหรับควบคุมการหุบ-กาง (false = กางอยู่, true = หุบเข้า)
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    // 3. ใส่คลาส 'collapsed' ที่ตัวนอกสุดเมื่อสเตทเป็น true
    <div className={`app-layout ${isCollapsed ? 'collapsed' : ''}`}>
      
      {/* ฝั่งซ้าย: แถบเมนู */}
      <aside className="sidebar-container">
        
        {/* ส่วนหัวแบรนด์ + ปุ่มกดหุบเมนู */}
        <div className="sidebar-header">
          {!isCollapsed && <div className="sidebar-brand">MY</div>}
          <button 
            className="toggle-sidebar-btn" 
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>
        
        <nav className="sidebar-menu">
          <button className="menu-item active" onClick={() => navigate('/welcome')}>
            <HomeOutlined /> 
            {/* ถ้าหุบอยู่ ให้ซ่อนข้อความตัวหนังสือไว้ */}
            {!isCollapsed && <span>Welcome</span>}
          </button>
          <button className="menu-item active" onClick={() => navigate('/about')}>
            <UserOutlined />
            {/* ถ้าหุบอยู่ ให้ซ่อนข้อความตัวหนังสือไว้ */}
            {!isCollapsed && <span>About</span>}
          </button>
        </nav>

        {/* ปุ่ม Logout ท้าย Sidebar */}
        <div className="sidebar-footer">
          <Button 
            type="primary" 
            danger 
            block={!isCollapsed} /* ถ้ากางให้ปุ่มยืดเต็ม ถ้าหุบให้ปุ่มหดเหลือแค่ไอคอน */
            className="logout-btn"
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
          >
            {!isCollapsed && "ออกจากระบบ"}
          </Button>
        </div>
      </aside>

      {/* ฝั่งขวา: พื้นที่แสดงหน้าย่อยยืดตามพื้นที่ๆ เหลืออัตโนมัติ */}
      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Sidebar;