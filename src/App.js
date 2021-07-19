import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import { GlobalStyle } from "./globalStyles.js";

import Routes from "./routes";

/**
 * Importa a store
 */
import store from "./store";

function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        {/* <GlobalStyle /> */}
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
