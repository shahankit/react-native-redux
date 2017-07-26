import { put, takeEvery, all, call } from 'redux-saga/effects';

import * as types from '../actions/types';

export function* fetchAlbum(action) {
  try {
    const albumId = action.albumId;
    const response = yield call(
      fetch,
      'https://gist.githubusercontent.com/bgdavidx/9458ff3ae6054a28e0a636367ff77bbf/raw/990adb44389595174da8fc5ec890045e0db66495/gistfile1.txt'
    );
    setTimeout(() => null, 0); // workaround for #issue-6679
    const data = yield response.json();

    yield put({
      type: types.GET_ALBUM_INFO_FETCHED,
      albumId,
      albumInfo: data
    });
  } catch (error) {
    yield put({
      type: types.GET_ALBUM_INFO_ERROR,
      error
    });
  }
}

export function* watchFetchAlbum() {
  yield takeEvery(types.GET_ALBUM_INFO, fetchAlbum);
}

export default function* root() {
  yield all([
    watchFetchAlbum()
  ]);
}
