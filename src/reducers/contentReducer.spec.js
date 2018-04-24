/* eslint-disable */

import { expect } from 'chai';
import contentReducer from './contentReducer';
import appendContent from '../actions/content';

describe('Reducer::Content', () => {
    it('returns notShowed (empty array), images (empty array) if state is undefined', () => {
        // setup
        const state = undefined;
        const expectedNewState = {
            notShowed: [],
            images: [],
        };

        // execute
        const newState = contentReducer(state, { type: 'unknown' });

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    // it('on MESSAGE_ADD returns new state with added messages', () => {
    //     // setup
    //     const state =
    //         {
    //             items: [{ name: '1message' }, { name: '2message' }, { name: '3message' }],
    //             next: null,
    //             loading: false,
    //             count: 0,
    //         };
    //     const newMessage = { name: '4message' };
    //     const action = ActionType.addMessage(newMessage);
    //     const expectedNewState =
    //          {
    //              items: [{ name: '1message' }, { name: '2message' }, { name: '3message' }, { name: '4message' }],
    //              next: null,
    //              loading: false,
    //              count: 0,
    //          };
    //     // execute

    //     const newState = messages(state, action);

    //     // verify
    //     expect(newState).to.deep.equal(expectedNewState);
    // });
});
