import React, { useEffect } from 'react';
import { debounce } from '../../utils';
import Icon from '../Icon/Icon';
import './SearchBar.scss';

const SearchBar = ({ placeholder, onSubmit }) => {
  useEffect(() => {
    const input = document.getElementById('searchBar');
    input.addEventListener(
      'input',
      debounce(() => {
        console.log('Hola');
      })
    );
  }, []);

  const handleSubmit = () => {
    onSubmit && onSubmit();
  };

  return (
    <div className="SearchBar">
      <input id="searchBar" type="search" name="searchBar" placeholder={placeholder} />
      <Icon name="magnify" size="nano" color="white" />
    </div>
  );
};

export default SearchBar;
