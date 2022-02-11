
   
import React, { useState, useRef, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FaBackward, FaPlay, FaForward } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
const VideoPlayer = ({fileName, videoName, artistName}) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [song, setSong] = useState(fileName)
  const [songText, setSongText] = useState(videoName)

  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation
let noMoError = currentTime
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);


  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <video style={{maxHeight: '300px', marginBottom: '10px', borderRadius: '10px'}} ref={audioPlayer} src={song} preload="auto"></video>
      {/* <button  onClick={backThirty}><BsArrowLeftShort /> 30</button> */}
      <h5 className="p-3" style={{ color: 'rgba(255, 255, 255, 1)', width: "300px", borderRadius: '6px', backgroundColor: 'rgba(255,255,255, .2)', fontFamily: 'sans-serif'}}>{songText}<br/><span style={{color: 'darkcyan'}}>{artistName}</span></h5>
      <button style={{ color: 'rgba(0,0,0, .9)', borderRadius: '6px', backgroundColor: 'rgba(255,255,255, .4)',  fontFamily: 'sans-serif', fontSize: '.5em', height: '50px', width: '50px' }} onClick={togglePlayPause} >
        {isPlaying ? <FaPause /> : <FaPlay  />}
        {/* {isPlaying ? 'Pause' : 'Play'} */}

      </button>

      <div>
        <input type="range"  defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>
      </div>
  )
}

export { VideoPlayer }