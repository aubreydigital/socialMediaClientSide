import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import { useState, useContext, useRef} from 'react';
import UploadTrack from '../components/UploadTrack';
import UploadImage from '../components/UploadImage';
import UserContext from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom'

const AddTrack = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [trackName, setTrackName] = useState('');  
  const [track, setTrack] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');  
  const [image, setImage] = useState(null);
  const {user, WEB_API} = useContext(UserContext);
  const nav = useNavigate();

  const onSubmit = async (e) => {
      e.preventDefault();
      let newTrack = { artist_name: user.artist_name, track_name: trackName, file_name: `http://localhost:8888/social_media/server/uploads/tracks/${track}`, image: `http://localhost:8888/social_media/server/uploads/tracks/images/${image}`}
      // let newTrack = { artist_name: user.artist_name, track_name: trackName, file_name: `https://aubrey.digital/vms_server/server/uploads/tracks/${track}`, image: `https://aubrey.digital/vms_server/server/uploads/tracks/images/${image}`}
        console.log(newTrack);
        try {
          await fetch(`http://localhost:8888/social_media/server/api/tracks/create.php`, {
            // await fetch(`https://aubrey.digital/vms_server/server/api/tracks/create.php`, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
    'Content-Type': 'multipart/form-data'
          },
          body: JSON.stringify(newTrack)
          });
          nav('/feed');
        } catch (err) {
          console.log(track.name);
        }
      }
      
      // const uploader = async() => {

      // }
  
  return (
    <>
    
    <div className="container text-center frontPage">
    <div className="row mt-5">
      <div className="col">

      </div>
      </div>
      <UploadTrack track={track} setTrack={setTrack} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>
      <UploadImage image={image} setImage={setImage} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
      <Form onSubmit={onSubmit} className='mt-5'>
        <Form.Group controlId='trackName'>
      <Row className="my-5">
        <Col>
          <Form.Label
          >
            Track Name:
          </Form.Label>
          <input
            style={{ height: '40px', borderRadius: '10px', textAlign: 'center' }}
            name='track_name'
            type='text'
            placeholder='Enter track Name'
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
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
      </Form><br />
      <Link to={`/feed/`}>Back to Feed</Link>

    </div>
    </>
  );
};


export default AddTrack;