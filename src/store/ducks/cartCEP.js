/**
 * CONSTANTES
 */
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";
const LOGOUT = "LOGOUT";

const ADD_FATURAMENTO = "ADD_FATURAMENTO";
const ADD_LOCAL_ENVIO = "ADD_LOCAL_ENVIO";
const CART_REMOVE = "CART_REMOVE";

/**
 * ACTIONS
 */
export const ACTION_addToCart = (product) => ({ type: ADD_TO_CART, product });
export const ACTION_checkout = () => ({ type: CHECKOUT });
export const ACTION_faturamento = (endereco) => ({
  type: ADD_FATURAMENTO,
  endereco,
});
export const ACTION_envios = (endereco) => ({
  type: ADD_LOCAL_ENVIO,
  endereco,
});
export const ACTION_cart_remove = (id) => ({ type: CART_REMOVE, id });

/**
 * INITIAL_STATE
 */
const INITIAL_STATE = {
  products: [],
  faturamento: { cep: "", logradouro: "", bairro: "", localidade: "", uf: "" },
  envio: { cep: "", logradouro: "", bairro: "", localidade: "", uf: "" },
};

/**
 * REDUCER
 *
 */
function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.product] };
    case CHECKOUT:
      return INITIAL_STATE;
    case LOGOUT:
      return INITIAL_STATE;
    case ADD_FATURAMENTO:
      return { ...state, faturamento: action.endereco };
    case ADD_LOCAL_ENVIO:
      return { ...state, envio: action.endereco };
    case CART_REMOVE:
      return {
        ...state,
        products: state.products.filter((value) => value.id !== action.id),
      };
    default:
      return state;
  }
}

export default cart;
