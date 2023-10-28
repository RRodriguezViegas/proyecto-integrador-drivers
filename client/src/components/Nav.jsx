import React from 'react';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to={'/drivers'}>
        <button>Home</button>
      </Link>
      <Link to={'/create'}>
        <button>Create new driver</button>
      </Link>
      <SearchBar />
    </div>
  );
}
