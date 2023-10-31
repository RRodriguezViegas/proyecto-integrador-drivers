import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Css/LandingPage.module.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.landingPage}>
      <h1>LandingPage</h1>
      <button onClick={() => navigate('/drivers')}>Drivers</button>
    </div>
  );
}
