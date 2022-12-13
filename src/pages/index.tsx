import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </>
  );
};

export default Home;
