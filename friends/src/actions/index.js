import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";


//////GETTING A FRIEND FROM DATABASE
export const FETCH_FRIEND_START = "FETCH_FRIEND_START"
export const FETCH_FRIEND_SUCCESS = "FETCH_FRIEND_SUCCESS"
export const FETCH_FRIEND_FAILED = "FETCH_FRIEND_FAILED"

export const getFriend = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_FRIEND_START});

        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then((res) => {
            dispatch({ type: FETCH_FRIEND_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            dispatch({ type: FETCH_FRIEND_FAILED, payload: err.res})
        })
    }
}

/////POSTING A NEW FRIEND ACTION
export const NEW_FRIEND_START = "NEW_FRIEND_START";
export const NEW_FRIEND_SUCCESS = "NEW_FRIEND_SUCCESS";
export const NEW_FRIEND_FAILED = "NEW_FRIEND_FAILED";

export const newFriend = (friend) => (dispatch) => {
  dispatch({ type: NEW_FRIEND_START });

  return axios
    .post("http://localhost:5000/api/friends", friend)
    .then((res) => dispatch({ type: NEW_FRIEND_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: NEW_FRIEND_FAILED, payload: err }));
};
