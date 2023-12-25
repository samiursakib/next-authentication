import { NextResponse } from "next/server";

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