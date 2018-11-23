import {TEST} from '../actions/actionTypes';

const initialState = {
  test: "1"
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state, test: '2'
      }
    default:
      return state
  }
}