import React, { useEffect } from 'react';
import './ByArtist.scss';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import { getSongs } from '../redux/actions/songs';
import Icon from '../components/Icon/Icon';

const ByArtistPage = (props) => {
  const { songs } = props;
  const { songsItems = [] } = songs;
  console.log('🚀 ~ file: ByArtist.jsx ~ line 9 ~ ByArtistPage ~ songsItems', songsItems);

  useEffect(() => {
    const { dispatch } = props;
    const { loadingSongs = false, getFailed = false } = songs;

    if (songsItems.length === 0 && !loadingSongs && !getFailed) {
      dispatch(getSongs());
    }
  }, [songs]);

  return (
    <div className="ByArtist">
      <div className="ByArtist-content">
        {songsItems.map((s) => {
          return (
            <div key={s.artistId} className="ByArtist-item">
              <Card
                imgSrc={s.aristImgUrl}
                artist={s.artistName}
                title={s.trackName}
                icon={<Icon name="heart" size="nano" />}
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
