'use client';

import User from '@/components/User';
import { signIn, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <>
      <User/>
      <div>
        <button onClick={() => signIn()}>Signin</button>
        <button onClick={() => signOut()}>Signout</button>
      </div>
    </>
  );
}
