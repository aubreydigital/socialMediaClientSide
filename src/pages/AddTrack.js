import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import { useState, useContext, useRef} from 'react';
import UploadTrack from '../components/UploadTrack';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const AddTrack = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [trackName, setTrackName] = useState('');  
  const [track, setTrack] = useState(null);
  const {user} = useContext(UserContext);
  const nav = useNavigate();

  const onSubmit = async (e) => {
      e.preventDefault();
      let newTrack = { artist_name: user.artist_name, track_name: trackName, file_name: `http://localhost:8888/social_media/server/uploads/${track}`}
        console.log(newTrack);
        try {
          await fetch('http://localhost:8888/social_media/server/api/tracks/create.php', {
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
    
    <div className="container text-center">
    <div className="row mt-5">
      <div className="col">

      </div>
      </div>
      <UploadTrack track={track} setTrack={setTrack} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>
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
      </Form>
    </div>
    </>
  );
};


export default AddTrack;