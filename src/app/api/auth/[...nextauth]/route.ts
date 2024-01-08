import NextAuth from "next-auth/next";
import { options } from "./options";
import { NextApiRequest, NextApiResponse } from "next";

const handler = NextAuth(options);

export { handler as GET, handler as POST }