import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css';

import { Content } from './components/Content/Content';
import { ImageInsertingHelper } from './ImageInsertingHelper';
import { contentReducer } from './reducers/contentReducer';

import './components/Preview/Preview.css';

export const imageInsertingHelper = new ImageInsertingHelper(200, 5);

const apiKey = '3KhaEU7c2d6T0Pj00QVJJiBFdUHlTMjx';

async function getImages() {
    let response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15`);
    let json = await response.json();
    let images = json.data;

    return images.map((e,i,a) => {
                const { id, title: alt, images: { original: { url: src, width: naturalWidth, height: naturalHeight } } } = e;         
                const { ratioWidth, ratioHeight } = imageInsertingHelper.calculateRatio({
                    naturalWidth,
                    naturalHeight
                });
                
                return {
                    id,
                    src,
                    alt,
                    ratioWidth,
                    ratioHeight,
                    naturalWidth,
                    naturalHeight
                };
            }
        );
}

export let rationImages;

getImages().then((value) => {
    rationImages = value;

    let store = createStore(
        contentReducer
    );
    
    
    ReactDOM.render(
        <Provider store={store}>
            <Content imageInsertingHelper={imageInsertingHelper} />
        </Provider>,
        document.getElementById('root')
    );
});
