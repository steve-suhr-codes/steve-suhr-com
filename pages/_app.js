import '../styles/globals.css';
import TopNav from '../components/TopNav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}