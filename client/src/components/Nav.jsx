import React from 'react';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
      <Link to={'/create'}>
        <button>Create Driver</button>
      </Link>
      <SearchBar />
    </div>
  );
}
