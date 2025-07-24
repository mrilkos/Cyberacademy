'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState('');
  const [imageHovered, setImageHovered] = useState(false);
  
  return (
    <section style={{
      position: 'relative',
      zIndex: 5,
      padding: '6rem 5%',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '4rem',
      minHeight: 'calc(100vh - 80px)'
    }}>
      <div style={{ 
        flex: 1, 
        textAlign: 'left',
        maxWidth: '800px'
      }}>
        <div style={{
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#00ff41',
            textShadow: '0 0 20px rgba(0, 255, 65, 0.6)',
            lineHeight: '1.2',
            maxWidth: '900px',
            margin: '0 auto 1.5rem'
          }}>
            Master Cybersecurity with Expert-Led Training
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#e0e0e0',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            opacity: 0.9
          }}>
            Join our community of cybersecurity professionals and gain the skills needed to protect digital assets in an increasingly connected world.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <Link
              href="/courses"
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '4px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: hoveredButton === 'explore' ? 'transparent' : '#00ff41',
                color: hoveredButton === 'explore' ? '#00ff41' : '#000',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: '2px solid #00ff41',
                boxShadow: hoveredButton === 'explore' ? '0 0 15px rgba(0, 255, 65, 0.5)' : 'none'
              }}
              onMouseOver={() => setHoveredButton('explore')}
              onMouseOut={() => setHoveredButton('')}
            >
              Explore Courses
            </Link>
            
            <Link
              href="/about"
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '4px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: hoveredButton === 'about' ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
                color: '#00ff41',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: '2px solid #00ff41',
                boxShadow: hoveredButton === 'about' ? '0 0 15px rgba(0, 255, 65, 0.5)' : 'none'
              }}
              onMouseOver={() => setHoveredButton('about')}
              onMouseOut={() => setHoveredButton('')}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0',
        zIndex: 5
      }}>
        <div 
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '1',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '2px solid #00ff41',
            boxShadow: imageHovered 
              ? '0 10px 40px rgba(0, 255, 65, 0.5)' 
              : '0 0 30px rgba(0, 255, 65, 0.3)',
            transform: imageHovered ? 'translateY(-5px)' : 'none',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={() => setImageHovered(true)}
          onMouseLeave={() => setImageHovered(false)}
        >
          <img 
            src="/hacker.jpg" 
            alt="Cybersecurity Professional"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 255, 65, 0.1) 100%)',
            mixBlendMode: 'overlay'
          }} />
        </div>
      </div>
    </section>
  );
}
