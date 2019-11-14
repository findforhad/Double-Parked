import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(rootReducer, middleware);

export const persistor = persistStore(store);
