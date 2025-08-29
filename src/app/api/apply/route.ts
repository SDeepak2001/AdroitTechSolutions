import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const ApplySchema = z.object({
  role: z.string().default("General Application"),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  linkedin: z.string().url().optional().or(z.literal("")).default(""),
  notes: z.string().optional().default(""),
  workAuth: z.string().optional().default(""),
  ua: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const data = ApplySchema.parse(await req.json());
    await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: [process.env.CAREERS_TO || process.env.MAIL_TO!],
      subject: `Application: ${data.role} — ${data.name}`,
      text: `Role: ${data.role}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
LinkedIn: ${data.linkedin}
WorkAuth: ${data.workAuth}
UA: ${data.ua}

Notes:
${data.notes}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.issues?.[0]?.message || err?.message || "Invalid payload";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
