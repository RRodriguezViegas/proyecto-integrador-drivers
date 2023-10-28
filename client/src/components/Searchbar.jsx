import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSearch } from '../redux/actions';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
  const [valueName, setValueName] = useState('');
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setValueName(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          placeholder='Search'
          type='search'
          onChange={handleChange}
          value={valueName}
        />
      </div>
      <button
        onClick={() => dispatch(onSearch(searchParams.get('name')))}
        type='submit'
      >
        Search
      </button>
    </div>
  );
}
