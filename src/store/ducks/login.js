/**
 * CONSTANTES
 */
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

/**
 * ACTIONS
 */
export const ACTION_login = (login) => ({ type: LOGIN, login });
export const ACTION_logout = () => ({ type: LOGOUT });

/**
 * INITIAL_STATE
 */
const INITIAL_STATE = {};

/**
 * REDUCER
 */
function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return action.login;
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default LoginReducer;
