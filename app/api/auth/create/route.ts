import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

const User = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    const data = User.parse(await req.json());

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createdUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({
      status: 200,
      data: createdUser,
      message: "User created successfully",
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log(err);

    if (err instanceof z.ZodError) {
      return new Response(JSON.stringify({
        status: 400,
        data: null,
        message: "Invalid request data",
        errors: err.errors,
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({
        status: 500,
        data: null,
        message: "Internal server error",
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
}
