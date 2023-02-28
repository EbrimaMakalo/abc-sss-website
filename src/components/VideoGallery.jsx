
import React from 'react';
import './video.css';

// video player
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';

const VideoGallery = () => {
  
    let data = [
      {
          id: 1,
          videoUri: video1,
      },
      {
          id: 2,
          videoUri: video2,
      },
      {
          id: 3,
          videoUri: video3,
      },
      {
          id: 4,
          videoUri: video4,
      },
  ]

  return (
      <>

      <div name='videos' className='mt-20 lg:mt-40 px-2 lg:px-5 xl:px-28 2xl:px-52'>
          <h1 className='font-bold text-3xl lg:text-4xl text-indigo-500'>ABC VIDEOS</h1>
      </div>
      <div className='vgallery mt-5 lg:mt-10 md:px-2 lg:px-5 xl:px-28 2xl:px-52'>
          {data.map((item, index) => {
              return(
                  <div className='video' key={index}>
                      <div>
                        <Video 
                          style = {{width: '100%'}}
                          controls = {['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                        >
                          <source src={item.videoUri} type='video/webm' />
                        </Video>
                      </div>
                  </div>
              )
            })}   
      </div>

      </>
  )
}

export default VideoGallery;