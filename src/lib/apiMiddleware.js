import * as types from '../redux/actions/types';

export default store => next => async (action) => {
  next(action);
  switch (action.type) {
    case types.GET_ALBUM_INFO: {
      try {
        const albumId = action.albumId;
        const response = await fetch('https://gist.githubusercontent.com/bgdavidx/9458ff3ae6054a28e0a636367ff77bbf/raw/990adb44389595174da8fc5ec890045e0db66495/gistfile1.txt');
        setTimeout(() => null, 0); // workaround for #issue-6679
        const data = await response.json();

        next({
          type: types.GET_ALBUM_INFO_FETCHED,
          albumId,
          albumInfo: data
        });
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
