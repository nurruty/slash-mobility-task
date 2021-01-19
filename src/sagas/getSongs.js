import * as ActionTypes from '../constants/ActionTypes';
import { call, put, takeLatest, take, delay } from 'redux-saga/effects';
import { getSongs } from '../api/songs';

function* getAllSongs({ payload }) {
  const { artist = '' } = payload;
  try {
    yield delay(300);
    const songs = yield call(getSongs, { artist });
    yield put({ type: ActionTypes.GET_SONGS_SUCCEDED, payload: songs });
  } catch (e) {
    yield put({ type: ActionTypes.GET_SONGS_FAILED, message: e.message });
  }
}

export default function* watchGetSongs() {
  yield takeLatest(ActionTypes.GET_SONGS_REQUESTED, getAllSongs);
}
