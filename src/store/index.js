import { createStore, combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/**
 * Importa os reducers
 */
import login from "./ducks/login";
import cart from "./ducks/cartCEP";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({ login, cart });

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store);

export default { store, persistor };
