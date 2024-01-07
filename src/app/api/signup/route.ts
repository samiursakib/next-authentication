import prisma from '@/lib/prisma';
import { NextResponse } from "next/server";
import { redirect } from 'next/navigation';

export async function POST(req: Request) {
  let message: string | undefined;
  let statusCode: number = 200;
  try {
    const body = await req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });
    if(user) {
      message = 'Already registered with this email';
      statusCode = 409;
    } else {
      await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: body.password
        }
      });
      message = 'New user created';
    }
  } catch(err) {
    message = 'Could not create new user';
  } finally {
    return NextResponse.json({ message, status: statusCode});
  }
}