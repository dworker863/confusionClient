import { fetchLeaders } from 'api/api';

const SET_LEADERS = 'confusion/leaders/SET_LEADERS';
const SET_FETCHING = 'confusion/leaders/SET_FETCHING';

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LEADERS:
      return { ...state, items: payload };

    case SET_FETCHING:
      return { ...state, isFetching: payload };

    default:
      return state;
  }
};

export const setLeaders = (leaders) => ({
  type: SET_LEADERS,
  payload: leaders,
});

export const setFetching = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const getLeaders = () => (dispatch) => {
  fetchLeaders().then((leaders) => {
    dispatch(setLeaders(leaders));
  });
};
