import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar({ onSearch }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          placeholder='Search'
          type='search'
          onChange={handleChange}
          value={name}
        />
      </div>
      <button onClick={() => dispatch(onSearch(name))} type='submit'></button>
    </div>
  );
}
