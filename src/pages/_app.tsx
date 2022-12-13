import { type AppType } from "next/dist/shared/lib/utils";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "../styles/globals.css";
import Layout from "../../components/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

export default MyApp;
