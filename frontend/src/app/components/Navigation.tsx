'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{
      position: 'relative',
      zIndex: 10,
      padding: '1.5rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(0, 255, 65, 0.3)'
    }}>
      <Link href="/" style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#00ff41',
        textDecoration: 'none',
        textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
      }}>
        CYBER ACADEMY
      </Link>
      <div style={{
        display: 'flex',
        gap: '2rem'
      }}>
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Courses', path: '/courses' }
        ].map((item) => (
          <Link 
            key={item.path}
            href={item.path}
            style={{
              color: '#00ff41',
              textDecoration: 'none',
              position: 'relative',
              padding: '0.5rem 0',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              '::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: '#00ff41',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease',
                boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
              },
              ':hover::after': {
                transform: 'scaleX(1)'
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
