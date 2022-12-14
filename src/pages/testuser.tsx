import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <p>{JSON.stringify(user)}</p>
        <p>{user.sub}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    )
  );
}

export default Profile;

export const getServerSideProps = withPageAuthRequired();