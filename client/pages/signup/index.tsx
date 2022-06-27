import { ArrowRightOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import Input from 'antd/lib/input/Input';
import Button from 'antd/lib/button/button';
import { useSignUp } from './hooks/useSignUp';
import Link from 'next/link';

const LoginPage = ({ ...props }) => {
  const { login, handleChange, handleSubmit } = useSignUp();

  return (
    <div className="login-warp">
      <Input
        className="input-textfield"
        size="large"
        name="email"
        placeholder="email"
        prefix={<MailOutlined />}
        onChange={handleChange}
        value={login.email}
        required
      />
      <Input
        className="input-textfield"
        name="password"
        type="password"
        placeholder="password"
        prefix={<LockOutlined />}
        onChange={handleChange}
        value={login.password}
        required
      />
      <Input
        className="input-textfield"
        type="username"
        name="username"
        placeholder="Username"
        prefix={<UserOutlined />}
        onChange={handleChange}
        value={login.username}
      />
      <Button
        className="login-button"
        type="primary"
        icon={<ArrowRightOutlined />}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      <div className='login-signup-route'>
        Already have an account?
        <Link href='/login'>
          <a> Login</a>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
