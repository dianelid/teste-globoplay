import React, { Component } from 'react';
import './VideoItem.css';

class VideoItem extends Component {
  render() {
        return (
        <div id="videoItem" className="videoItem" style={{backgroundColor: this.props.video.bg}}>
            <div className="videoCategory">
                {this.props.video.categoria}
            </div>
        </div>
        )
    }
  }

export default VideoItem;