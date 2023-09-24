import { combineReducers, createStore } from "redux";
import dressingRoomReducer from "./reducers/dressingRoomReducer";

const rootReducer = combineReducers({
    dressingRoomReducer
})

const store = createStore(rootReducer);

export default store;