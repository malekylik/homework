import { imageInsertingHelper } from '../index';

function nextContentHelper(nextContent) {
    return nextContent.map((e) => {
        const { id, title: alt , img } = e; 
        let orig = {
            width: -1
        },
        miniature = {
            height: Number.POSITIVE_INFINITY
        };

        const rowHeight = imageInsertingHelper.rowHeight;

        Object.keys(img).forEach((key) => {
            if (Math.abs(rowHeight - img[key].height) <  Math.abs(rowHeight - miniature.height)) {
                miniature = img[key];
            }

            if (img[key].width > orig.width) {
                orig = img[key];
            }
        });

        const { href: naturalSrc, width: naturalWidth, height: naturalHeight } = orig;
        let { href: ratioSrc, width: ratioWidth, height: ratioHeight } = miniature;
        
        ({ ratioWidth, ratioHeight } = imageInsertingHelper.calculateRatio({
            ratioWidth,
            ratioHeight
        }));
        
        return {
            id,
            alt,
            miniature: {
                src: ratioSrc,
                size: {
                    width: ratioWidth,
                    height: ratioHeight
                }
            },
            original: {
                src: naturalSrc,
                size: {
                    width: naturalWidth,
                    height: naturalHeight
                }
            }
        };
    }
);
}

export function contentReducer(content = [], action) {

    if (action.type === 'RECALCULATE_CONTENT') {
        return imageInsertingHelper.calculateRows(content);
    }

    if (action.type === 'APPEND_CONTENT') {
        const nextContent = nextContentHelper(action.nextContent);

        return [...content, ...imageInsertingHelper.calculateRows(nextContent)];
    }

    return content;
}