
   
import React, { useState, useRef, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import { BsArrowLeftShort } from "react-icons/bs"
// import { BsArrowRightShort } from "react-icons/bs"
import { FaBackward, FaPlay, FaForward } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
const AudioPlayer = ({fileName, trackName}) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [song, setSong] = useState(fileName)
  const [songText, setSongText] = useState(trackName)
  // const [songs] = useState([iDRM, salt, seasonsChange, refresh])
  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation
let noMoError = currentTime
// console.log(noMoError);
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // const calculateTime = (secs) => {
  //   const minutes = Math.floor(secs / 60);
  //   const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //   const seconds = Math.floor(secs % 60);
  //   const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  //   return `${returnedMinutes}:${returnedSeconds}`;
  // }

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

  // const backThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value - 30);
  //   changeRange();
  // }

  // const forwardThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value + 30);
  //   changeRange();
  // }
//   const handleLastSong = () => {
//     if (song === breeze) {
//       setSong(iDRM);
//       setSongText("It Don't Really Matter")
//       setIsPlaying(false)
//     }
//     else if (song === iDRM) {
//       setSong(seasonsChange);
//       setSongText("Season's Change")
//       setIsPlaying(false)
//     }
//     else if (song === seasonsChange) {
//     setSong(salt)
//         setSongText('Salt')
//       setIsPlaying(false)

//   } else if (song === salt) {
//     setSong(refresh)
//     setSongText('Refresh')
//     setIsPlaying(false)

//   } else if (song === refresh) {
//   setSong(breeze)
//   setSongText('Breeze')
//   setIsPlaying(false)

// }
//     else {
//     setSong(iDRM)
//         setSongText("It Don't Really Matter")
//         setIsPlaying(false)

//       }
// }
  return (
    <Container className="my-3" style={{ width: '100%'}}>
      <Row style={{ textAlign:'center', alignItems: 'center', justifyContent: 'center' }}>
          {/* <Col xs={1}><FaBackward style={{ cursor: 'pointer', color: 'rgba(200, 200, 0, 0.3)'}} onClick={handleLastSong} /></Col> */}
          <Col xs={5}>
      <audio ref={audioPlayer} src={song} preload="metadata"></audio>
      {/* <button  onClick={backThirty}><BsArrowLeftShort /> 30</button> */}
      <h4 style={{ color: 'rgba(255, 255, 255, 1)', padding: '5px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255, .2)', fontFamily: 'sans-serif', textWrap: 'nowrap', fontSize: '1em'}}>{songText}</h4>
    
      </Col>
      {/* <Col xs={1}><FaForward style={{ cursor: 'pointer', color: 'rgba(200, 200, 0, 0.3)'}}disabled onClick={handleLastSong}/></Col> */}
      </Row><Row className=""><Col xs={12}>
      <button style={{ color: 'rgba(0,0,0, .9)', padding: '5px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255, .4)',  fontFamily: 'sans-serif', fontSize: '.5em', height: '25px' }} onClick={togglePlayPause} >
        {isPlaying ? <FaPause /> : <FaPlay  />}
        {/* {isPlaying ? 'Pause' : 'Play'} */}

      </button>
      </Col></Row><Row><Col xs={12}>
      {/* <button  onClick={forwardThirty}>30 <BsArrowRightShort /></button> */}

      {/* current time */}
      {/* <div style={{ color: '#fff' }}>{calculateTime(currentTime)}</div> */}

      {/* progress bar */}
      <div >
        <input type="range"  defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>

      {/* duration */}
      {/* <div style={{ color: '#fff' }}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div> */}
      </Col></Row>
      </Container>
  )
}

export { AudioPlayer }