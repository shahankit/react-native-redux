import * as types from '../actions/types';

export function fetchAlbumInfo(albumId) {
  return {
    type: types.GET_ALBUM_INFO,
    albumId
  };
}
