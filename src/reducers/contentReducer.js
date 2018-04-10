import { imageInsertingHelper } from './mainReducer';

function nextContentHelper(nextContent) {
    return nextContent.map((e) => {
        const { id, title: alt , img } = e; 
        let orig = {
            width: -1
        },
        preview = {
            width: Number.POSITIVE_INFINITY
        },
        miniature = {
            height: Number.POSITIVE_INFINITY
        };

        const rowHeight = imageInsertingHelper.rowHeight;
        const windowWidth = window.innerWidth;

        Object.keys(img).forEach((key) => {
            if (Math.abs(rowHeight - img[key].height) <  Math.abs(rowHeight - miniature.height)) {
                miniature = img[key];
            }

            if (Math.abs(windowWidth - img[key].width) <  Math.abs(windowWidth - preview.width)) {
                preview = img[key];
            }

            if (img[key].width > orig.width) {
                orig = img[key];
            }
        });

        const { href: naturalSrc, width: naturalWidth, height: naturalHeight } = orig;
        let { href: previewSrc, width: previewWidth, height: previewHeight } = preview;
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
            preview: {
                src: previewSrc,
                size: {
                    width: previewWidth,
                    height: previewHeight
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

export function contentReducer(content, action) {
    if (content === undefined) {
        return {
            notShowed: [],
            images: [],
        }
    }

    if (action.type === 'RECALCULATE_CONTENT') {
        const nextContent = [...content.images, ...content.notShowed];
        const images = imageInsertingHelper.calculateRows(nextContent, 0);
        return {
            notShowed: [...nextContent.slice(images.length)],
            images: images
        }
    }

    if (action.type === 'APPEND_CONTENT') {
        const nextContent = [...content.notShowed, ...nextContentHelper(action.nextContent)];
        const images = imageInsertingHelper.calculateRows(nextContent, content.images.length);
        return {
            notShowed: [...nextContent.slice(images.length)],
            images: [...(content.images), ...images],
        }
    }

    return content;
}
