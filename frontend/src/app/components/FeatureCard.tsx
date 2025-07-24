'use client';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 20, 10, 0.7)',
      borderRadius: '8px',
      padding: '2rem',
      border: '1px solid rgba(0, 255, 65, 0.3)',
      transition: 'all 0.3s ease',
      height: '100%',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(0, 255, 65, 0.2)',
        borderColor: '#00ff41'
      }
    }}>
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
