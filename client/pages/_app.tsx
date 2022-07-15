import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import { RouteGuard } from '../components/RouteGuard';
import '../styles/global.css';
import '../styles/login.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RouteGuard>
      <Component {...pageProps} />
    </RouteGuard>
  );
}
