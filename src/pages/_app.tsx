import { AppProps } from 'next/app';
import '@coopdigital/component-notification/dist/notification.css';
import '@coopdigital/css-foundations/dist/foundations.css';
import '@coopdigital/foundations-buttons';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
