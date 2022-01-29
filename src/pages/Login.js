import LoginForm from '../components/LoginForm'

const Login = ({users}) => {
    
  return <div className="frontPage"><LoginForm users={users} /></div>;
};

export default Login;
