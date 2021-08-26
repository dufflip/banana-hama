import { v4 as uuid } from "uuid";

/**
 * CONSTANTES
 */
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";
const LOGOUT = "LOGOUT";

const ADD_FATURAMENTO = "ADD_FATURAMENTO";
const ADD_LOCAL_ENVIO = "ADD_LOCAL_ENVIO";
const CART_REMOVE = "CART_REMOVE";

const ADD_COUPON = "ADD_COUPON";
const REMOVE_COUPON = "REMOVE_COUPON";

/**
 * ACTIONS
 */
export const ACTION_addToCart = (product) => ({
  type: ADD_TO_CART,
  product: { ...product, uuid: uuid() },
});
export const ACTION_checkout = () => ({ type: CHECKOUT });
export const ACTION_faturamento = (endereco) => ({
  type: ADD_FATURAMENTO,
  endereco,
});
export const ACTION_envios = (endereco) => ({
  type: ADD_LOCAL_ENVIO,
  endereco,
});
export const ACTION_cart_remove = (uuid) => ({ type: CART_REMOVE, uuid });

export const ACTION_addCoupon = (coupon) => ({ type: ADD_COUPON, coupon });
export const ACTION_removeCoupon = () => ({ type: REMOVE_COUPON });

/**
 * INITIAL_STATE
 */
const INITIAL_STATE = {
  products: [],
  faturamento: { cep: "", logradouro: "", bairro: "", localidade: "", uf: "" },
  envio: { cep: "", logradouro: "", bairro: "", localidade: "", uf: "" },
  coupon: {},
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
        products: state.products.filter((value) => value.uuid !== action.uuid),
      };
    case ADD_COUPON:
      return {
        ...state,
        coupon: action.coupon,
      };
    case REMOVE_COUPON:
      return {
        ...state,
        coupon: {},
      };
    default:
      return state;
  }
}

export default cart;
