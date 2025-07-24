export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#00ff41'
      }}>
        Cyber Academy
      </h1>
      <p style={{
        fontSize: '1.25rem',
        marginBottom: '2rem',
        color: '#ccc'
      }}>
        Welcome to Cyber Academy
      </p>
      <a
        href="/test"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#00ff41',
          color: 'black',
          borderRadius: '0.375rem',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'background-color 0.2s'
        }}
      >
        Go to Test Page
      </a>
    </div>
  );
}
