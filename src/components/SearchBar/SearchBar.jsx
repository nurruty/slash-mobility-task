import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSongs } from '../../redux/actions/songs';
import Icon from '../Icon/Icon';
import './SearchBar.scss';

const SearchBarComponent = (props) => {
  const { placeholder, dispatch, isMobile } = props;

  const handleInput = (e) => {
    if (e.target.value) {
      dispatch(getSongs({ artist: e.target.value }));
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

const SearchBar = connect()(SearchBarComponent);

export default SearchBar;
