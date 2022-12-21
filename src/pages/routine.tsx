import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

const Routine: NextPage = () => {
  const { user, error } = useUser();
  const [routines, setRoutines] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('/api/user/routines')
      .then((res) => res.json())
      .then((data) => {
        setRoutines(data)
        setLoading(false)
      })
  },[])

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