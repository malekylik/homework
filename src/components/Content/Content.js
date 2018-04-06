import React, { Component } from 'react';
import { Preview } from '../Preview/Preview';
import { connect } from 'react-redux'

import './Content.css';
import { ScrollPagination } from '../ScrollPagination/ScrollPagination';
import { updatePagination } from '../../actions/pagination';
import { fetchNext } from '../../actions/fetchNext';

function fromStateToProps({ content, pagination }) {
    return {
        content,
        pagination
    };
}

export const Content = connect(fromStateToProps)(
    class Content extends Component {
        constructor(props) {
            super(props);

            this.state = {
                preview : false
            };

            this.resizing = false;

            this.previewShowHandler = this.previewShowHandler.bind(this);
            this.previewHideHandler = this.previewHideHandler.bind(this);
            this.resizeHandle = this.resizeHandle.bind(this);
            this.fetch = this.fetch.bind(this);

            this.props.dispatch(updatePagination({limit: this.props.imageInsertingHelper.calculatePaginationLimit()}));
        }


        render() {  
        let content = this.createContentElements();
        
            return (<div className='content' ref={(container) => {
                    if(container) {
                        this.props.imageInsertingHelper.setContainerSize(container);
                    }
                }}>
                        <ScrollPagination fetchNext={this.fetch} containerSize={this.props.imageInsertingHelper.containerSize}> 
                            {content}
                        </ScrollPagination>
                        {
                            this.state.preview && 
                            (<Preview   imageIndex={this.previewIndex} 
                                        images={this.props.content.images}
                                        onHide={this.previewHideHandler} /> )
                        }
                    </div>);
        }

        createContentElements() {
            const content = [],
            images = this.props.content.images;
            

            for (let i = 0; i < images.length; i++) {
                const { id, miniature: { src }, alt, style } = images[i];

                    // if (i === this.props.content.indexOfLastShowedImage) {
                    //     break;
                    // }

                    content.push(
                        <img className='image' key={id} src={src} alt={alt} 
                                style={style} 
                                onClick={(e) => {this.previewShowHandler(images[i], e)}}/>
                    )
            } 

            return content;
        }

        fetch() {
            return this.props.dispatch(fetchNext(this.props.pagination))
        }

        previewShowHandler(element, e) {
            document.documentElement.style.overflow = 'hidden';
            this.setState({preview: true});
            this.previewIndex = this.props.content.images.indexOf(element);
        }

        previewHideHandler() {
            this.setState({preview:false});
        }

        componentDidMount() {
            window.addEventListener('resize', this.resizeHandle);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.resizeHandle);
        }

        resizeHandle() {
            if (!this.resizing) {
                this.resizing = true;
                this.props.imageInsertingHelper.calculatePaginationLimit();
                this.props.imageInsertingHelper.setContainerSize(document.getElementsByClassName('content')[0]);

                this.props.dispatch(updatePagination({limit: this.props.imageInsertingHelper.calculatePaginationLimit()}));
                this.props.dispatch({type: 'RECALCULATE_CONTENT'});

                this.resizing = false;
            }
        }
});
