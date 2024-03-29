import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children } : LayoutProps) => (
  <>
    <Head>
    <title>Workout Guru</title>
    <meta name="description" content="Generated by create-t3-app" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <main id="app">
      <Navbar />
      {children}
    </main>
  </>
);

export default Layout;
