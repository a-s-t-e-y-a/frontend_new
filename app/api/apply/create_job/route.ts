import * as z from "zod";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
const DynamicFormSchema = z.object({
  id: z.string().optional(), // Assuming this will be auto-generated
  heading: z.string().min(1, { message: "Heading is required" }),
  by: z.string().optional(),
  Location: z.string().min(1, { message: "Location is required" }),
  shift: z.string().min(1, { message: "Shift is required" }),
  Job_type: z.string().min(1, { message: "Job type is required" }),
  workspace: z.string().min(1, { message: "Workspace is required" }),
});

export async function POST(req: any) {
  try {
    const validatedData = DynamicFormSchema.parse(await req.json());

    const formCreated = await prisma.dynamicForm.create({ data: validatedData });

  
    return NextResponse.json(
      {
        status: 200,
        data: formCreated,
        message: 'Form created successfully'
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
