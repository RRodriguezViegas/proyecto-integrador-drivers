import React from 'react';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';
import styles from '../Css/Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttons}>
        <Link to={'/drivers'}>
          <button>Home</button>
        </Link>
        <Link to={'/create'}>
          <button>Create new driver</button>
        </Link>
      </div>

      <div className={styles.searchbar}>
        <SearchBar />
      </div>
    </div>
  );
}
