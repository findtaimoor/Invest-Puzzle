import React from 'react'

const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row mb-5 video-class">
          <video id = 'vid' src="./videos/video.mp4" type="video/mp4"  muted={true} autoPlay controls playsinline data-wf-ignore="true" />
          
        </div>

        <script>
          document.getElementById('vid').play();
        </script>

      </div>
    </>
  )
}

export default Home;