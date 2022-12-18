import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSideProps, NextPage } from 'next';

const Routine: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // Correct return
  if (user) return (
    <div>
      <p>this is the routine page</p>
    </div>
  );

  return <></>;
}

export default Routine;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();