import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import { useState, useContext, useRef} from 'react';
import UploadVideo from '../components/UploadVideo';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const AddVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoName, setVideoName] = useState('');  
  const [video, setVideo] = useState(null);
  const {user} = useContext(UserContext);
  const nav = useNavigate();

  const onSubmit = async (e) => {
      e.preventDefault();
      let newVideo = { artist_name: user.artist_name, video_name: videoName, file_name: `http://localhost:8888/social_media/server/uploads/${video}`}
        console.log(newVideo);
        try {
          await fetch('http://localhost:8888/social_media/server/api/videos/create.php', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
    'Content-Type': 'multipart/form-data'
          },
          body: JSON.stringify(newVideo)
          });
          nav('/feed');
        } catch (err) {
          console.log(video.name);
        }
      }
      
      // const uploader = async() => {

      // }
  
  return (
    <>
    
    <div className="container text-center">
    <div className="row mt-5">
      <div className="col">
      </div>
      </div>
      <UploadVideo video={video} setVideo={setVideo} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
      <Form onSubmit={onSubmit} className='mt-5'>
        <Form.Group controlId='videoName'>
      <Row className="my-5">
        <Col>
          <Form.Label
          >
            Video Name:
          </Form.Label>
          <input
            style={{ height: '40px', borderRadius: '10px', textAlign: 'center' }}
            name='video_name'
            type='text'
            placeholder='Enter video Name'
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
          ></input>
          </Col>
          </Row>        
        </Form.Group>
        <Form.Group controlId='submit'>
          <input
            type='submit'
            name='submit'
            className='btn btn-success p-3'
            style={{ height: '70px', fontSize: '1.5em', fontWeight: 'bold' }}
            value='Submit'
          ></input>
        </Form.Group>
      </Form>
    </div>
    </>
  );
};


export default AddVideo;