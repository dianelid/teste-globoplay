import React, { Component } from 'react';
import './VideoItem.css';

class VideoItem extends Component {
    render() {
        return (
        <div id="videoItem" className="videoItem" style={{backgroundImage: "url("+this.props.video.bg+")"}}>
            <div className="videoCategory">
                {this.props.video.category}
            </div>
        </div>
        )
    }
}

export default VideoItem;