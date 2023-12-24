'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Authbox from '@/components/Authbox';
import Link from 'next/link';
import { signIn } from 'next-auth/react';


const formSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(16)
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    return await signIn('credentials', {
      username: values.username,
      password: values.password,
      redirect: true,
      callbackUrl: '/'
    });
  }

  return (
    <Authbox title='Signin'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='[&>*]:my-3'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='your username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='your password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-between items-center'>
            <Button type='submit'>Signin</Button>
            <Link href='/signup' className='underline text-sm'>Don&apos;t have an account?</Link>
          </div>
        </form>
      </Form>
      <div className='flex flex-col space-y-3'>
        <Button variant='secondary' onClick={() => signIn('google')}>Signin with Google</Button>
        <Button variant='secondary' onClick={() => signIn('github')}>Signin with Github</Button>
      </div>
    </Authbox>
  );
}