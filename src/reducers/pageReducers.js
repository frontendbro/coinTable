import { GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../actions/PageActions";

const initialState = {
  data: [],
  isFetching: false
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, data: action.payload, isFetching: true };

    case GET_DATA_SUCCESS:
      return { ...state, data: action.payload, isFetching: false };

    default:
      return state;
  }
}