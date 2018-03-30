import React, { Component } from 'react';
import { PreviewButton } from '../Button/PreviewButton';

import './Preview.css';


export class Preview extends Component {
    constructor(props) {
        super(props);

        const currentImageIndex = parseInt(props.imageIndex, 10);

        this.state = {
            currentImageIndex
        };

        this.prevImageHandler = this.prevImageHandler.bind(this);
        this.nextImageHandler = this.nextImageHandler.bind(this);
        this.exitHandler = this.exitHandler.bind(this);
    }

    render() {
        const top =  window.pageYOffset + 'px';
        const image = this.props.images[this.state.currentImageIndex];

        const leftButtonDisabled = !(this.state.currentImageIndex > 0);
        const rightButtonDisabled = !(this.state.currentImageIndex < this.props.images.length - 1);

        return (<div className='stub' style={{top}}>
                    <div className='preview'>
                    <PreviewButton icon={'<='} onClick={this.prevImageHandler} 
                        disabled={leftButtonDisabled}/>
                        <a href={image.src}>
                            <img src={image.src} alt={image.alt}/>
                        </a>
                        <PreviewButton icon={'=>'} onClick={this.nextImageHandler}
                            disabled={rightButtonDisabled}/>
                        <PreviewButton icon={'X'} onClick={this.exitHandler}/>
                    </div>
                </div>);
    }

    componentDidMount() {
        document.documentElement.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.documentElement.style.overflow = 'visible';
    }

    nextImageHandler() {
        this.setState({currentImageIndex:this.state.currentImageIndex + 1});
    }

    prevImageHandler() {
        this.setState({currentImageIndex:this.state.currentImageIndex - 1});
    }

    exitHandler() {
       this.props.onHide();
    }
}
