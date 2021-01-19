import * as ActionTypes from '../constants/ActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getSongs } from '../api/songs';

function* getAllSongs() {
  try {
    const songs = yield call(getSongs);
    yield put({ type: ActionTypes.GET_SONGS_SUCCEDED, payload: songs });
  } catch (e) {
    yield put({ type: ActionTypes.GET_SONGS_FAILED, message: e.message });
  }
}

export default function* watchGetSongs() {
  yield takeLatest(ActionTypes.GET_SONGS_REQUESTED, getAllSongs);
}
