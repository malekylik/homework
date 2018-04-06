import { imageInsertingHelper } from '../index';

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
            images: [],
            notShowed: []
        }
    }

    if (action.type === 'RECALCULATE_CONTENT') {
        return {
            ...content,
            images: imageInsertingHelper.calculateRows(content.images)
        }
    }

    if (action.type === 'APPEND_CONTENT') {
        const nextContent = nextContentHelper(action.nextContent);
        const images = imageInsertingHelper.calculateRows([...content.notShowed, ...nextContent]);
        return {
            images: [...(content.images), ...images],
            notShowed: [...nextContent.slice(images.length)]
        }
    }

    return content;
}