import React, {useEffect, useState} from 'react';
import {FaLinkedIn, FaGithub, FaFileAlt} from 'react-icons/fa';
import Head from 'next/head';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const getStyles = (isMobile) => ({
  introStyle: {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'start',
    textAlign: isMobile ? 'center' : 'left',
    padding: isMobile ? '50px 20px' : '100px 50px',
    margin: isMobile ? '0 20px' : '0 150px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
  },
  profilePicStyle: {
    width: isMobile ? '80px' : '120px',
    height: isMobile ? '80px' : '120px',
    borderRadius: '50%',
    marginBottom: isMobile ? '20px' : '0',
    marginRight: isMobile ? '0' : '20px',
  },
  headerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'center' : 'start',
    justifyContent: 'center',
    textAlign: isMobile ? 'center' : 'left',
    fontFamily: 'Arial, sans-serif',
    fontSize: isMobile ? '16px' : '22px',
    color: '#fff',
  },
  linkStyle: {
    color: '#0070f3',
    textDecoration: 'none',
    fontSize: isMobile ? '14px' : '16px',
    marginTop: '10px',
    padding: isMobile ? '8px 15px' : '10px 20px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  aboutMeStyle: {
    padding: isMobile ? '20px' : '40px 50px',
    margin: isMobile ? '20px 10px' : '50px 150px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    fontSize: isMobile ? '14px' : '18px',
    color: '#fff',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    marginTop: '5px',
  },
  workExperienceStyle: {
    padding: isMobile ? '20px' : '40px 50px',
    margin: isMobile ? '20px 10px' : '50px 150px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    fontSize: isMobile ? '14px' : '18px',
    color: '#fff',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    marginTop: '20px',
  },
  techStackStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    justifyContent: isMobile ? 'center' : 'start',
  },
  tagStyle: {
    backgroundColor: '#0070f3',
    borderRadius: '20px',
    padding: isMobile ? '3px 10px' : '5px 15px',
    margin: '5px',
    fontSize: isMobile ? '12px' : '14px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    cursor: 'default',
    transition: 'background-color 0.3s, color 0.3s',
  },
  projectsStyle: {
    padding: isMobile ? '20px' : '40px 50px',
    margin: isMobile ? '20px 10px' : '50px 150px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    fontSize: isMobile ? '14px' : '18px',
    color: '#fff',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    marginTop: '20px',
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column', // Stack projects vertically
    gap: '20px', // Add spacing between projects
  },
  projectContainerStyle: {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    textAlign: isMobile ? 'center' : 'left',
    marginBottom: '10px', // Add spacing between project containers
  },

  projectImageStyle: {
    width: isMobile ? '60px' : '70px', // Smaller image size for mobile
    height: isMobile ? '40px' : '50px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: isMobile ? '10px' : '0',
    alignItems: "start"
  },

  projectDetailsStyle: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: isMobile ? '0' : '20px', // Remove left margin on mobile
    alignItems: 'start'
  },
});


export default function Home() {
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  return () => window.removeEventListener("resize", checkScreenSize);
}, []);

