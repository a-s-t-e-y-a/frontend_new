import * as z from "zod";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const FormSchema = z.object({
  id: z.string().optional(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().email(),
  number: z.string().min(1),
  message: z.string().min(1),
});

const prisma = new PrismaClient();
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Use the correct SMTP server
    port: 587, // Use the correct port (587 for TLS)
    secure: false, // Set to false for TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
});

export async function POST(req: any) {
  try {
    const validatedData = FormSchema.parse(await req.json());

    const formCreated = await prisma.form.create({ data: validatedData });

    await transporter.sendMail({
      from:process.env.EMAIL,
      to: validatedData.email,
      subject: "Thank you for contacting us",
      text: "We have received your message and will get back to you soon.",
    });
    return NextResponse.json(
      {
        status: 200,
        data: formCreated,
        message: 'Form submitted successfully'
      },
      {
        status: 200
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        status: 400,
        data: error,
        message: 'Form submission failed'
      },
      {
        status: 400
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
