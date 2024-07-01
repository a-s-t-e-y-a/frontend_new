import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.dynamicForm.findUnique({ where: { id: params.id } });
    if (!blog) {
      return NextResponse.json(
        {
          status: 404,
          data: null,
          message: "Job not found",
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
        message: "An error occurred while fetching the job",
      },
      { status: 500 }
    );
  }
}
