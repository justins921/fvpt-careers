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

    const toEmail = (process.env.TO_EMAIL || "admin@foxvalleyphysicaltherapy.com")
      .split(",")
      .map((e) => e.trim());

    await resend.emails.send({
      from: "Fox Valley PT Careers <careers@careers.foxvalleyphysicaltherapy.com>",
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

    await resend.emails.send({
      from: "Fox Valley Physical Therapy <careers@careers.foxvalleyphysicaltherapy.com>",
      to: email,
      subject: "We Received Your Application — Fox Valley PT",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0d1f35;">
          <h2 style="color: #0d2240;">Hi ${name.split(" ")[0]},</h2>
          <p>Thank you for applying for the <strong>Physical Therapist</strong> position at Fox Valley Physical Therapy &amp; Wellness Clinic.</p>
          <p>We've received your application and resume. Our team will review it and get back to you within <strong>3 business days</strong>.</p>
          <p>In the meantime, if you have any questions, feel free to call or text us at <strong>(920) 235-8966</strong>.</p>
          <p>We appreciate your interest in joining our team!</p>
          <br>
          <p style="color: #3d5470; font-size: 14px;">
            Fox Valley Physical Therapy &amp; Wellness Clinic<br>
            909 S. Washburn Street, Oshkosh, WI 54904<br>
            (920) 235-8966<br>
            <a href="https://www.foxvalleyphysicaltherapy.com" style="color: #1a7a78;">foxvalleyphysicaltherapy.com</a>
          </p>
        </div>
      `,
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
