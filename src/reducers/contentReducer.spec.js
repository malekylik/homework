/* eslint-disable */

import { expect } from 'chai';
import contentReducer from './contentReducer';
import appendContent from '../actions/content';

describe('Reducer::Content',function() {
    it('returns notShowed (empty array), images (empty array) if state is undefined', function() {
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
    it('on APPEND_CONTENT returns new state with added images and replaced notShowed', () => {
        // setup
        const prevState = {
            notShowed: [{
                alt: "i love you GIF by American Film Institute",
                id: "7zliaSiCjWREhN1iqC",
                miniature: {
                    size: {
                        height: 200,
                        width: 267,
                    },
                    src: "https://media2.giphy.com/media/7zliaSiCjWREhN1iqC/200_s.gif",
                },
                original: {
                    size: {
                        height: 360,
                    },
                    src:
                    "https://media2.giphy.com/media/7zliaSiCjWREhN1iqC/giphy.gif"
                },
                style: {
                    height: 212,
                    marginRight: 5,
                    marginTop: 0,
                    width: 283,
                },
            }],
            images: [{
                alt: "infinity war hair GIF by Marvel Studios",
                id: "3oxHQnMGZeJXY0vqAo",
                miniature: {
                    size: {
                        height: 200,
                        width: 482,
                    },
                    src: "https://media3.giphy.com/media/3oxHQnMGZeJXY0vqAo/200_s.gif"
                },
                original: {
                size:{
                    height: 199,
                    width: 480,
                },
                    src: "https://media3.giphy.com/media/3oxHQnMGZeJXY0vqAo/giphy.gif",
                },
                style: {
                    height: 212,
                    marginRight: 5,
                    marginTop: 0,
                    width: 512,
                }
            },],
        };
        
        const actionContent = {
            notShowed: [{
                alt: "al pacino enemy GIF by Top 100 Movie Quotes of All Time",
                id: "3oEjHJS68gbuZibH8Y",
                miniature: {
                    size: {
                        height: 200,
                        width: 356,
                    },
                    src: "https://media2.giphy.com/media/3oEjHJS68gbuZibH8Y/200_s.gif",
                },
                original: {
                    size: {
                        height: 360,
                        width: 640,
                    },
                    src: "https://media2.giphy.com/media/3oEjHJS68gbuZibH8Y/giphy.gif",
                },
                style: {
                    height: 212,
                    marginRight: 5,
                    marginTop: 0,
                    width: 378,
                },
            }],
            images: [{
                alt: "al pacino parody GIF by Cheezburger",
                id: "1HvSXlPisVtHG",
                miniature:{
                    size: {
                        height: 200,
                        width: 265,
                    },
                    src: "https://media2.giphy.com/media/1HvSXlPisVtHG/200_s.gif",
                },
                original: {
                    size: {
                    height: 294,
                    width: 389,
                    },
                    src: "https://media2.giphy.com/media/1HvSXlPisVtHG/giphy.gif",
                },
                style: {
                    height: 212,
                    marginRight: 0,
                    marginTop: 0,
                    width: 281,
                },
            },],
        }
        
        const expectedNewState = {
            notShowed: [{
                alt: "al pacino enemy GIF by Top 100 Movie Quotes of All Time",
                id: "3oEjHJS68gbuZibH8Y",
                miniature: {
                    size: {
                        height: 200,
                        width: 356,
                    },
                    src: "https://media2.giphy.com/media/3oEjHJS68gbuZibH8Y/200_s.gif",
                },
                original: {
                    size: {
                        height: 360,
                        width: 640,
                    },
                    src: "https://media2.giphy.com/media/3oEjHJS68gbuZibH8Y/giphy.gif",
                },
                style: {
                    height: 212,
                    marginRight: 5,
                    marginTop: 0,
                    width: 378,
                },
            }],
            images: [{
                alt: "infinity war hair GIF by Marvel Studios",
                id: "3oxHQnMGZeJXY0vqAo",
                miniature: {
                    size: {
                        height: 200,
                        width: 482,
                    },
                    src: "https://media3.giphy.com/media/3oxHQnMGZeJXY0vqAo/200_s.gif"
                },
                original: {
                size:{
                    height: 199,
                    width: 480,
                },
                    src: "https://media3.giphy.com/media/3oxHQnMGZeJXY0vqAo/giphy.gif",
                },
                style: {
                    height: 212,
                    marginRight: 5,
                    marginTop: 0,
                    width: 512,
                }
            },
            {
                alt: "al pacino parody GIF by Cheezburger",
                id: "1HvSXlPisVtHG",
                miniature:{
                    size: {
                        height: 200,
                        width: 265,
                    },
                    src: "https://media2.giphy.com/media/1HvSXlPisVtHG/200_s.gif",
                },
                original: {
                    size: {
                    height: 294,
                    width: 389,
                    },
                    src: "https://media2.giphy.com/media/1HvSXlPisVtHG/giphy.gif",
                },
                style: {
                    height: 212,
                    marginRight: 0,
                    marginTop: 0,
                    width: 281,
                },
            },],
        }

        // execute
        const newState = contentReducer(prevState, appendContent(actionContent));

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
});
