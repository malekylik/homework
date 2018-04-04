import { combineReducers } from 'redux';
import { contentReducer } from './contentReducer';
import { paginationReducer } from './paginationReducer';

export const mainReducer = combineReducers({
    content: contentReducer,
    pagination: paginationReducer
});
