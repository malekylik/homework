import { imageInsertingHelper } from '../index';

export function contentReducer(content = [], action) {

    if (action.type === 'RECALCULATE_CONTENT') {
        return imageInsertingHelper.calculateRows(content);
    }

    if (action.type === 'APPEND_CONTENT') {
        const nextContent = action.nextContent.map((e,i,a) => {
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

        return [...content, ...imageInsertingHelper.calculateRows(nextContent)];
    }

    return content;
}