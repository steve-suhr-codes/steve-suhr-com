import '../styles/globals.css';
import App from "next/app";
import { SessionProvider, getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import Head from "next/head";
import TopNav from '../components/TopNav';

function MyApp({ Component, pageProps }) {
  const { session, isAuthed, ...rest } = pageProps;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>    
      <SessionProvider session={session}>
        <TopNav isAuthed={isAuthed} />
        <div className="pt-16">
          <Component {...rest} />
        </div>
      </SessionProvider>
    </>
  );
}

MyApp.getInitialProps = async (appCtx) => {
  const appProps = await App.getInitialProps(appCtx);
  const { ctx } = appCtx;

  // Only try to get the session on the server (req/res exist)
  let session = null;
  if (ctx.req && ctx.res) {
    try {
      // SERVER: use getServerSession + your authOptions from the API route
      const { authOptions } = await import("./api/auth/[...nextauth]");
      session = await getServerSession(ctx.req, ctx.res, authOptions);
    } catch {}
  } else {
    // CLIENT (on page transitions): use getSession
    session = await getSession();
  }

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      session,
      isAuthed: !!session,
    },
  };
};

export default MyApp;