import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchNext } from '../../actions/fetchNext';

function fromStateToProps({ pagination }){
    return {
        pagination
    };
}

export const ScrollPagination = connect(fromStateToProps)(
    class ScrollPagination extends Component {
        render() {
            return (
                <React.Fragment>
                    {this.props.children || null}
                </React.Fragment>
            );
        }
    
        componentDidMount() {
            this.props.dispatch(fetchNext(this.props.pagination));
        }
    }
    
);