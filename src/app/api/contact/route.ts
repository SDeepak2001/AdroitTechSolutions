import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().default(""),
  details: z.string().min(10),
  ua: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const data = ContactSchema.parse(await req.json());
    await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: [process.env.MAIL_TO!],
      subject: `Contact: ${data.name} — ${data.company || "No company"}`,
      text: `Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
UA: ${data.ua}

Details:
${data.details}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.issues?.[0]?.message || err?.message || "Invalid payload";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
