import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'Your username' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        const res = await fetch(process.env.NEXTAUTH_URL + '/api/user', {
          method: 'GET'
        });
        const data = await res.json();
        if(res.ok && data) {
          if(credentials?.username === data.username && credentials?.password === data.password) {
            return data;
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ],
  // callbacks: {
  //   session: async ({ session, token }) => {
  //     if(session?.user) {
  //       session.user.name = token.uname;
  //     }
  //     return session;
  //   },
  //   async jwt({ user, token }) {
  //     token.uname = user.name;
  //     return token;
  //   }
  // },
  // session: {
  //   strategy: 'jwt'
  // }
};