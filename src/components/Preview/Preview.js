import React, { Component } from 'react';

import { Button } from '../Button/Button';
import Spinner from '../Spinner/Spinner';

import './Preview.css';


export class Preview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: props.imageIndex,
            loading: true
        };

        this.leftButtonIcon = (<i className="fas fa-angle-left"></i>);
        this.rightButtonIcon = (<i className="fas fa-angle-right"></i>);
        this.exitButtonIcon = (<i className="fas fa-times"></i>);

        this.prevImageHandler = this.prevImageHandler.bind(this);
        this.nextImageHandler = this.nextImageHandler.bind(this);
        this.exitHandler = this.exitHandler.bind(this);
        this.loadHandler = this.loadHandler.bind(this);
    }

    render() {
        const top =  document.documentElement.scrollTop;
        const currentImageIndex = this.state.currentImageIndex;
        const { id, original: { src: originalSrc }, alt, preview: { src: previewSrc} } = this.props.images[currentImageIndex];

        
        const leftButtonDisabled = !(currentImageIndex > 0);
        const rightButtonDisabled = !(currentImageIndex < this.props.images.length - 1);

        return (<div className='stub' style={{top}}>
                    <div className='preview'>
                        <Button state={{
                            disabled: leftButtonDisabled,
                            icon: this.leftButtonIcon,
                            action: {
                                onClick: this.prevImageHandler
                            }
                        }}/>
                        <a href={originalSrc}>                      
                            <img onLoad={this.loadHandler} 
                                 style={{display: this.state.loading ? 'none' : 'block'}} 
                                 key={id} src={previewSrc} alt={alt} /> 
                            {this.state.loading && <Spinner />} 
                        </a>
                        <Button state={{
                            disabled: rightButtonDisabled,
                            icon: this.rightButtonIcon,
                            action: {
                                onClick: this.nextImageHandler
                            }
                        }}/>
                        <Button state={{
                            icon: this.exitButtonIcon,
                            action: {
                                onClick: this.exitHandler
                            }
                        }}/>
                    </div>
                </div>);
    }

    componentWillUnmount() {
        document.body.style.overflow = 'visible';
    }

    nextImageHandler() {
        this.setState({
            currentImageIndex:this.state.currentImageIndex + 1,
            loading: true
        });        
    }

    prevImageHandler() {
        this.setState({
            currentImageIndex:this.state.currentImageIndex - 1,
            loading: true
        });
    }

    loadHandler() {
        this.setState({loading: false});
    }

    exitHandler() {
       this.props.onHide();
    }
}
