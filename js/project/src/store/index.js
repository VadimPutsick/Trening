import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';

import { appReducers } from './reducers';
import { logger } from './middleware';

const appStore = createStore(
    appReducers,
    composeWithDevTools(
        applyMiddleware(store => next => action =>
            typeof action === 'function'
                ? action(store.dispatch, store.getState)
                : next(action), logger,
                promise()
        )
    )
);

export default appStore;