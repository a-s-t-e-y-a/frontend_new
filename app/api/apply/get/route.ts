import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export async function GET() {
  try {
    const blogs = await prisma.dynamicForm.findMany();
    return NextResponse.json({ status: 200, data: blogs }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        status: 500,
        data: null,
        message: "An error occurred while fetching blogs",
      },
      { status: 500 }
    );
  }
}
