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

            if (pagination.error) {
                dispatch({
                    type: 'LOAD_ERROR',
                    error: false
                });
            }

            let response = await fetch(`/api/recent/${pagination.next}?limit=${pagination.limit}&format=json`, {credentials: 'same-origin'});
            console.log(response);
            let json = await response.json();
            const next = (json.links.next && json.links.next.match(/updated.+\//)[0]) || '';
            
            console.log(next);
            console.log(json);

            count += json.entries.length;

            console.log('count: ' + count);


            dispatch(updatePagination({next}));
            dispatch(appendContent(json.entries));

            return !!next;
        } catch (error) {
            dispatch({
                type: 'LOAD_ERROR',
                error: true
            });
            
            return pagination.next;
        } 
    };
}
