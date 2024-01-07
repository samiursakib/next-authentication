'use client';

import { useSession } from 'next-auth/react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MdEmail } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const User = () => {
  const { data } = useSession();
  const { user } = data!;
  return (
    <>
      { user ? (
          <Card className='w-[350px] flex justify-center items-center p-4'>
            <Avatar className='w-20 h-auto'>
              <AvatarImage className='object-cover' src={user.image as string} alt={user.image as string} />
              <AvatarFallback>Av</AvatarFallback>
            </Avatar>
            <CardHeader className='flex justify-start'>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>
                {MdEmail} {user.email} 
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (<Button>No user signed in</Button>)
      }
    </>
  );
}

export default User;