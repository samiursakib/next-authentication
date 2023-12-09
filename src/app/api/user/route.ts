import { NextResponse } from "next/server"

export async function GET(req: Request) {
  return NextResponse.json({
    username: 'sakib',
    email: 'rafisamiur@gmail.com',
    password: 'sakib'
  });
}