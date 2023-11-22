import { Form, Input, Button } from 'antd';
import '../../assets/styles/main.scss';
import loginImageLowQuality from '../../assets/images/loginImageLowQuality.jpg';
import loginImage from '../../assets/images/loginImage.jpg';
import Logo from '../common/Logo';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAuth } from 'hooks';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (values: { password: string; username: string }) => {
    try {
      const response = await login({ password: values.password, username: values.username });
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/');
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <LazyLoadImage placeholderSrc={loginImageLowQuality} src={loginImage} alt="login-image" effect="blur" />
      </div>
      <div className="right-section">
        <div className="logo-section">
          <Logo />
        </div>
        <div className="form-section">
          <h2>Login</h2>

          <Form.Item className="error-message">{errorMessage && <div>{errorMessage}</div>}</Form.Item>

          <Form name="loginForm" onFinish={handleLogin} initialValues={{ remember: true }} layout="vertical">
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
