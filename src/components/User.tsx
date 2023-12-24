'use client';

import { useSession } from 'next-auth/react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MdEmail } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const User = () => {
  const { data } = useSession();
  return (
    <>
      { data?.user ? (
          <Card className='w-[350px] flex justify-center items-center p-4'>
            <Avatar className='w-20 h-auto object-cover'>
              <AvatarImage src={data?.user.image as string} alt={data?.user.image as string} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader className='flex justify-start'>
              <CardTitle>{data?.user.name}</CardTitle>
              <CardDescription>
                {MdEmail} {data?.user.email} 
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (<Button>No user signed in</Button>)
      }
    </>
  );
}

export default User;