import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import TopNav from '../components/TopNav';

export default function MyApp({ Component, pageProps: { session, ...pageProps }  }) {
  return (
    <>
      <SessionProvider session={session}>

        <TopNav />
        <div className="pt-16">
          <Component {...pageProps} />
        </div>

      </SessionProvider>
    </>
  );
}