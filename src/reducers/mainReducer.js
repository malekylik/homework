import { combineReducers } from 'redux';
import { contentReducer } from './contentReducer';
import { paginationReducer } from './paginationReducer';
import { ImageInsertingHelper } from '../ImageInsertingHelper';

export const imageInsertingHelper = new ImageInsertingHelper(200, 5);

export const mainReducer = combineReducers({
    content: contentReducer,
    pagination: paginationReducer
});
