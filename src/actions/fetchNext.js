import appendContent from '../actions/content';
import updatePagination from '../actions/pagination';

const key = '3KhaEU7c2d6T0Pj00QVJJiBFdUHlTMjx';

export default function fetchNext(pagination) {
  return async function fetchNextAction(dispatch) {
    try {
      if (pagination.error) {
        dispatch({
          type: 'LOAD_ERROR',
          error: false,
        });
      }

      let { next: offset } = pagination;
      const { limit } = pagination;
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&offset=${offset - limit}&limit=${limit}&rating=R`);

      const json = await response.json();

      if (offset === 0) {
        offset = 3000;
      }

      const next = offset - json.pagination.count;

      dispatch(updatePagination({ next }));
      dispatch(appendContent(json.data));

      return !!json.pagination.count;
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR',
        error: true,
      });

      return pagination.next;
    }
  };
}
