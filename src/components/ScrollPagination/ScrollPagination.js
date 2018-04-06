import React, { Component } from 'react';

import Spinner from '../Spinner/Spinner';

export class ScrollPagination extends Component {
        constructor(props) {
            super(props);

            this.state = {
                loading: true,
                isNext: true
            }
    
            this.scrollHandler = this.scrollHandler.bind(this);
        }
    
        componentWillUnmount() {
            document.removeEventListener('scroll', this.scrollHandler);
        }

        scrollHandler() {
            if (this.state.loading || !this.state.isNext) {
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
            return (
                <React.Fragment>
                    {this.props.children || null}
                    {this.state.isNext && <Spinner />}
                </React.Fragment>
            );
        }
    }
