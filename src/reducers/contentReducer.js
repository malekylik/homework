export default function contentReducer(content, action) {
  if (content === undefined) {
    return {
      notShowed: [],
      images: [],
    };
  }

  if (action.type === 'RECALCULATE_CONTENT') {
    const { notShowed, images } = action.content;
    return {
      notShowed,
      images,
    };
  }

  if (action.type === 'APPEND_CONTENT') {
    const { notShowed, images } = action.content;
    return {
      notShowed,
      images: [...(content.images), ...images],
    };
  }

  return content;
}
