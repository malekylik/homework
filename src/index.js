import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import './index.css';

import { Content } from './components/Content/Content';
import { ImageInsertingHelper } from './ImageInsertingHelper';
import { mainReducer } from './reducers/mainReducer';

import './components/Preview/Preview.css';

export const imageInsertingHelper = new ImageInsertingHelper(200, 5);

function middleware({dispatch, getState}) {
    return next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        return next(action);
    };
}

let store = createStore(
    mainReducer,
    undefined,
    applyMiddleware(middleware)
);

      
ReactDOM.render(
    <Provider store={store}>
        <Content imageInsertingHelper={imageInsertingHelper} />
    </Provider>,
    document.getElementById('root')
);
