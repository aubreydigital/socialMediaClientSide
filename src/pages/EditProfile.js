import { useState, useEffect } from 'react';
import UploadImage from '../components/UploadImage'
import {useNavigate, useParams, Link} from 'react-router-dom';
const EditProfile = () => {
    const [userName, setUserName] = useState('');
    const [profilePic, setProfilePic] = useState('http://localhost:8888/social_media/server/uploads/profile/default.jpeg');
    // const [profilePic, setProfilePic] = useState('https://aubrey.digital/vms_server/server/uploads/profile/default.jpeg');
    const [preferred, setPreferred] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [artistName, setArtistName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [website, setWebsite] = useState('');
    const [twitter, setTwitter] = useState('');
    const [twitch, setTwitch] = useState('');
    const [soundcloud, setSoundcloud] = useState('');
    const [instagram, setInstagram] = useState('');
    let params = useParams();
        
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(`http://localhost:8888/social_media/server/api/users/single.php?user_id=${params.id}`);
        //   const res = await fetch(`https://aubrey.digital/vms_server/server/api/users/single.php?user_id=${params.id}`);
          const data = res.json();
          return data;
        }
    
        const getUser = async () => {
        let userData = await fetchData();
        setUserName(userData.user_name);
        setPreferred(userData.full_name);
        setPronouns(userData.pronouns);
        setArtistName(userData.artist_name);
        setUserEmail(userData.user_email);
        setPhoneNumber(userData.phone_number);
        setUserPassword(userData.user_password);
        setWebsite(userData.website);
        setTwitter(userData.twitter);
        setTwitch(userData.twitch);
        setSoundcloud(userData.soundcloud);
        setInstagram(userData.instagram);
      }
      getUser();
      }, [params.id]);
let nav = useNavigate();

const onSubmit = async (e) => {
    e.preventDefault();
    let updatedUser = { user_name: userName, profile_pic: profilePic, full_name: preferred, pronouns: pronouns, artist_name: artistName,  user_email: userEmail, phone_number: phoneNumber, website: website, twitter: twitter, twitch: twitch, soundcloud: soundcloud, instagram: instagram, user_password: userPassword, user_id: params.id };
    console.log(updatedUser);
    try {
        await fetch('http://localhost:8888/social_media/server/api/users/update.php', {
            // await fetch('https://aubrey.digital/vms_server/server/api/users/update.php', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        });
        nav(`/users/${params.id}`);
    } catch (err) {
        console.error('User could not be updated');
    }
    
};

return <div style={{textAlign: 'center'}}><h1 style={{paddingTop: '1em'}}>Edit Profile</h1><form onSubmit={onSubmit}>
<UploadImage/>
<label htmlFor="user_name">Username:</label><br/>
<input type="text" name="user_name" placeholder="Enter a username..." value={userName || ''} onChange={(e) => setUserName(e.target.value)}></input><br />
<label htmlFor="full_name">Preferred Name:</label><br/>
<input type="text" name="full_name" placeholder="Enter your preferred name.." value={preferred || ''} onChange={(e) => setPreferred(e.target.value)}></input><br />
<label htmlFor="full_name">Pronouns:</label><br/>
<input type="text" name="pronuns" placeholder="Enter your preferred pronouns.." value={pronouns || ''} onChange={(e) => setPronouns(e.target.value)}></input><br />
<label htmlFor="user_name">Artist/Band Name:</label><br/>
<input type="text" name="artist_name" placeholder="Enter your artist/band name" value={artistName || ''} onChange={(e) => setArtistName(e.target.value)}></input><br />
<label htmlFor="user_name">Phone Number:</label><br/>
<input type="phone" name="phone_number" placeholder="Enter your phone number" value={phoneNumber || ''} onChange={(e) => setPhoneNumber(e.target.value)}></input><br />
<label htmlFor="user_email">Email:</label><br />
<input type="text" name="user_email" placeholder="Enter your email..." value={userEmail || ''} onChange={(e) => setUserEmail(e.target.value)}></input><br/>
<label htmlFor="user_name">Website:</label><br/>
<input type="text" name="website" placeholder="Enter your website" value={website || ''} onChange={(e) => setWebsite(e.target.value)}></input><br />
<label htmlFor="user_password">Password:</label><br />
<input type="password" name="user_password" placeholder="Enter your strong password" value={userPassword || ''} onChange={(e) => setUserPassword(e.target.value)}></input><br/>
<label htmlFor="twitter">Twitter:</label><br />
<input type="text" name="twitter" placeholder="Enter your twitter handle" value={twitter || ''} onChange={(e) => setTwitter(e.target.value)}></input><br/>
<label htmlFor="twitch">Twitch:</label><br />
<input type="text" name="twitch" placeholder="Enter your twitch handle" value={twitch || ''} onChange={(e) => setTwitch(e.target.value)}></input><br/>
<label htmlFor="soundcloud">Soundcloud:</label><br />
<input type="text" name="soundcloud" placeholder="Enter your soundcloud handle" value={soundcloud || ''} onChange={(e) => setSoundcloud(e.target.value)}></input><br/>
<label htmlFor="instagram">Instagram:</label><br />
<input type="text" name="user_password" placeholder="Enter your Instagram handle" value={instagram || ''} onChange={(e) => setInstagram(e.target.value)}></input><br/>
<button type="submit" className="button" name="submit">Submit</button>
</form>
<Link to={`/users/${params.id}`}>
<button type="button" className="button" name="cancel">Cancel</button>
</Link>
<Link to={`/feed/`}>
<button type="button" className="button" name="cancel">Go to Feed</button>
</Link>
</div>;
};

export default EditProfile;
