import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux-saga/reducers/rootReducer";
import rootSaga from "./redux-saga/saga/rootSaga";


const sagaMiddleware =createSagaMiddleware();

const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;