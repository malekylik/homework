export default function appendContent(notShowed, images) {
  return {
    type: 'APPEND_CONTENT',
    notShowed,
    images,
  };
}
