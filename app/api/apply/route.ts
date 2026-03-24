import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const type = formData.get("type") as string;
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File;

    if (!name || !email || !phone || !type || !resume) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const toEmail = process.env.TO_EMAIL || "admin@foxvalleyphysicaltherapy.com";

    await resend.emails.send({
      from: "Fox Valley PT Careers <onboarding@resend.dev>",
      to: toEmail,
      subject: `New PT Application — ${name}`,
      html: `
        <h2>New Physical Therapist Application</h2>
        <table>
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Position Type</strong></td><td>${type}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || "None provided"}</td></tr>
          <tr><td><strong>Submitted</strong></td><td>${new Date().toLocaleString()}</td></tr>
        </table>
        <p>Resume is attached.</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send application" },
      { status: 500 }
    );
  }
}
