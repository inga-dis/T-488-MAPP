import BOARD from './constants';

const initalState = {
  boardsData: [],
  isLoading: false,
  isError: false,
};

const boardReducer = (state = initalState, action) => {
  switch (action.type) {
    case BOARD.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case BOARD.LOAD_SUCCESS:
      return {
        ...state,
        boardsData: action.boardsData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default boardReducer;