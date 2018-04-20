import appendContent from '../actions/content';
import updatePagination from '../actions/pagination';

export default function fetchNext(pagination) {
  return async function fetchNextAction(dispatch) {
    try {
      if (pagination.error) {
        dispatch({
          type: 'LOAD_ERROR',
          error: false,
        });
      }

      const response = await fetch(`/api/recent/${pagination.next}?limit=${pagination.limit}&format=json`, { credentials: 'same-origin' });

      const json = await response.json();
      const next = (json.links.next && json.links.next.match(/updated.+\//)[0]) || '';

      dispatch(updatePagination({ next }));
      dispatch(appendContent(json.entries));

      return !!next;
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR',
        error: true,
      });

      return pagination.next;
    }
  };
}
