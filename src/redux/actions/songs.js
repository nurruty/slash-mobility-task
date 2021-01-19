import * as ActionTypes from '../../constants/ActionTypes';

export const getSongs = () => {
  return {
    type: ActionTypes.GET_SONGS_REQUESTED,
  };
};
