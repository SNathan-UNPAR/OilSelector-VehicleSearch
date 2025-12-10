import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ 
        gridColumn: '1 / -1', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        textAlign: 'center'
    }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>404</h1>
        <p style={{ fontSize: '1.5rem' }}>Page Not Found</p>
        <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
            Go back to Vehicle Search
        </Link>
    </div>
  );
}

export default NotFound;