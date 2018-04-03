import { imageInsertingHelper, rationImages } from '../index';

export function contentReducer(state, action) {
    if (state === undefined) {
        return {
            content: rationImages
        };
    }

    if (action.type === 'RECALCULATE_CONTENT') {
        return {
            ...state,
            content: imageInsertingHelper.calculateRows(rationImages)
        }
    }

    return {
        ...state
    };
}