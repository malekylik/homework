import { imageInsertingHelper } from './mainReducer';

export default function contentReducer(content, action) {
  if (content === undefined) {
    return {
      notShowed: [],
      images: [],
    };
  }

  if (action.type === 'RECALCULATE_CONTENT') {
    const nextContent = [...content.images, ...content.notShowed];
    const images = imageInsertingHelper.calculateRows(nextContent, 0);
    return {
      notShowed: [...nextContent.slice(images.length)],
      images,
    };
  }

  if (action.type === 'APPEND_CONTENT') {
    return {
      notShowed: action.notShowed,
      images: [...(content.images), ...(action.images)],
    };
  }

  return content;
}
