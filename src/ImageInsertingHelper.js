
    export class ImageInsertingHelper {
        constructor(rowHeight, trackWidth) {
            this.rowHeight = rowHeight;
            this.trackWidth = trackWidth;
            this.rowCount = 0;
            this.containerSize = {};

            this.scrollBarWidth = 16;
        }

        calculatePaginationLimit() {

        }

        calculateRatio({naturalWidth, naturalHeight}) {
            const wRation = naturalWidth / naturalHeight;

            const ratioHeight = this.rowHeight;
            const ratioWidth = Math.floor(ratioHeight * wRation);

            return {
                ratioWidth,
                ratioHeight
            };
        }

        calculateRows(imgs) {
            let layout = [];
            const windowWidth = this.containerSize.width;

            let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

            while (layout.length < imgs.length) {

                let { row, rowWidthCalc }  = this.calculateRow(imgs, layout, windowWidth);

                ({ row, rowWidthCalc } = this.checkForEmptyRow(row, layout, imgs, rowWidthCalc));

                this.calculateImgStyle(row, rowWidthCalc, windowWidth);

                layout = [...layout, ...row];
                this.rowCount++;
            };
            
            return layout;          
        }

        checkForEmptyRow(row, layout, imgs, rowWidthCalc) {
            if (row.length === 0) {
                const img = imgs[layout.length];

                row.push(img);
                rowWidthCalc = img.ratioSize.width;
            }

            return {
                row,
                rowWidthCalc
            };
        }

        calculateRow(imgs, layout, windowWidth) {
            const row = [];
            let rowWidthCalc = 0;

            for (let i = layout.length; i < imgs.length; i++) {
                const width = imgs[i].ratioSize.width;
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
            while (windowWidth - (this.trackWidth * (row.length + 1) + this.scrollBarWidth)
            < rowWidthCalc) {
                const last = row.pop();
                rowWidthCalc -= last.ratioSize.width;
            }

            return {
                row,
                rowWidthCalc
            };
        }

        calculateImgStyle(row, rowWidthCalc, windowWidth) {
            const resizeCof = (windowWidth - this.trackWidth * (row.length - 1) 
            - this.scrollBarWidth)  / rowWidthCalc;
            const resizeHeight = Math.floor(this.rowHeight * resizeCof);

            for (let i = 0; i < row.length; i++) {
                const width = Math.round(row[i].ratioSize.width * resizeCof);
                const height = resizeHeight;
                const style = {
                    width,
                    height,
                    marginTop: this.trackWidth,
                    marginRight: this.trackWidth
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
            this.containerSize.width = parseInt(
                getComputedStyle(container).width, 
                10);

            this.containerSize.height = parseInt(
                getComputedStyle(container).height, 
                10);
        }
    }
    