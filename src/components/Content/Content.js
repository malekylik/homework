import React, { Component } from 'react';
import { Preview } from '../Preview/Preview';
import { connect } from 'react-redux'

import './Content.css';
import { ScrollPagination } from '../ScrollPagination/ScrollPagination';

function fromStateToProps({ content }) {
    return {
        content
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
        }


        render() {  
        let content; 

        if (document.getElementsByClassName('content')[0]) {
            content = this.createContentElements();
        }    
        
            return (<div className='content'>
                        <ScrollPagination> 
                            {content}
                        </ScrollPagination>
                        {
                            this.state.preview && 
                            (<Preview   imageIndex={this.previewIndex} 
                                        images={this.props.content}
                                        onHide={this.previewHideHandler} /> )
                        }
                    </div>);
        }

        createContentElements() {
            return this.props.content.map((element) => {
                    const { id, src, alt, style } = element;

                    return (<img className='image' key={id} src={src} alt={alt} 
                                style={style} 
                                onClick={(e) => {this.previewShowHandler(element, e)}}/>
                            );
                }
            );
        }

        previewShowHandler(element, e) {
            this.setState({preview: true});
            this.previewIndex = this.props.content.indexOf(element);
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

                this.props.dispatch(
                    {
                        type: 'RECALCULATE_CONTENT'
                    }
                );

                this.resizing = false;
            }
        }
});
