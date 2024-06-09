import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.post.delete({ where: { id: params.id } });
    return NextResponse.json(
      {
        status: 200,
        data: blog,
        message: "Blog deleted successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: 500,
        data: null,
        message: "An error occurred while deleting the blog",
      },
      { status: 500 }
    );
  }
}
