import React, { useCallback } from 'react';
import './ByArtist.scss';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import { addFavouriteSong, removeFavouriteSong } from '../redux/actions/songs';
import Icon from '../components/Icon/Icon';
import { isMobile } from '../utils';

const ByArtistPage = (props) => {
  const { songs } = props;
  const { songsItems = [] } = songs;

  const handleAddFavourite = useCallback(
    (song) => {
      const { dispatch } = props;
      dispatch(addFavouriteSong(song));
    },
    [songs]
  );

  const handleRemoveFavourite = useCallback(
    (song) => {
      const { dispatch } = props;
      dispatch(removeFavouriteSong(song));
    },
    [songs]
  );

  const isMobileClass = isMobile() ? ' ByArtist_mobile' : '';

  return (
    <div className={'ByArtist' + isMobileClass}>
      <div className="ByArtist-content">
        {Object.keys(songsItems).length > 0 &&
          Object.values(songsItems).map((s) => {
            return (
              <div key={s.id} className="ByArtist-item">
                <Card
                  isMobile={isMobile()}
                  imgSrc={s.aristImgUrl}
                  album={s.collectionName}
                  title={s.trackName}
                  icon={
                    <Icon
                      id={s.id}
                      name="heart"
                      size="nano"
                      onClick={() => (s.isFavourite ? handleRemoveFavourite(s) : handleAddFavourite(s))}
                      color={s.isFavourite ? 'blue' : 'white'}
                      borderColor="blue"
                    />
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

const ByArtist = connect((state) => ({
  songs: state,
}))(ByArtistPage);

export default ByArtist;
