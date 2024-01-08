import NextAuth from "next-auth/next";
import { options } from "./options";
import { NextApiRequest, NextApiResponse } from "next";

const handler = NextAuth(options);

export { handler as GET, handler as POST }

export async function auth(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  return NextAuth(req, res, options);
}