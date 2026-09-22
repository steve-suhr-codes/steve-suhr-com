import '../styles/globals.css';
import TopNav from '../components/TopNav';
import { Providers } from './providers';

export const metadata = {
  title: 'Steve Suhr',
  description: "Steve Suhr's Resume",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Providers>
          <TopNav />
          <div className="pt-16">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
