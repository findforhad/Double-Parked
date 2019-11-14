import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import booking from "./booking.reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["booking"]
};

const rootReducer = combineReducers({
  booking
});

export default persistReducer(persistConfig, rootReducer);
