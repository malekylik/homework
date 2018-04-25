export default function appendContent(content) {
  return {
    type: 'APPEND_CONTENT',
    content,
  };
}
