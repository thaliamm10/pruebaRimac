import {createStore, applyMiddleware, Store, combineReducers} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import PlansReducer from "./plans/PlansReducer";

const initialState = {};

const rootReducer = combineReducers({
    // Otros reducers aquí si es necesario
    data: PlansReducer
});

const store: Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
