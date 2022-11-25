import axios from 'axios';
import BOARD from './constants';

export const requestBoards = (data) => async (dispatch) => {
  dispatch({
    type: BOARD.LOAD,
  });
  try {
    const json = await axios.get('./resources/data.json');
    console.log(json);
    dispatch({
      type: BOARD.LOAD_SUCCESS,
      boardsData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: BOARD.LOAD_SUCCESS,
      boardsData: [],
      isError: true,
    });
  }
};