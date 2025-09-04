import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
	user: UserReducer,
});

const index = configureStore({
	reducer: rootReducer,
});

export default index;
