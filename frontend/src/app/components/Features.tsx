'use client';

import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Expert-Led Training',
    description: 'Learn from industry professionals with real-world cybersecurity experience.',
    icon: '🔒'
  },
  {
    title: 'Hands-On Labs',
    description: 'Practice in realistic environments that simulate real cyber threats.',
    icon: '💻'
  },
  {
    title: 'Cutting-Edge Curriculum',
    description: 'Stay ahead with courses designed around the latest security trends.',
    icon: '🚀'
  },
  {
    title: 'Certification Prep',
    description: 'Get ready for industry-recognized cybersecurity certifications.',
    icon: '🎯'
  }
];

export default function Features() {
  return (
    <section style={{
      position: 'relative',
      zIndex: 5,
      padding: '6rem 5%',
      backgroundColor: 'rgba(0, 15, 8, 0.5)',
      borderTop: '1px solid rgba(0, 255, 65, 0.2)',
      borderBottom: '1px solid rgba(0, 255, 65, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#00ff41',
          textShadow: '0 0 15px rgba(0, 255, 65, 0.5)'
        }}>
          Why Choose Cyber Academy?
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#e0e0e0',
          maxWidth: '700px',
          margin: '0 auto 4rem',
          lineHeight: '1.8',
          opacity: 0.9
        }}>
          Our comprehensive approach to cybersecurity education ensures you get the knowledge and hands-on experience needed to excel in the field.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
