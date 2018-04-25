/* eslint-disable */

import { expect } from 'chai';
import paginationReducer from './paginationReducer';
import updatePagination from '../actions/pagination';

describe('Reducer::Pagination', function() {
    it('on UPDATE_PAGINATION returns same object except with updated next (number)', function() {
        // setup
        const state = {
            limit: 15,
            next: 0,
            error: false,
        };

        const actionMessage = updatePagination({ next: 15 });

        const expectedNewState = {
            limit: 15,
            next: 15,
            error: false,
        };

        // execute
        const newState = paginationReducer(state, actionMessage);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on LOAD_ERROR returns new state with set error flag to true', () => {
        // setup
        const state = {
            limit: 15,
            next: 0,
            error: false,
        };

        const expectedNewState = {
            limit: 15,
            next: 0,
            error: true,
        };

        // execute
        const newState = paginationReducer(
            state, 
            {
                type: 'LOAD_ERROR',
                error: true,
            },
        );

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
});
