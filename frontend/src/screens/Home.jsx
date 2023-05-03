import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container my-5">
        <div className="row mb-5 video-class">
        <video  src="./videos/video.mp4" type="video/webm"  
    loop={true} 
     muted={true} autoPlay={true} controls preload= "metadata"/>
    
    
        </div>
    </div>
    </>
  )
}

export default Home;