import React from 'react';
import { FacebookOutlined, GithubOutlined, PhoneOutlined } from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <h3 className="follow-title">Contact</h3>
      
      {/* 1. แถวบน: รวมไอคอนโซเชียลลิงก์ (เอาเบอร์โทรออกจากตรงนี้แล้ว) */}
      <div className="social-icons">
        <a href="https://www.facebook.com/kachen.jantaket/" target="_blank" rel="noreferrer" className="icon-link fb">
          <FacebookOutlined />
        </a>
        <a href="https://github.com/Kj-work68" target="_blank" rel="noreferrer" className="icon-link gh">
          <GithubOutlined />
        </a>
        <a href="https://line.me/ti/p/GPDzP86Gd7" target="_blank" rel="noreferrer" className="icon-link ln">
          <img src='/picture/line.png' alt='line' style={{ width: '24px', height: '24px' }} />
        </a>
      </div>

      {/* 🟢 2. แถวล่าง: แยกส่วนเบอร์โทรศัพท์ลงมาด้านล่างโดยเฉพาะ */}
      <div className="footer-phone-row">
        <span className="phone-text">
         Call : 088-050-3773 <PhoneOutlined />
        </span>
      </div>
    </footer>
  );
};

export default Footer;