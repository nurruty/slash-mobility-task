import React from 'react';
import Icon from '../Icon/Icon';
import './SearchBar.scss';

const SearchBar = (props) => {
  const { placeholder, isMobile, onChange } = props;

  const handleInput = (e) => {
    if (e.target.value) {
      onChange && onChange(e.target.value);
    }
  };

  const mobileClass = isMobile ? ' SearchBar_mobile' : '';

  return (
    <div className={'SearchBar' + mobileClass}>
      <input id="searchBar" type="search" name="searchBar" placeholder={placeholder} onChange={handleInput} />
      <Icon name="magnify" size="nano" color="white" />
    </div>
  );
};

export default SearchBar;
