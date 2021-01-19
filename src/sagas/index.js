import { takeLatest } from 'redux-saga';
import { all } from 'redux-saga/effects';
import * as ActionTypes from '../constants/ActionTypes';
import watchGetSongs from './getSongs';

export default function* watchMany() {
  yield all([watchGetSongs()]);
}
