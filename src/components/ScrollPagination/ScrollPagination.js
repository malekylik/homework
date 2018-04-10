import React, { Component } from 'react';

import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';

import { CONTENT_IS_END, LOAD_ERROR } from '../../messages';

export class ScrollPagination extends Component {
        constructor(props) {
            super(props);

            this.state = {
                loading: true,
                isNext: true
            }
    
            this.scrollHandler = this.scrollHandler.bind(this);
            this.fetch = this.fetch.bind(this);
        }
    
        componentWillUnmount() {
            document.removeEventListener('scroll', this.scrollHandler);
        }

        scrollHandler() {
            if (this.state.loading || !this.state.isNext || this.props.error) {
                return;
            }
    
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                containerHeight = this.props.containerSize.height,
                windowHeight = window.innerHeight;
    
            if (scrollTop + windowHeight >= containerHeight - windowHeight * 0.6) {
                this.fetch();                
            }

        }

        async fetch() {
            if (!this.state.loading) {
                this.setState({
                    loading: true
                });
            }
            let isNext = false;

            try{
                isNext = await this.props.fetchNext();
            } catch(Error) {
                
            } finally { 
                this.setState({
                    loading: false,
                    isNext
                });
            }
        }

        componentDidMount() {
            document.addEventListener('scroll', this.scrollHandler, {passive: true});
            
            this.fetch();  
        }

        render() {
            if (this.props.children.length === 0) {
                window.scrollTo(0, 0);
            }

            let temp = null;

            if (this.props.error) {
                temp = (<Message onClick={this.fetch} text={LOAD_ERROR} />);
            } else {
                temp = (this.state.isNext ? <Spinner /> : <Message text={CONTENT_IS_END} />);
            }

            return (
                <React.Fragment>
                    {this.props.children || null}
                    {temp}
                </React.Fragment>
            );
        }
    }
