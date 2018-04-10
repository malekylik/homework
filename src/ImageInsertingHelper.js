
    export class ImageInsertingHelper {
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

        calculateRatio({ratioWidth, ratioHeight}) {
            if (ratioHeight !== this.rowHeight) {
                const wRatio = ratioWidth / ratioHeight;

                ratioHeight = this.rowHeight;
                ratioWidth = Math.floor(ratioHeight * wRatio);
            }

            return {
                ratioWidth,
                ratioHeight
            };
        }

        calculateRows(imgs, imgCount) {
            const windowWidth = this.containerSize.width;

            let layout = [];
            let con = false; 
            let averageRowElements;
            
            while (layout.length < imgs.length) {
                let { row, rowWidthCalc }  = this.calculateRow(imgs, layout, windowWidth);

                ({ row, rowWidthCalc } = this.checkForEmptyRow(row, layout, imgs, rowWidthCalc));

                averageRowElements = Math.floor(imgCount / this.rowCount);

                this.calculateImgStyle(row, rowWidthCalc, windowWidth, imgs.length - layout.length);

                if (imgs.length - layout.length === row.length && row.length < averageRowElements) {
                    break;
                }

                layout = [...layout, ...row];

                this.rowCount++;
                imgCount += row.length;
            };
            
            if (con === true) {
                layout.pop();
            } 
            
            return layout;    
        }

        checkForEmptyRow(row, layout, imgs, rowWidthCalc) {
            if (row.length === 0) {
                const img = imgs[layout.length];

                row.push(img);
                rowWidthCalc = img.miniature.size.width;
            }

            return {
                row,
                rowWidthCalc
            };
        }

        calculateRow(imgs, layout, windowWidth) {
            let row = [];
            let rowWidthCalc = 0;

            for (let i = layout.length; i < imgs.length; i++) {
                const width = imgs[i].miniature.size.width;
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
            while (windowWidth - (this.gap * (row.length + 1) + this.fotContentFitting)
            < rowWidthCalc) {
                const last = row.pop();
                rowWidthCalc -= last.miniature.size.width;
            }

            return {
                row,
                rowWidthCalc
            };
        }

        calculateImgStyle(row, rowWidthCalc, windowWidth) {
            let resizeCof = (windowWidth - this.gap * (row.length - 1) 
            - this.fotContentFitting)  / rowWidthCalc;

            const resizeHeight = Math.floor(this.rowHeight * resizeCof);

            for (let i = 0; i < row.length; i++) {
                const width = Math.round(row[i].miniature.size.width * resizeCof);
                const height = resizeHeight;
                const style = {
                    width,
                    height,
                    marginTop: this.gap,
                    marginRight: this.gap
                };
                
                if (i === row.length - 1) {
                    style.marginRight = 0;
                }

                if (this.rowCount === 0) {
                    style.marginTop = 0;
                }

                row[i].style = style;   
            }
        }

        setContainerSize(container) {
            const width = parseInt(
                getComputedStyle(container).width, 
                10),
                height = parseInt(
                getComputedStyle(container).height, 
                10);

            if (width !== 0) {
                this.containerSize.width = width;
            }

            if (height !== 0) {
                this.containerSize.height = height;
            }
        }
    }
    