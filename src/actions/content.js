export default function appendContent(nextContent) {
  return {
    type: 'APPEND_CONTENT',
    nextContent,
  };
}
