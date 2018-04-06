import { appendContent } from '../actions/content';
import { updatePagination } from '../actions/pagination';

let count = 0;

export function fetchNext(pagination) {
    return async function (dispatch, getState) {
        // dispatch({
        //     type: 'FEED_LOADING',
        //     loading: true
        // });

        try {
            // Loading

            let response = await fetch(`/api/recent/${pagination.next}?limit=${pagination.limit}&format=json`, {credentials: 'same-origin'});
            console.log(response);
            let json = await response.json();
            const next = (json.links.next && json.links.next.match(/updated.+\//)[0]) || '';
            const isNext = !!next;
            
            console.log(next);
            console.log(json);

            count += json.entries.length;

            console.log('count: ' + count);


            dispatch(updatePagination({next, isNext}));
            dispatch(appendContent(json.entries));

            return isNext;



            // dispatch({
            //     type: 'FEED_APPEND_CARDS',
            //     cards: json.results,
            //     next: json.next
            // });
        } catch (error) {
            console.log(error);
            return;
            // dispatch({
            //     type: 'FEED_ERROR',
            //     error
            // });
        } finally {
            // dispatch({
            //     type: 'FEED_LOADING',
            //     loading: false
            // });
        }
    };
}
