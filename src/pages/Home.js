import {Link} from 'react-router-dom';

const Home = ({ users }) => {
  
    return <div className="frontPage">
    <h1 style={{textShadow: '0 0 10px lightcyan'}}>vegasMusicSocial</h1><br />
        <Link to="/register">Sign up today!</Link><br />
        <Link to="/login" >Already registered? Sign in.</Link>
    </div>
};

export default Home;
