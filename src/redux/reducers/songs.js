import * as ActionTypes from '../../constants/ActionTypes';

const songState = (state, action) => {
  switch (action.type) {
    case ActionTypes.GET_SONGS_SUCCEDED:
      console.log(state);
      return {
        artistId: state.artistId,
        artistName: state.artistName,
        aristImgUrl: state.artworkUrl100,
        collectionName: state.collectionName,
        trackName: state.trackName,
      };
    default:
      return state;
  }
};

const initialState = {
  songsItems: [],
  loadingSongs: false,
};

const songsState = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SONGS_REQUESTED: {
      return { ...state, loadingSongs: true };
    }
    case ActionTypes.GET_SONGS_SUCCEDED: {
      return { ...state, songsItems: action.payload.map((s) => songState(s, action)), loadingSongs: false };
    }
    case ActionTypes.GET_SONGS_FAILED: {
      return { ...state, loadingSongs: false, getFailed: true };
    }
    default:
      return state;
  }
};

export default songsState;
