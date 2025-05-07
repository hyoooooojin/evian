import React from 'react'
import './video.scss'

const youtubeId = 'YCuaqVxhUl4'

const Video = () => {
  return (
    <div className="video">
      <div className="videoContainer">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Video
