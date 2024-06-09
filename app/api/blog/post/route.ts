import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const Blog = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  url: z.string().min(1, "URL is required"),
  metaDescription: z.string().min(1, "Meta description is required"),
  metaKeywords: z.string().min(1, "Meta keywords are required"),
});

export async function POST(req: any) {
  try {
    const data = Blog.parse(await req.json());
    const token = req.cookies.get('token');
    if (!token) {
      return NextResponse.json(
        {
          status: 401,
          data: null,
          message: "Token not provided",
        },
        { status: 401 }
      );
    }

    const blogCreated = await prisma.post.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        status: 201,
        data: blogCreated,
        message: "Blog created successfully",
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: 500,
        data: null,
        message: "An error occurred while creating the blog",
      },
      { status: 500 }
    );
  }
}
