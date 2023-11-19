import { Form, Input, Button } from 'antd';
import '../../assets/styles/main.scss'; // Import your CSS file
import loginImage from '../../assets/images/loginImage.jpg';
import Logo from '../common/Logo'; // Replace with your logo path
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    localStorage.setItem('user', values.username);
    navigate('/products');
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="right-section">
        {' '}
        <div className="logo-section">
          <Logo />
        </div>
        <div className="form-section">
          <h2>Login</h2>
          <Form name="loginForm" onFinish={onFinish} initialValues={{ remember: true }} layout="vertical">
            <label>Username</label>
            <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
              <Input placeholder="Enter username" style={{ height: '48px' }} />
            </Form.Item>
            <label>Password</label>
            <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
              <Input.Password placeholder="Enter password" style={{ height: '48px' }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
            <Form.Item>
              <a href="#" style={{ float: 'left' }} className="forgot-password">
                Forgot password?
              </a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
