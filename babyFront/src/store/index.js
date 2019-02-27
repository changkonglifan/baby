import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise'
import createLogger from 'redux-logger';
import promiseMiddleware from './MiddleWare/promiseMiddleware';
import afterApiMiddleware from './MiddleWare/afterApiMiddleware';

const store = createStore(
    rootReducer,
    //中间件
    applyMiddleware(
        thunkMiddleware,
        promise,
        createLogger,
        afterApiMiddleware,
        promiseMiddleware,
    )
);

export default store;
