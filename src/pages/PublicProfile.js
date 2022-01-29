import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {FaSoundcloud, FaTwitch} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr';
import {FiInstagram} from 'react-icons/fi';


const PublicProfile = () => {
    const [name, setName] = useState('');
    const [preferred, setPreferred] = useState('');
    const [artistName, setArtistName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [twitter, setTwitter] = useState('');
    const [twitch, setTwitch] = useState('');
    const [soundcloud, setSoundcloud] = useState('');
    const [instagram, setInstagram] = useState('');
    const params = useParams();
    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8888/social_media/server/api/users/single.php?user_id=${params.id}`);
      const data = res.json();
      return data;
    }

    const getUser = async () => {
    let userData = await fetchData();
    setName(userData.user_name);
    setArtistName(userData.artist_name);
    setPreferred(userData.full_name);
    setEmail(userData.user_email);
    setPhone(userData.phone_number);
    setWebsite(userData.website);
    setTwitter(userData.twitter);
    setTwitch(userData.twitch);
    setSoundcloud(userData.soundcloud);
    setInstagram(userData.instagram);
  }
  getUser();
  }, [params.id]);

  return <div className="frontPage">
    <h2>Profile</h2>
    <ul>
      <li><h3>
      Username</h3></li>
      <li>
          {name}
          </li><br />
        
        <li><h3>Preferred Name:</h3></li>
        <li>
          {preferred !== null ? preferred : <br />}
          </li><br />
          
        <li><h3>Artist Name:</h3></li>
        <li>
          {artistName ? artistName : <br />}
          </li>
        <br />
        
        <li><h3>Website:</h3></li>
        <li>{website ? <a href={`https://${website}`} target="_blank" rel="noreferrer">https://{website}</a> : <br />}</li>
      <li><br /><br />
 <div style={{fontSize:'2em'}}><a style={{padding: "0 .5em"}} href={`https://www.soundcloud.com/${soundcloud}`} target="_blank" rel="noreferrer"><FaSoundcloud /></a> <a style={{padding: "0 .5em"}} href={`https://www.twitter.com/${twitter}`} target="_blank" rel="noreferrer"><GrTwitter /></a> <a style={{padding: "0 .5em"}} href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noreferrer"><FiInstagram /></a> <a style={{padding: "0 .5em"}} href={`https://www.twitch.tv/${twitch}`} target="_blank" rel="noreferrer"><FaTwitch /></a></div>
      </li>
      
    </ul>
    <br />
    <hr />
    <Link to={`/message`}><h3>Send them a message!</h3></Link><br />
    <Link to={`/feed/`}>Back to Feed</Link>
    </div>;
};

export default PublicProfile;
