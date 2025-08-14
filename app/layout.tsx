import '../styles/globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import TopNav from '../components/TopNav';

export const metadata = {
  title: 'Steve Suhr',
  description: 'Steve Suhr\'s Resume and Side Projects',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions as any);
  const isAuthed = !!session;
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
          <TopNav isAuthed={isAuthed} />
          <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
