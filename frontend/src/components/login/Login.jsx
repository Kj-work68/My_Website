import React from 'react'
import { Form, Input, Button} from 'antd'
import './Login.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values)

        // 1. สั่งให้ Context เปลี่ยนสถานะล็อกอินเป็นจริง
    login({ 
        username: values.username,
        password: values.password
    }); 
    
    // 2. สั่งย้ายหน้าไปที่ /dashboard
    navigate('/welcome');

    }


  return (
    <div className="login-page-container">
      <div className="login-card">
        
      
        <div className="login-left-panel">
          <div className="brand-welcome">Welcome to</div>
          <div className="brand-logo">Website</div>
        </div>

     
        <div className="login-right-panel">
          <h2 className="login-title">LOGIN TO LOOK AT MY WEBSITE</h2>


          {/* Ant Design Form */}
          <Form
            name="login_form"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            {/* ช่องกรอก Email */}
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'กรุณากรอก Username ของคุณ!' },
              ]}
            >
              <Input className="custom-input" placeholder="Username" />
            </Form.Item>

            {/* ช่องกรอก Password */}
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน!' }]}
              style={{ marginBottom: 10 }}
            >
              <Input.Password className="custom-input" placeholder="Password" />
            </Form.Item>

            {/* ปุ่มล็อกอิน และ ส่วนสมัครสมาชิกด้านล่าง */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Form.Item style={{ marginBottom: 0 }}>
                <Button type="primary" htmlType="submit" className="login-submit-btn">
                  LOGIN
                </Button>
              </Form.Item>
            </div>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default Login