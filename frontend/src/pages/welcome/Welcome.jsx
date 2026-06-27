import React , {useState} from 'react';
import { FacebookOutlined, GithubOutlined, LineOutlined, PhoneOutlined } from '@ant-design/icons';
import myPhoto from '../../../public/picture/DSC_1696_cut.jpg'
import './Welcome.css';

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
            <img src={myPhoto} alt="My Photo" className="profile-img" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Welcome;