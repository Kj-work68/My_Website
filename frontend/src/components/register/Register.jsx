import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Register Values:', values)
    
    // ตรงนี้ไว้พี่เอาไปต่อเชื่อมกับ API หลังบ้านนะครับ 
    // ตอนนี้ทำเป็น Mockup Alert แจ้งเตือนว่าสมัครสำเร็จก่อน
    message.success('สมัครสมาชิกสำเร็จเรียบร้อยแล้ว!')
    
    // เมื่อสมัครเสร็จ ให้ดีดเด้งกลับไปหน้า Login อัตโนมัติ
    navigate('/')
  }

  return (
    <div className="register-page-container">
      <div className="register-card">
        
        {/* ฝั่งซ้าย (คุมโทนเดียวกับหน้า Login) */}
        <div className="register-left-panel">
          <div className="brand-welcome">Join with us</div>
          <div className="brand-logo">Register</div>
        </div>

        {/* ฝั่งขวา (ช่องกรอกข้อมูล) */}
        <div className="register-right-panel">
          <h2 className="register-title">CREATE NEW ACCOUNT</h2>

          <Form
            name="register_form"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            {/* ช่องกรอก Username */}
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'กรุณากรอก Username ที่ต้องการ!' },
              ]}
            >
              <Input className="custom-input" placeholder="Username" />
            </Form.Item>

            {/* ช่องกรอก Password */}
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน!' }]}
              style={{ marginBottom: 20 }}
            >
              <Input.Password className="custom-input" placeholder="Password" />
            </Form.Item>

            {/* ปุ่มกดยืนยันสมัครสมาชิก และ ปุ่มย้อนกลับ */}
            <div className="register-action-group">
              <Form.Item style={{ marginBottom: 0, width: '100%' }}>
                <Button type="primary" htmlType="submit" className="register-submit-btn">
                  REGISTER
                </Button>
              </Form.Item>

              <span className="back-to-login" onClick={() => navigate('/')}>
                Already have an account? Sign In
              </span>
            </div>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default Register