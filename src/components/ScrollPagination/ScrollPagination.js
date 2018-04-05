import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchNext } from '../../actions/fetchNext';
import Spinner from '../Spinner/Spinner';

function fromStateToProps({ pagination }){
    return {
        pagination
    };
}

export const ScrollPagination = connect(fromStateToProps)(
    class ScrollPagination extends Component {
        constructor(props) {
            super(props);

            this.state = {
                loading: true
            }
    
            this.scrollHandler = this.scrollHandler.bind(this);
        }
    
        componentWillUnmount() {
            document.removeEventListener('scroll', this.scrollHandler);
        }

        scrollHandler() {
            if (this.state.loading) {
                return;
            }
    
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                containerHeight = this.props.containerSize.height,
                windowHeight = window.innerHeight;
    
            if (scrollTop + windowHeight >= containerHeight - windowHeight * 0.6) {
                // this.fetch();                
            }

        }

        async fetch() {
            if (!this.state.loading) {
                this.setState({
                    loading: true
                });
            }

            try{
                await this.props.dispatch(fetchNext(this.props.pagination));
            } catch(Error) {

            } finally { 
                this.setState({
                    loading: false
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
                    {this.state.loading && <Spinner />}
                </React.Fragment>
            );
        }
    }
    
);