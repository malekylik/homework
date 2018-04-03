import React, { Component } from 'react';
import { Button } from '../Button/Button';

import './Preview.css';


export class Preview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: props.imageIndex 
        };

        this.prevImageHandler = this.prevImageHandler.bind(this);
        this.nextImageHandler = this.nextImageHandler.bind(this);
        this.exitHandler = this.exitHandler.bind(this);
    }

    render() {
        const top =  window.pageYOffset + 'px';
        const currentImageIndex = this.state.currentImageIndex;
        const image = this.props.images[currentImageIndex];

        const leftButtonDisabled = !(currentImageIndex > 0);
        const rightButtonDisabled = !(currentImageIndex < this.props.images.length - 1);

        return (<div className='stub' style={{top}}>
                    <div className='preview'>
                        <Button state={{
                            disabled: leftButtonDisabled,
                            icon: '<=',
                            action: {
                                onClick: this.prevImageHandler
                            }
                        }}/>
                        <a href={image.src}>
                            <img src={image.src} alt={image.alt}/>
                        </a>
                        <Button state={{
                            disabled: rightButtonDisabled,
                            icon: '=>',
                            action: {
                                onClick: this.nextImageHandler
                            }
                        }}/>
                        <Button state={{
                            icon: 'X',
                            action: {
                                onClick: this.exitHandler
                            }
                    }}/>
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
