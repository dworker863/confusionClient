import { fetchPromotions } from 'api/api';

const SET_PROMOTIONS = 'confusion/promotions/SET_PROMOTIONS';
const SET_FETCHING = 'confusion/promotions/SET_FETCHING';

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROMOTIONS:
      return { ...state, items: payload };

    case SET_FETCHING:
      return { ...state, isFeetching: payload };

    default:
      return state;
  }
};

export const setPromotions = (promotions) => ({
  type: SET_PROMOTIONS,
  payload: promotions,
});

export const setFetching = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const getPromotions = () => (dispatch) => {
  fetchPromotions().then((promotions) => {
    dispatch(setPromotions(promotions));
  });
};
