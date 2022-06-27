import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/login.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
