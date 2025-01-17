import React, { useEffect, useState } from 'react';
import video from "../videos/Lamp flicker - a short horror film. Free stock footage with a twist. (online-video-cutter.com).mp4";
import "./home.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ScrollUpButton } from "../components";
import { Services } from "../components";

const Home = () => {
  // Define your custom height value (in pixels)
  const customHeight = 500; // Change this value to your desired height

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const videoElement = document.querySelector('video');

      // Check if the user has scrolled past the custom height
      if (window.scrollY > customHeight) {
        // Mute the video
        videoElement.muted = true;
        setIsMuted(true); // Update state to reflect mute status
      } else {
        // Unmute the video
        videoElement.muted = false;
        setIsMuted(false); // Update state to reflect unmute status
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [customHeight]); // Include customHeight in the dependency array to watch for changes

  const toggleMute = () => {
    const videoElement = document.querySelector('video');
    videoElement.muted = !videoElement.muted;
    setIsMuted(videoElement.muted);
  };

  return (
    <div className='home'>
      <section id='hero'>	
        <div className="container">
          <video src={video} autoPlay loop muted={isMuted}></video>

          <div className="typewriter" style={{marginTop:"12rem"}}>I am  </div>
          <p style={{fontSize:"2rem",marginBottom:"15rem"}}>Learning Can't Get Enough</p>
          <button 
            onClick={toggleMute} 
            style={{
              position: "absolute", 
              top: "1rem", 
              right: "1rem", 
              padding: "0.5rem 1rem",
              zIndex: 1000,
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "#fff"
            }}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <FontAwesomeIcon className='mute-button' style={{fontSize:"1.1rem",color:"#ffbf1a",padding:"0.5rem",border:"2px solid #ffbf1a",borderRadius:"50%",backgroundColor:"#fff",fontWeight:"bolder"}} icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
          <div className="social-buttons" style={{position:"absolute",marginTop:"25rem"}}>
            <a href="#" className="facebook social-button social-button--facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="linkedin social-button social-button--linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="github social-button social-button--github" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      <Services />
      <ScrollUpButton />
    </div>
  );
};

export default Home;

