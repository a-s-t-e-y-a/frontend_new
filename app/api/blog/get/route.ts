import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export async function GET() {
  try {
    const blogs = await prisma.post.findMany();
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

export async function GET_BY_ID(req, { params }) {
  try {
    const blog = await prisma.post.findUnique({ where: { url: params.id } });
    if (!blog) {
      return NextResponse.json(
        {
          status: 404,
          data: null,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ status: 200, data: blog }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        status: 500,
        data: null,
        message: "An error occurred while fetching the blog",
      },
      { status: 500 }
    );
  }
}