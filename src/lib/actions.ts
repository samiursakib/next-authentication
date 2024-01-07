'use server';

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function createUser (req: Request) {
  const body = await req.json();
  const newUser = prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password
    }
  });
  console.log(newUser);
  return NextResponse.json({
    message: 'new user created'
  });
}