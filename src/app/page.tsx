'use client';

import User from '@/components/User';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';

export default function Home() {
  const session = useSession();
  return (
    <div className='flex w-full h-screen flex-col jusitfy-center items-center mt-52'>
      {
        session.data?.user
          ? <div>
            <User />
            <Button className='w-[350px]' variant='secondary' onClick={() => signOut()}>Signout</Button>
          </div>
          : <Card className='w-[350px] p-4 space-y-2'>
            { session.status === 'unauthenticated' && <CardTitle className='text-center p-4'>No user signed in</CardTitle> }
            <Button className='w-full' onClick={() => signIn()}>
              { session.status === 'loading'
                  ? <span className='flex flex-row'>
                      <svg className='animate-spin mr-3' fill="none" height="18" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillRule="evenodd" opacity="0.2"/><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"/></svg>
                      { session.data === null ? <span>loading</span> : <span>loading</span> }
                    </span>
                  : <span>Sign in</span>
              }
            </Button>
          </Card>
      }
    </div>
  );
}
