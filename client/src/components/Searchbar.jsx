import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearch } from '../redux/actions';
import { setCurrentPage } from '../redux/actions';
import styles from '../Css/Searchbar.module.css';

export default function SearchBar() {
  const [valueName, setValueName] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setValueName(e.target.value);
    if (valueName === '') {
      dispatch(onSearch(''));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(onSearch(valueName));
    dispatch(setCurrentPage(1));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.searchbar}>
      <input
        placeholder='Search'
        type='search'
        onChange={handleChange}
        value={valueName}
        onKeyDown={handleKeyDown}
      />
      <button onClick={e => handleSubmit(e)} type='submit'>
        Search
      </button>
    </div>
  );
}
