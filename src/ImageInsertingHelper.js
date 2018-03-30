
    export class ImageInsertingHelper {
        constructor(rowWidth, trackWidth) {
            this.rowWidth = rowWidth;
            this.trackWidth = trackWidth;

            this.scrollBarWidth = 16;
        }

        calculateRatio({naturalWidth, naturalHeight}) {
            const wRation = naturalWidth / naturalHeight;

            const ratioHeight = this.rowWidth;
            const ratioWidth = Math.floor(ratioHeight * wRation);

            return {
                ratioWidth,
                ratioHeight
            };
        }

        calculateRows(imgs) {
            let layout = [];
            const windowWidth = parseInt(
                getComputedStyle(document.getElementsByClassName('content')[0]).width, 
                10
            );

            while (layout.length < imgs.length) {

                let { row, rowWidthCalc }  = this.calculateRow(imgs, layout, windowWidth);

                while (windowWidth - (this.trackWidth * (row.length + 1) + this.scrollBarWidth)
                < rowWidthCalc) {
                    const last = row.pop();
                    rowWidthCalc -= last.ratioWidth;
                }
                
                if (row.length < 1) {
                    const img = imgs[layout.length];

                    row.push(img);
                    rowWidthCalc = img.ratioWidth;
                }

                const resizeCof = (windowWidth - this.trackWidth * (row.length - 1) 
                - this.scrollBarWidth)  / rowWidthCalc;
                const resizeHeight = Math.floor(this.rowWidth * resizeCof);

                for (let i = 0; i < row.length; i++) {
                    const width = Math.floor(row[i].ratioWidth * resizeCof);
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

                    if (layout.length === 0) {
                        style.marginTop = 0;
                    }

                    row[i].style = style;   
                }

                layout = layout.concat(row);
            };
            
            return layout;          
        }

        calculateRow(imgs, layout, windowWidth) {
            const row = [];
            let rowWidthCalc = 0;

            for (let i = layout.length; i < imgs.length; i++) {
                const width = imgs[i].ratioWidth;
                if (rowWidthCalc + width < windowWidth) {
                    rowWidthCalc += width;
                    row.push(imgs[i]);
                } else {
                    break;
                }
            }

            return {
                row,
                rowWidthCalc
            };            
        }

    }
    