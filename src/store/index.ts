import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core"
import rootReducer from './rootReducer'
import rootSaga from './sagas'

export const configureMainStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
        devTools: import.meta.env.NODE_ENV !== "production"
    });

    sagaMiddleware.run(rootSaga);

    return {store};
};


