'use client';

import { useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        backgroundColor: 'rgba(0, 20, 10, 0.7)',
        borderRadius: '8px',
        padding: '2rem',
        border: '1px solid rgba(0, 255, 65, 0.3)',
        transition: 'all 0.3s ease',
        height: '100%',
        transform: isHovered ? 'translateY(-5px)' : 'none',
        boxShadow: isHovered ? '0 10px 20px rgba(0, 255, 65, 0.2)' : 'none',
        borderColor: isHovered ? '#00ff41' : 'rgba(0, 255, 65, 0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#00ff41'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#fff',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#ccc',
        lineHeight: '1.6',
        fontSize: '1rem'
      }}>
        {description}
      </p>
    </div>
  );
}
