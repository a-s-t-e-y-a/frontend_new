import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension";
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
export async function POST(req: Request) {
  let resposne = NextResponse.next();
  try {
    const token = resposne.cookies.get("token");
    const data = Blog.parse(await req.json());
    if (!token) {
      return new Response(
        JSON.stringify({
          status: 404,
          data: null,
          message: "Token not provided",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data_ = await prisma.blog.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return new Response(
      JSON.stringify({
        status: 404,
        data: data_,
        message: "Blog created successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return Response.json(err);
  }
}
