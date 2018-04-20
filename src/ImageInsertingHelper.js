export default class ImageInsertingHelper {
  constructor(rowHeight, gap) {
    this.rowHeight = rowHeight;
    this.gap = gap;
    this.rowCount = 0;
    this.fotContentFitting = 3;
    this.containerSize = {};
  }
  calculatePaginationLimit() {
    this.rowCount = 0;
    const { innerWidth, innerHeight } = window;
    const rowImgsFit = Math.floor(innerWidth / this.rowHeight);
    const rowsFit = Math.floor(innerHeight / this.rowHeight);
    this.limit = (rowsFit + 1) * rowImgsFit;
    return this.limit;
  }
  calculateRatio({ ratioWidth, ratioHeight }) {
    let ratioHeightTemp = ratioHeight;
    let ratioWidthTemp = ratioWidth;
    if (ratioHeightTemp !== this.rowHeight) {
      const wRatio = ratioWidthTemp / ratioHeightTemp;
      ratioHeightTemp = this.rowHeight;
      ratioWidthTemp = Math.floor(ratioHeightTemp * wRatio);
    }
    return {
      ratioWidth: ratioWidthTemp,
      ratioHeight: ratioHeightTemp,
    };
  }
  calculateRows(imgs, imgCount) {
    const windowWidth = this.containerSize.width;
    const con = false;

    let imgsCount = imgCount;
    let layout = [];
    let averageRowElements;

    while (layout.length < imgs.length) {
      let { row, rowWidthCalc } = this.calculateRow(imgs, layout, windowWidth);

      ({ row, rowWidthCalc } = ImageInsertingHelper.checkForEmptyRow(
        row,
        layout,
        imgs,
        rowWidthCalc,
      ));

      averageRowElements = Math.floor(imgsCount / this.rowCount);

      this.calculateImgStyle(row, rowWidthCalc, windowWidth, imgs.length - layout.length);

      if (imgs.length - layout.length === row.length && row.length < averageRowElements) {
        break;
      }

      layout = [...layout, ...row];
      this.rowCount += 1;
      imgsCount += row.length;
    }

    if (con === true) {
      layout.pop();
    }

    return layout;
  }
  static checkForEmptyRow(row, layout, imgs, rowWidthCalc) {
    let rowWidthCalcTemp = rowWidthCalc;
    if (row.length === 0) {
      const img = imgs[layout.length];
      row.push(img);
      rowWidthCalcTemp = img.miniature.size.width;
    }
    return {
      row,
      rowWidthCalc: rowWidthCalcTemp,
    };
  }
  calculateRow(imgs, layout, windowWidth) {
    const row = [];
    let rowWidthCalc = 0;
    for (let i = layout.length; i < imgs.length; i += 1) {
      const { width } = imgs[i].miniature.size;
      if (rowWidthCalc + width < windowWidth) {
        rowWidthCalc += width;
        row.push(imgs[i]);
      } else {
        break;
      }
    }
    return this.calculateRowWithTrack(row, rowWidthCalc, windowWidth);
  }
  calculateRowWithTrack(row, rowWidthCalc, windowWidth) {
    let rowWidthCalcTemp = rowWidthCalc;
    while (windowWidth - ((this.gap * (row.length + 1)) + this.fotContentFitting)
        < rowWidthCalcTemp) {
      const last = row.pop();
      rowWidthCalcTemp -= last.miniature.size.width;
    }
    return {
      row,
      rowWidthCalc: rowWidthCalcTemp,
    };
  }
  calculateImgStyle(row, rowWidthCalc, windowWidth) {
    const resizeCof = (windowWidth - (this.gap * (row.length - 1))
        - this.fotContentFitting) / rowWidthCalc;
    const resizeHeight = Math.floor(this.rowHeight * resizeCof);
    for (let i = 0; i < row.length; i += 1) {
      const width = Math.round(row[i].miniature.size.width * resizeCof);
      const height = resizeHeight;
      const style = {
        width,
        height,
        marginTop: this.gap,
        marginRight: this.gap,
      };

      if (i === row.length - 1) {
        style.marginRight = 0;
      }
      if (this.rowCount === 0) {
        style.marginTop = 0;
      }
      const element = row[i];
      element.style = style;
    }
  }
  setContainerSize(container) {
    const width = parseInt(
      getComputedStyle(container).width,
      10,
    );
    const height = parseInt(
      getComputedStyle(container).height,
      10,
    );
    if (width !== 0) {
      this.containerSize.width = width;
    }
    if (height !== 0) {
      this.containerSize.height = height;
    }
  }
}
