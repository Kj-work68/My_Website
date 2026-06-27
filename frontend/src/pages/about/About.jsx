import React, { useState } from 'react';
import { 
  UserOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  HomeOutlined, 
  BookOutlined,
  ThunderboltOutlined,
  CodeOutlined,
  SettingOutlined,
  GlobalOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import './About.css';

const About = () => {
  const [lang, setLang] = useState('EN');

  const textData = {
    EN: {
      title: "About Me",
      personalTitle: "Personal Record",
      address: "80/1 Village No. 2, Dan Chang Subdistrict, Bua Yai District, Nakhon Ratchasima 30120",
      education: "Khon Kaen University Nong Khai Campus (Computer Science)",
      
      // 🟢 เพิ่มคำแปลฝั่งภาษาอังกฤษสำหรับ Work Experience
      expTitle: "Work Experience",
      jobs: [
        {
          role: "Programmer",
          company: "Erawan Sugar Factory, Na Klang",
          duration: "June 2024 - 21 June 2026",
          details: [
            "Developed web dashboards using React and DevExtreme for multi-functional data monitoring as assigned.",
            "Designed and implemented Node.js WebSocket (WS) architecture to integrate and control RFID Reader hardware devices.",
            "Provided on-site technical support and troubleshooting during the sugarcane crushing season to ensure uninterrupted system operations."
          ]
        },
        {
          role: "Technician (Internship)",
          company: "MCOT Public Company Limited, Nong Khai",
          duration: "April 2023 - June 2023",
          details: [
            "Handled multimedia tasks, including video editing, audio mixing, and promotional poster design.",
            "Operated broadcasting control systems (DJ duties) and compiled radio scripts."
          ]
        }
      ],

      skillsTitle: "Skills",
      frontTitle: "Frontend Development",
      backTitle: "Backend & Tools"
    },
    TH: {
      title: "เกี่ยวกับฉัน",
      personalTitle: "ข้อมูลส่วนตัว",
      address: "80/1 หมู่ 2 ต.ด่านช้าง อ.บัวใหญ่ จ.นครราชสีมา 30120",
      education: "มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย (สาขาวิทยาการคอมพิวเตอร์)",
      
      // 🟢 เพิ่มคำแปลฝั่งภาษาไทยสำหรับ Work Experience
      expTitle: "ประสบการณ์การทำงาน",
      jobs: [
        {
          role: "โปรแกรมเมอร์",
          company: "โรงงานน้ำตาลเอราวัณ นากลาง",
          duration: "มิถุนายน 2024 - 21 มิถุนายน 2026",
          details: [
            "พัฒนา Web Dashboard ด้วย React และ DevExtreme สำหรับ Monitor ข้อมูลตามที่ได้รับมอบหมาย",
            "ออกแบบและพัฒนา Node.js WebSocket (WS) เพื่อเชื่อมต่อและควบคุมการทำงานของอุปกรณ์ RFID Reader",
            "ดำเนินการดูแล ซัพพอร์ต และแก้ไขปัญหาหน้างาน (Technical Support) ให้แก่ผู้ใช้งานระบบในช่วงฤดูกาลหีบอ้อย เพื่อให้ระบบดำเนินงานได้อย่างต่อเนื่อง"
          ]
        },
        {
          role: "ช่างเทคนิค (ฝึกงาน)",
          company: "บมจ.อสมท สาขาหนองคาย",
          duration: "เมษายน 2023 - มิถุนายน 2023",
          details: [
            "ดูแลงานด้านมัลติมีเดีย การตัดต่อวิดีโอ มิกซ์เสียง และออกแบบโปสเตอร์ประชาสัมพันธ์",
            "ปฏิบัติหน้าที่ควบคุมการออกอากาศ (DJ) และเรียบเรียงสคริปต์รายการวิทยุ"
          ]
        }
      ],

      skillsTitle: "ความสามารถ",
      frontTitle: "การพัฒนาฝั่งหน้าบ้าน (Frontend)",
      backTitle: "การพัฒนาฝั่งหลังบ้านและเครื่องมือ"
    }
  };

  const currentText = textData[lang];

  return (
    <div className="about-wrapper">
      {/* ส่วนหัวหน้า */}
      <div className="about-header-box">
        <h1>{currentText.title}</h1>
        <button 
          className="lang-toggle-btn" 
          onClick={() => setLang(lang === 'EN' ? 'TH' : 'EN')}
        >
          <GlobalOutlined /> {lang === 'EN' ? 'TH' : 'EN'}
        </button>
      </div>

      <div className="about-content">
        {/* ส่วนข้อมูลส่วนตัว */}
        <div className="personal-section">
          <div className="personal-image-side">
            <div className="profile-frame">
              <img src="/picture/DSC_1021_cut_1.jpg" alt="Kachen" />
            </div>
            <h2 className="name-display">KACHENN JANTAKET</h2>
            <p className="position-tag">Full-Stack Developer</p>
          </div>

          <div className="personal-info-side">
            <h3 className="section-title"><UserOutlined /> {currentText.personalTitle}</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="label">Full-Name:</span>
                <span className="value">Mr. Kachen Jantaket</span>
              </div>
              <div className="info-item">
                <span className="label"><MailOutlined /> E-mail:</span>
                <span className="value">kachen.work68@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label"><PhoneOutlined /> Phone:</span>
                <span className="value">088-050-3773</span>
              </div>
              <div className="info-item">
                <span className="label"><HomeOutlined /> Address:</span>
                <span className="value">{currentText.address}</span>
              </div>
              <div className="info-item">
                <span className="label"><BookOutlined /> Education:</span>
                <span className="value">{currentText.education}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🟢เพิ่มโครงสร้างแสดงผล Work Experience */}
        <div className="experience-section">
          <h3 className="section-title"><IdcardOutlined /> {currentText.expTitle}</h3>
          <div className="experience-timeline">
            {currentText.jobs.map((job, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-header">
                  <span className="job-role">{job.role}</span>
                  <span className="job-duration">{job.duration}</span>
                </div>
                <div className="job-company">{job.company}</div>
                <ul className="job-details">
                  {job.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ส่วนความสามารถ (2 คอลัมน์) */}
        <div className="skills-section">
          <h3 className="section-title"><ThunderboltOutlined /> {currentText.skillsTitle}</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4><CodeOutlined /> {currentText.frontTitle}</h4>
              <ul>
                <li>React.js / Hooks</li>
                <li>JavaScript (ES6+)</li>
                <li>DevExtreme Components</li>
                <li>HTML5 & CSS3 (Responsive Design)</li>
                <li>Ant Design UI</li>
              </ul>
            </div>

            <div className="skill-card">
              <h4><SettingOutlined /> {currentText.backTitle}</h4>
              <ul>
                <li>Node.js / Express</li>
                <li>WebSockets (Real-time Data)</li>
                <li>JWT (Authentication)</li>
                <li>Git / GitLab</li>
                <li>RFID Hardware Integration</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;