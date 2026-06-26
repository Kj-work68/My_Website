import React , {useState} from 'react';
import { FacebookOutlined, GithubOutlined, LineOutlined, PhoneOutlined } from '@ant-design/icons';
import './welcome.css';

const Welcome = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="portfolio-wrapper">
      
      {/* ส่วนหัวด้านบน */}
      {/* <header className="portfolio-header">
        <div className="profile-title">Welcome To My Website</div>
      </header> */}

      {/* ส่วนเนื้อหาหลัก */}
      <div className="portfolio-hero">
        <div className="hero-left-content">
          <div className="name-box">
            <h2 className="sub-title">KACHENN JANTAKET</h2>
            <h1 className="main-title">PORTFOLIO</h1>
          </div>
          
          <div className="bio-container">
          <button 
            className="read-more-btn" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read Less —' : 'Read More —'}
          </button>
          
          <div className={`bio-text ${isExpanded ? 'show' : ''}`}>
            <p className="en-bio">
              Hi, My name is Kachenn Jantaket. Graduated from Khon Kaen University Nong Khai Campus, 
              Department of Computer Science and Information.
            </p>
            <p className="th-bio">
              สวัสดีครับ ผมชื่อนายคเชนทร์ จันทเกษ จบการศึกษาจากมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย 
              สาขาวิทยาการคอมพิวเตอร์และสารสนเทศครับ
            </p>
          </div>
        </div>
        </div>

        <div className="hero-right-image">
          <div className="image-glow-circle">
            <img src="/public/picture/DSC_1021_cut_1.jpg" alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>

      {/* ส่วนท้าย */}
      <footer className="portfolio-footer">
        <h3 className="follow-title">Contact</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/kachen.jantaket/" target="_blank" rel="noreferrer" className="icon-link fb"><FacebookOutlined /></a>
          <a href="https://github.com/Kj-work68" target="_blank" rel="noreferrer" className="icon-link gh"><GithubOutlined /></a>
          <a href="https://line.me/ti/p/GPDzP86Gd7" target="_blank" rel="noreferrer" className="icon-link ln">
          <img src='/public/picture/line.png' alt="Line Icon" className="line-icon-img" />
        </a>
        </div>
        <div className="contact-phone">
          Call: 088-050-3773 <PhoneOutlined /> 
        </div>
      </footer>

    </div>
  );
};

export default Welcome;