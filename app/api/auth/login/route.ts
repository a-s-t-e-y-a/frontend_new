import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

const User = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    const data = User.parse(await req.json());

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({
        status: 404,
        data: null,
        message: "User not found. Enter a correct email.",
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isPasswordMatch = await bcrypt.compare(data.password, user.password);

    if (!isPasswordMatch) {
      return new Response(JSON.stringify({
        status: 401,
        data: null,
        message: "Incorrect password. Please try again.",
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const token = jwt.sign(user,"b72d9c14c7eeef6108a2003bf68fc528")

    return new Response(JSON.stringify({
      status: 200,
      data: token,
      message: "User logged in successfully",
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `token=${token}; Path=/; HttpOnly; Secure;`,
      },
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
