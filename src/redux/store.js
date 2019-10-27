import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(rootReducer, middleware);

export default store;
