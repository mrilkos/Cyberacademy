'use client';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 5,
      padding: '3rem 5%',
      backgroundColor: 'rgba(0, 10, 5, 0.8)',
      borderTop: '1px solid rgba(0, 255, 65, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#00ff41',
          marginBottom: '1.5rem',
          textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
        }}>
          CYBER ACADEMY
        </div>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="/" style={{
            color: '#e0e0e0',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }} className="hover:text-green-400 hover:drop-shadow-glow">
            Home
          </a>
          <a href="/about" style={{
            color: '#e0e0e0',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }} className="hover:text-green-400 hover:drop-shadow-glow">
            About
          </a>
          <a href="/courses" style={{
            color: '#e0e0e0',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }} className="hover:text-green-400 hover:drop-shadow-glow">
            Courses
          </a>
          <a href="#" style={{
            color: '#e0e0e0',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }} className="hover:text-green-400 hover:drop-shadow-glow">
            Contact
          </a>
        </div>
        
        <div style={{
          color: '#888',
          fontSize: '0.9rem',
          marginTop: '1rem'
        }}>
          © {new Date().getFullYear()} Cyber Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
