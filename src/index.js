import React from 'react';
import ReactDOM from 'react-dom';
import './ind.css';

import { Content } from './components/Content/Content';
import { ImageInsertingHelper } from './ImageInsertingHelper';

import './components/Preview/Preview.css';

const IMAGES = [
    {
        src:'http://iphonexwallpapers.com/wp-content/uploads/2017/11/birds-wallpapers.com-flamingos-sun-east.jpg',
        alt:0
    },
    {
        src:'https://artzine.me/wp-content/uploads/2016/02/inspiration-1.jpg',
        alt:1
    },
    {
        src:'https://img-fotki.yandex.ru/get/6418/31935267.14/0_8043b_6e85cb52_L.jpg',
        alt:2
    },
    {
        src:'http://viborserdca.ru/wp-content/uploads/2014/12/291131-1.jpg',
        alt:3
    },
    {
        src:'http://iphonexwallpapers.com/wp-content/uploads/2017/11/birds-wallpapers.com-flamingos-sun-east.jpg',
        alt:4
    },
    {
        src:'https://cs3.livemaster.ru/zhurnalfoto/d/5/2/131106165609.jpg',
        alt:5
    },
    {
        src:'https://cs3.livemaster.ru/zhurnalfoto/d/5/2/131106165609.jpg',
        alt:6
    },
    {
        src:'http://www.stihi.ru/pics/2015/06/01/9569.jpg',
        alt:7
    },
    {
        src:'http://cs412321.vk.me/v412321260/a317/dsbdnWCtFmo.jpg',
        alt:8
    },
    {
        src:'http://monodomo.com/free-wallpapers/anime-fantasy-landscape-wallpaper-1080p-For-Free-Wallpaper.jpg',
        alt:9
    },
    {
        src:'https://orig00.deviantart.net/42b8/f/2013/108/6/1/moorhuhn_2_custom_icon_by_thedoctor45-d3hwlsu.png',
        alt:10
    },
    {
        src:'http://cs412321.vk.me/v412321260/a317/dsbdnWCtFmo.jpg',
        alt:11
    },
    {
        src:'http://monodomo.com/free-wallpapers/anime-fantasy-landscape-wallpaper-1080p-For-Free-Wallpaper.jpg',
        alt:12
    },
    {
        src:'https://orig00.deviantart.net/42b8/f/2013/108/6/1/moorhuhn_2_custom_icon_by_thedoctor45-d3hwlsu.png',
        alt:13
    },
    {
        src:'http://cs412321.vk.me/v412321260/a317/dsbdnWCtFmo.jpg',
        alt:14
    },
    {
        src:'http://iphonexwallpapers.com/wp-content/uploads/2017/11/birds-wallpapers.com-flamingos-sun-east.jpg',
        alt:15
    },
    {
        src:'http://viborserdca.ru/wp-content/uploads/2014/12/291131-1.jpg',
        alt:16
    }
];

const imageInsertingHelper = new ImageInsertingHelper(200, 5);

async function getImages(images) {
    return await Promise.all(IMAGES.map(async (e,i,a) => {
                const { src, alt } = e;
                const img = new Image();
                img.src = src;
                
                await new Promise((resolve, reject) => {
                    img.onload = () => resolve(img);
                }); 
                    
                const { naturalWidth, naturalHeight } = img;
                const { ratioWidth, ratioHeight } = imageInsertingHelper.calculateRatio(img);
                
                return {
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

const rationImages = getImages(IMAGES);

rationImages.then((res) => {
    ReactDOM.render(<Content images={res} imageInsertingHelper={imageInsertingHelper} />,
    document.getElementById('root'));
});
