import * as ActionTypes from '../../constants/ActionTypes';

export const getSongs = ({ artist }) => {
  return {
    type: ActionTypes.GET_SONGS_REQUESTED,
    payload: { artist },
  };
};

export const addFavouriteSong = (song) => {
  return {
    type: ActionTypes.ADD_FAVOURITE_SONG_REQUESTED,
    payload: song,
  };
};

export const removeFavouriteSong = (song) => {
  return {
    type: ActionTypes.REMOVE_FAVOURITE_SONG_REQUESTED,
    payload: song,
  };
};
