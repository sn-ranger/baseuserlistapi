import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createBrowserHistory as createHistory} from 'history';
import rootReducer from './reducer';

export const history = createHistory();
const logger = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export default store;
