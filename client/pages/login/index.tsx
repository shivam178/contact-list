import { ArrowRightOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button/button';
import Input from 'antd/lib/input/Input';
import Link from 'next/link';
import { useLogin } from './hooks/useLogin';

const LoginPage = ({ ...props }) => {
  const { login, handleChange, handleSubmit } = useLogin();

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
      />
      <Input
        className="input-textfield"
        name="password"
        type="password"
        placeholder="password"
        prefix={<LockOutlined />}
        onChange={handleChange}
        value={login.password}
      />
      <Button
        className="login-button"
        type="primary"
        icon={<ArrowRightOutlined />}
        onClick={handleSubmit}
      >
        Login
      </Button>
      <div className='login-signup-route'>
        New User?
        <Link href='/signup'>
          <a> Sign Up</a>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
