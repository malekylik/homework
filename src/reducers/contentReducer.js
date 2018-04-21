import { imageInsertingHelper } from './mainReducer';

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

export default function contentReducer(content, action) {
  if (content === undefined) {
    return {
      notShowed: [],
      images: [],
    };
  }

  if (action.type === 'RECALCULATE_CONTENT') {
    const nextContent = [...content.images, ...content.notShowed];
    const images = imageInsertingHelper.calculateRows(nextContent, 0);
    return {
      notShowed: [...nextContent.slice(images.length)],
      images,
    };
  }

  if (action.type === 'APPEND_CONTENT') {
    const nextContent = [...content.notShowed, ...nextContentHelper(action.nextContent)];
    const images = imageInsertingHelper.calculateRows(nextContent, content.images.length);
    return {
      notShowed: [...nextContent.slice(images.length)],
      images: [...(content.images), ...images],
    };
  }

  return content;
}
