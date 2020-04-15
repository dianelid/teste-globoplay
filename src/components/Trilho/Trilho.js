import React, { Component } from 'react';
import './Trilho.css';
import VideoItem from './VideoItem/VideoItem';

class Trilho extends Component {
        render() {
          const videos = [
            {
                categoria: "sala de estar",
                bg: "blue"
            },
            {
                categoria: "varanda",
                bg: "yellow"
            },
            {
              categoria: "piscina",
              bg: "green"
            },
            {
              categoria: "academia",
              bg: "red"
            },
            {
              categoria: "chuveiro",
              bg: "purple"
            }
        ]

        const final = videos.map((v, index) => <VideoItem key={index} video={v}/>)

        return (
        <div className="trilho">
            <div className="titleListVideos">Agora no BBB</div>
            <div className="listVideos">
                {final}
            </div>
        </div>
        )
    }
  }

export default Trilho;
