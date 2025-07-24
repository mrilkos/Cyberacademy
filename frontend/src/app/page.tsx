export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
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
        textAlign: 'center',
        maxWidth: '800px',
        padding: '2rem',
        border: '1px solid #00ff41',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#00ff41',
          textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
        }}>
          CYBER ACADEMY
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2.5rem',
          color: '#e0e0e0',
          lineHeight: '1.6',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Master the art of cybersecurity through hands-on learning and real-world challenges.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '3rem'
        }}>
          <a
            href="/courses"
            style={{
              padding: '0.875rem 2rem',
              backgroundColor: '#00ff41',
              color: '#000',
              borderRadius: '4px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid #00ff41',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '0.9rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#00ff41';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#00ff41';
              e.currentTarget.style.color = '#000';
            }}
          >
            Explore Courses
          </a>
          
          <a
            href="/test"
            style={{
              padding: '0.875rem 2rem',
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
            Test Page
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
