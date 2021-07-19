/**
 * CONSTANTES
 */
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";
const LOGOUT = "LOGOUT";

/**
 * ACTIONS
 */
export const ACTION_addToCart = (product) => ({ type: ADD_TO_CART, product });
export const ACTION_checkout = () => ({ type: CHECKOUT });

/**
 * INITIAL_STATE
 */
const INITIAL_STATE = [];

/**
 * REDUCER
 *
 */
function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    case CHECKOUT:
      return INITIAL_STATE;
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default cart;
