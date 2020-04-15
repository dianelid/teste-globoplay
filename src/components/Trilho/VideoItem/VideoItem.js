import React, { Component } from 'react';
import './VideoItem.css';

class VideoItem extends Component {
  render() {
        return (
        <div className="videoItem" style={{backgroundColor: this.props.video.bg}}>
            <div className="categoriaVideo">
                {this.props.video.categoria}
            </div>
        </div>
        )
    }
  }

export default VideoItem;