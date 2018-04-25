import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Content.css';

import Preview from '../Preview/Preview';
import ScrollPagination from '../ScrollPagination/ScrollPagination';

import updatePagination from '../../actions/pagination';
import fetchNext from '../../actions/fetchNext';


function fromStateToProps({ content, pagination }) {
  return {
    content,
    pagination,
  };
}

const Content = connect(fromStateToProps)(class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,
    };

    this.resizing = false;

    this.previewShowHandler = this.previewShowHandler.bind(this);
    this.previewHideHandler = this.previewHideHandler.bind(this);
    this.resizeHandle = this.resizeHandle.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandle);
  }

  fetch() {
    return this.props.dispatch(fetchNext(this.props.pagination, this.props.content));
  }

  previewShowHandler(element) {
    document.body.style.overflow = 'hidden';
    this.previewIndex = this.props.content.images.indexOf(element);
    this.setState({ preview: true });
  }

  previewHideHandler() {
    this.setState({ preview: false });
    setTimeout(() => { this.resizeHandle(); }, 0);
  }

  createContentElements() {
    return this.props.content.images.map((el) => {
      const {
        id, miniature: { src }, alt, style,
      } = el;

      return (
        <button
          key={id}
          className="image-button"
          onClick={(e) => { this.previewShowHandler(el, e); }}
        >
          <img
            className="image"
            src={src}
            alt={alt}
            style={style}
          />
        </button>
      );
    });
  }

  resizeHandle() {
    if (!this.resizing) {
      this.resizing = true;
      this.props.imageInsertingHelper.calculatePaginationLimit();
      this.props.imageInsertingHelper.setContainerSize(document.getElementsByClassName('content')[0]);

      const paginationLimit = {
        limit: this.props.imageInsertingHelper.calculatePaginationLimit(),
      };

      this
        .props
        .dispatch(updatePagination(paginationLimit));
      this.props.dispatch({ type: 'RECALCULATE_CONTENT' });

      this.resizing = false;
    }
  }

  render() {
    const content = this.createContentElements();

    return (
      <div
        className="content"
        ref={(container) => {
              if (container) {
                  this.props.imageInsertingHelper.setContainerSize(container);
              }
          }}
      >
        <ScrollPagination
          fetchNext={this.fetch}
          containerSize={this.props.imageInsertingHelper.containerSize}
          error={this.props.pagination.error}
        >
          {content}
        </ScrollPagination>
        {
           this.state.preview &&
           (<Preview
             imageIndex={this.previewIndex}
             images={this.props.content.images}
             onHide={this.previewHideHandler}
           />)
        }
      </div>
    );
  }
});

export default Content;
