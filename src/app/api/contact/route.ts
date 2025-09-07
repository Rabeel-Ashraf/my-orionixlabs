import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const receiverEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL;
    if (!receiverEmail) {
      console.error('CONTACT_FORM_RECEIVER_EMAIL is not set in .env');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const subject = `New Contact Form Submission from ${name}`;
    const textContent = `
      Name: ${name}
      Email: ${email}
      Company: ${company || 'N/A'}
      Service of Interest: ${service || 'N/A'}
      Message:
      ${message}
    `;
    const htmlContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Service of Interest:</strong> ${service || 'N/A'}</p>
      <hr>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const result = await sendEmail({
      to: receiverEmail,
      subject,
      text: textContent,
      html: htmlContent,
    });

    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