const {
  introStyle,
  profilePicStyle,
  headerStyle,
  linkStyle,
  aboutMeStyle,
  workExperienceStyle,
  techStackStyle,
  tagStyle,
  projectsStyle,
  projectContainerStyle,
  projectImageStyle,
  projectDetailsStyle,
} = getStyles(isMobile);

  return (
    <div style= {{backgroundColor: "#1a1a1a", width:"100vw", height: "100vh", overflowY: "scroll"}}>
      <Head>
        <title>Esha Pednekar</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={introStyle}>
        <img
          src="https://ipfs.io/ipfs/bafkreialkpyv3tg7bkrsmt4msdybfbu6fgj77eg3extmp64oflbb76olya/"
          alt="Profile Pic"
          style={profilePicStyle}
        />
        <div style={headerStyle}>
          <h2>Esha Pednekar</h2>
          <p>I make websites. Including this one.</p>
          <div>
            <a
              style={linkStyle}
              href="https://ipfs.io/ipfs/bafkreibcmvmudd466qvv2vrugqbunovaazy4izuvinvtsaid7l4dhd66om/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              style={linkStyle}
              href="https://www.linkedin.com/in/eshapednekar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              style={linkStyle}
              href="https://github.com/eshapednekar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div style={aboutMeStyle}>
        <h3>About Me</h3>
        <p style={{marginTop: '20px'}}>
          Recently graduated from Penn State, I have a strong foundation in full-stack development,
          including HTML, CSS, JavaScript/TypeScript, and React for the frontend and C#, Java, and various SQL databases for the backend. I have worked on various projects, both personal and professional,
          that showcase my skills and creativity. In my next role, I’m looking for a fast-paced, product-focused environment where I can build meaningful features end-to-end and learn from strong engineers around me.
        </p>
      </div>
      <div style={workExperienceStyle}>
        <h3>Work Experience</h3>
        <VerticalTimeline lineColor="#0070f3">
          <VerticalTimelineElement
            contentStyle={{
              background: '#333',
              color: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #333' }}
            date="May 2024 - May 2025"
          >
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              Junior Software Engineer
            </h4>
            <h5 style={{ fontSize: '16px', color: '#0070f3', marginBottom: '10px' }}>
             <a href="https://www.linkedin.com/company/webstaurantstore-com/posts/?feedView=all" target="_blank"
              rel="noopener noreferrer">WebstaurantStore</a> 
            </h5>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Created a dashboard on the EDI team’s web app that included dynamic charts showing stats on
              invoice success, failure, and throughput - reducing analyst response time by 50%. 
            </p>
            <div style={techStackStyle}>
              <span style={tagStyle}>React</span>
              <span style={tagStyle}>JavaScript</span>
              <span style={tagStyle}>C#</span>
              <span style={tagStyle}>SQL Server</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: '#333',
              color: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #333' }}
            date="June 2023 - August 2023"
          >
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              Web Development Intern
            </h4>
            <h5 style={{ fontSize: '16px', color: '#0070f3', marginBottom: '10px' }}>
              <a href="https://www.linkedin.com/company/horse-s-mouth/" target="_blank"
              rel="noopener noreferrer">Horse's Mouth</a>
            </h5>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Developed a full-stack application that displayed different mentors’ profiles for users to browse through and book their sessions.
              </p>
            <div style={techStackStyle}>
              <span style={tagStyle}>React</span>
              <span style={tagStyle}>TypeScript</span>
              <span style={tagStyle}>Prisma</span>
              <span style={tagStyle}>PostgreSQL</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: '#333',
              color: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #333' }}
            date="May 2022 - July 2022"
          >
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              Process Optimization Intern
            </h4>
            <h5 style={{ fontSize: '16px', color: '#0070f3', marginBottom: '10px' }}>
              <a href="https://www.linkedin.com/company/entrib-technologies/" target="_blank"
              rel="noopener noreferrer">Entrib Analytics Tech</a>
            </h5>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Implemented a temperature alert system to prevent spoilage in a meat processing plant and boost ERP metrics.
            </p>
            <div style={techStackStyle}>
              <span style={tagStyle}>Azure Stream Analytics</span>
              <span style={tagStyle}>Power BI</span>
              <span style={tagStyle}>Research & Development</span>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div style={projectsStyle}>
  <h3>Projects</h3>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    <li style={projectContainerStyle}>
      <img
        style={projectImageStyle}
        src="https://ipfs.io/ipfs/bafkreiaxmqbtxti66gjf4ynpwiidz7ciidl33nlkzhvpvntwzbtxbhw7le/"
        alt="Stonks App"
      />
      <div style={projectDetailsStyle}>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>Stonks</h4>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          A trading simulator app that allows users to buy and sell stocks with real-time data.
        </p>
        <a
          href="https://stonks-ten-smoky.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '14px', lineHeight: '1.6', color: '#0070f3' }}
        >
          Go to app
        </a>
      </div>
    </li>
    <li style={projectContainerStyle}>
      <img
        style={projectImageStyle}
        src="https://ipfs.io/ipfs/bafkreidilbllmejrt3k2s2jfpajvr2uhwywoqg7zbrjcqxwqyldtpkbaoe/"
        alt="VoteGuard App"
      />
      <div style={projectDetailsStyle}>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>VoteGuard</h4>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          A decentralized voting system that uses smart contracts to securely record and verify votes.
        </p>
        <a
          href="https://vote-guardian.vercel.app/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '14px', lineHeight: '1.6', color: '#0070f3' }}
        >
          Go to app
        </a>
      </div>
    </li>
    <li style={projectContainerStyle}>
      <img
        style={projectImageStyle}
        src="https://ipfs.io/ipfs/bafybeib4sodf7rsqslfrnmpr33pbkmzxm43vqysws76nsspgzcrkwypute/"
        alt="TBJ App"
      />
      <div style={projectDetailsStyle}>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>Tracking the Body's Journey</h4>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          A smart insole system with real-time foot pressure monitoring for elderly mobility analysis.
        </p>
        <a
          href="https://sites.psu.edu/lfshowcasesp25/2025/04/29/tracking-the-bodys-journey-integrated-device-systems-for-monitoring-and-measuring-physical-wellness-in-the-elderly/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '14px', lineHeight: '1.6', color: '#0070f3' }}
        >
          Go to project
        </a>
      </div>
    </li>
  </ul>
</div>
<div style={{ height: '100px' }}></div> 
    </div>
    
  );
}