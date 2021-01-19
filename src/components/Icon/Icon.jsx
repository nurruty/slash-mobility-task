import React from 'react';
import icons from './icons';
import './Icon.scss';

const Icon = ({ name, size, color, counter, className, onClick }) => {
  const colorClass = ' Icon_' + color;
  const sizeClass = ' Icon_' + size;

  return (
    <div className="Icon">
      <svg
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={'Icon-svg ' + colorClass + sizeClass}
        onClick={onClick}
      >
        {icons[name] || name}
      </svg>
      {counter && <div className="Icon-counter">{counter}</div>}
    </div>
  );
};

export default Icon;
