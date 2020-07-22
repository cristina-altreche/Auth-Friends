import {
  NEW_FRIEND_START,
  NEW_FRIEND_SUCCESS,
  NEW_FRIEND_FAILED,
  FETCH_FRIEND_START,
  FETCH_FRIEND_SUCCESS,
  FETCH_FRIEND_FAILED,
} from "../actions";

const initialState = {
  friends: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND_START:
      return {
        ...state,
        isLoading: true,
        error: "",
        friends: action.payload,
      };
    case FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        friends: action.payload,
      };
    case FETCH_FRIEND_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case NEW_FRIEND_START:
      return {
        ...state,
        friends: [...state.friends, action.payload],
        isLoading: true,
        error: "",
      };
    case NEW_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: "",
      };
    case NEW_FRIEND_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      default: 
      return state;
  }
};

export default reducer;
