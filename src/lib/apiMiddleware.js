import * as types from '../redux/actions/types';

export default store => next => async (action) => {
  next(action);
  switch (action.type) {
    case types.GET_ALBUM_INFO: {
      try {
        // fetch album info
        // dispatch GET_ALBUM_INFO_FETCHED
      } catch (error) {
        next({
          type: types.GET_ALBUM_INFO_ERROR,
          error
        });
      }
      break;
    }
    default:
      break;
  }
};
