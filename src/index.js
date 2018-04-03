import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Content } from './components/Content/Content';
import { ImageInsertingHelper } from './ImageInsertingHelper';

import './components/Preview/Preview.css';

const apiKey = '3KhaEU7c2d6T0Pj00QVJJiBFdUHlTMjx';

const imageInsertingHelper = new ImageInsertingHelper(200, 5);

async function getImages() {
    let response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`);
    let json = await response.json();
    console.log(json);
    let images = json.data;

    return await Promise.all(images.map(async (e,i,a) => {
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
        )
    );
}

const rationImages = getImages();

rationImages.then((res) => {
    ReactDOM.render(<Content images={res} imageInsertingHelper={imageInsertingHelper} />,
    document.getElementById('root'));
});
