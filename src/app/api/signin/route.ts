import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  });
  const isValidated = user && body.email === user.email && body.password === user.password;
  if(isValidated) {

    return NextResponse.json(user);
  }
  return NextResponse.json(null);
}