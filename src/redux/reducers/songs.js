import * as ActionTypes from '../../constants/ActionTypes';

const songState = (state, action) => {
  switch (action.type) {
    case ActionTypes.GET_SONGS_SUCCEDED:
      return {
        id: state.trackId,
        artistId: state.artistId,
        artistName: state.artistName,
        aristImgUrl: state.artworkUrl100,
        collectionName: state.collectionName,
        trackName: state.trackName,
        isFavourite: false,
      };
    case ActionTypes.ADD_FAVOURITE_SONG_REQUESTED: {
      return Object.assign({}, state, { isFavourite: true });
    }
    case ActionTypes.REMOVE_FAVOURITE_SONG_REQUESTED: {
      return Object.assign({}, state, { isFavourite: false });
    }
    default:
      return state;
  }
};

const initialState = {
  songsItems: {},
  loadingSongs: false,
};

const songsState = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SONGS_REQUESTED: {
      return { ...state, loadingSongs: true };
    }
    case ActionTypes.GET_SONGS_SUCCEDED: {
      const songsItems = {};
      action.payload.forEach((song) => {
        songsItems[song.trackId] = songState(song, {
          type: ActionTypes.GET_SONGS_SUCCEDED,
          payload: song,
        });
      });
      return {
        ...state,
        songsItems,
        loadingSongs: false,
      };
    }
    case ActionTypes.GET_SONGS_FAILED: {
      return { ...state, loadingSongs: false, getFailed: true };
    }
    case ActionTypes.REMOVE_FAVOURITE_SONG_REQUESTED:
    case ActionTypes.ADD_FAVOURITE_SONG_REQUESTED: {
      const { songsItems } = state;
      const updatedItems = Object.assign({}, songsItems, {
        [action.payload.id]: songState(songsItems[action.payload.id], action),
      });
      return { ...state, songsItems: updatedItems };
    }
    default:
      return state;
  }
};

export default songsState;
