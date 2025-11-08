import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as ContactRequestBody;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER, 
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "✅ Message sent successfully!" }, { status: 200 });
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { message: error.message || "Failed to send message" },
      { status: 500 }
    );
  }
}
