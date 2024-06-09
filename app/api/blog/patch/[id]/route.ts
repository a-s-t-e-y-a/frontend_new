import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const Blog = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  url: z.string().min(1, "URL is required"),
  metaDescription: z.string().min(1, "Meta description is required"),
  metaKeywords: z.string().min(1, "Meta keywords are required"),
});

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = Blog.parse(await req.json());
    const blog = await prisma.post.update({
      where: { id: params.id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json(
      {
        status: 200,
        data: blog,
        message: "Blog updated successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: 500,
        data: null,
        message: "An error occurred while updating the blog",
      },
      { status: 500 }
    );
  }
}
