import React, { Component } from 'react';
import { Preview } from '../Preview/Preview';

import './Content.css';

export class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [],
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
                    {content}
                    {
                        this.state.preview && 
                        (<Preview   imageIndex={this.previewIndex} 
                                    images={this.props.images}
                                    onHide={this.previewHideHandler} /> )
                    }
                </div>);
    }

    createContentElements() {
        return this.state.content.map((element) => {
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
        this.previewIndex = this.state.content.indexOf(element);
    }

    previewHideHandler() {
        this.setState({preview:false});
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeHandle);

        const content = this.props.imageInsertingHelper.calculateRows(this.props.images);
        this.setState({content});
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandle);
    }

    resizeHandle() {
        if (!this.resizing) {
            this.resizing = true;

            const content = this.props.imageInsertingHelper.calculateRows(this.props.images);
            this.setState({content});

            this.resizing = false;
        }
    }
}
