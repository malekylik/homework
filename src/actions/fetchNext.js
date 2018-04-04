import { appendContent } from '../actions/content';
import { updatePagination } from '../actions/pagination';

const apiKey = '3KhaEU7c2d6T0Pj00QVJJiBFdUHlTMjx';
const apiUrl = 'http://api.giphy.com/v1/gifs/trending';
// const apiUrl = '/recent/?limit=10&format=json';



export function fetchNext(pagination) {
    return async function (dispatch, getState) {
        // dispatch({
        //     type: 'FEED_LOADING',
        //     loading: true
        // });

        try {
            // Loading

            let params = Object.keys(pagination)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(pagination[key])}`)
                .join('&');

            let response = await fetch(`${apiUrl}?${params}&api_key=${apiKey}`);
            // console.log(`${apiUrl}?${params}&api_key=${apiKey}`);
            let json = await response.json();
            console.log(json);


            dispatch(updatePagination(json.pagination.count, json.pagination.offset));
            dispatch(appendContent(json.data));

            // dispatch({
            //     type: 'FEED_APPEND_CARDS',
            //     cards: json.results,
            //     next: json.next
            // });
        } catch (error) {
            console.log(error);
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
