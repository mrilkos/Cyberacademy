'use client';

export default function AboutPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#fff',
      padding: '2rem',
      fontFamily: 'monospace',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        zIndex: 1
      }}></div>
      
      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px',
        padding: '2rem',
        border: '1px solid #00ff41',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#00ff41',
          textAlign: 'center',
          textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
        }}>
          ABOUT US
        </h1>
        
        <div style={{
          marginBottom: '2rem',
          lineHeight: '1.8'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to Cyber Academy, where we're passionate about cybersecurity education and empowering the next generation of security professionals.
          </p>
          
          <h2 style={{
            color: '#00ff41',
            margin: '1.5rem 0 1rem',
            fontSize: '1.5rem'
          }}>Our Mission</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            To provide accessible, high-quality cybersecurity education that equips individuals with the skills needed to protect digital assets and combat cyber threats in an increasingly connected world.
          </p>
          
          <h2 style={{
            color: '#00ff41',
            margin: '1.5rem 0 1rem',
            fontSize: '1.5rem'
          }}>Our Approach</h2>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#00ff41', marginRight: '0.5rem' }}>▹</span>
              <span>Hands-on, practical learning experiences</span>
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#00ff41', marginRight: '0.5rem' }}>▹</span>
              <span>Industry-relevant curriculum</span>
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#00ff41', marginRight: '0.5rem' }}>▹</span>
              <span>Expert instructors with real-world experience</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#00ff41', marginRight: '0.5rem' }}>▹</span>
              <span>Community-focused learning environment</span>
            </li>
          </ul>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Join us on our mission to create a more secure digital future.
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          <a
            href="/"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#00ff41',
              border: '2px solid #00ff41',
              borderRadius: '4px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '0.9rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Back to Home
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: 0,
        right: 0,
        textAlign: 'center',
        color: '#666',
        fontSize: '0.8rem',
        zIndex: 2
      }}>
        © {new Date().getFullYear()} Cyber Academy. All rights reserved.
      </div>
    </div>
  );
}
