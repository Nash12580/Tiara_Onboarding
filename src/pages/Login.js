import LoginForm from '../components/LoginForm';
import LoginSideBar from '../components/LoginSideBar';

function Login() {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <LoginSideBar/>
      <LoginForm />
      </div>
    </div>
  );
}

export default Login;