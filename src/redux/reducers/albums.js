import * as types from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALBUM_INFO_FETCHED: {
      const { albumId, albumInfo } = action;
      return ({
        ...state,
        [albumId]: albumInfo
      });
    }
    default:
      return state;
  }
};
