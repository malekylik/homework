import appendContent from '../actions/content';
import updatePagination from '../actions/pagination';
import { imageInsertingHelper } from '../reducers/mainReducer';

const API_KEY = '3KhaEU7c2d6T0Pj00QVJJiBFdUHlTMjx';

function nextContentHelper(nextContent) {
  return nextContent.map((e) => {
    const { id, title: alt, images: img } = e;
    let miniature = {
      height: Number.POSITIVE_INFINITY,
    };

    const { rowHeight } = imageInsertingHelper;

    Object.keys(img).forEach((key) => {
      if (Math.abs(rowHeight - img[key].height) < Math.abs(rowHeight - miniature.height)) {
        miniature = img[key];
      }
    });

    const { url: naturalSrc, width: naturalWidth, height: naturalHeight } = img.original;
    const { url: ratioSrc } = miniature;
    let { width: ratioWidth, height: ratioHeight } = miniature;

    ({ ratioWidth, ratioHeight } = imageInsertingHelper.calculateRatio({
      ratioWidth,
      ratioHeight,
    }));

    return {
      id,
      alt,
      miniature: {
        src: ratioSrc,
        size: {
          width: ratioWidth,
          height: ratioHeight,
        },
      },
      original: {
        src: naturalSrc,
        size: {
          width: Number(naturalWidth),
          height: Number(naturalHeight),
        },
      },
    };
  });
}

export default function fetchNext(
  pagination,
  { images: prevImages = [], notShowed: prevNotShowed = [] },
) {
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
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&offset=${Math.min(offset - limit, 0)}&limit=${limit}&rating=R`);

      const json = await response.json();

      if (offset === 0) {
        offset = 3000;
      }

      const next = offset - json.pagination.count;

      const nextContent = [...prevNotShowed, ...nextContentHelper(json.data)];
      const images = imageInsertingHelper.calculateRows(nextContent, prevImages.length);
      const notShowed = [...nextContent.slice(images.length)];

      dispatch(updatePagination({ next }));
      dispatch(appendContent({ notShowed, images }));

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
