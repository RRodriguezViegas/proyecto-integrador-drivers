import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1>LandingPage</h1>
      <button onClick={() => navigate('/drivers')}>Drivers</button>
    </div>
  );
}
