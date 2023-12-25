import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getPostsOfFirstUser = async () => {
  const firstUser = await prisma.user.findFirst();
  const postsOfFirstUser = await prisma.post.findMany({
    where: {
      user: {
        id: firstUser?.id
      }
    }
  });
  return postsOfFirstUser.slice(2);
}

export async function POST(req: Request) {
  const body = await req.json();
  const user = {
    username: 'samiur_sakib',
    name: 'Rafi Sakib',
    email: 'rafisamiur@gmail.com',
    password: 'sakibasdf',
    image: '/me.jpg'
  }
  if(body.username === user.username && body.password === user.password) {
    return NextResponse.json(user);
  }
  return NextResponse.json(null);
}

export async function GET(req: Request) {
  try {
    const result = await getPostsOfFirstUser();
    return NextResponse.json(result);  
  } catch(e) {
    return NextResponse.json({ message: e });
  } finally {
    await prisma.$disconnect();
  }
}