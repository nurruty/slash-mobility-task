import React from 'react';
import './Card.scss';

const Card = ({ imgSrc, title, artist, icon }) => {
  return (
    <div className={'Card'}>
      {imgSrc && (
        <div className="Card-img">
          <img src={imgSrc} alt="" />
        </div>
      )}

      {title && <div className="Card-title">{title}</div>}

      <div className="Card-artist">{artist}</div>
      {icon && <div className="Card-icon">{icon}</div>}
    </div>
  );
};

export default Card;
