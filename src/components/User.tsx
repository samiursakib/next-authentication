'use client';

import { useSession } from 'next-auth/react';
const User = () => {
  const { data } = useSession();
  return (
    <>
      { data
        ? JSON.stringify(data)
        : 'no user'
      }
    </>
  );
}

export default User;