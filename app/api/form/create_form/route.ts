import * as z from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import { warn } from "console";

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
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const validatedData = FormSchema.parse(req.body);

    await prisma.form.create({ data: validatedData });

    await transporter.sendMail({
      to: validatedData.email,
      subject: "Thank you for contacting us",
      text: "We have received your message and will get back to you soon.",
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Form submission failed", error: error });
  } finally {
    await prisma.$disconnect();
  }
}
