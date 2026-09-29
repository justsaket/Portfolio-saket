import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact directly at b4u.iamsaket@gmail.com' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 100);
    const sanitizedSubject = subject.trim().slice(0, 200);
    const sanitizedMessage = message.trim().slice(0, 5000);

    // Check honeypot (add this field hidden in the form)
    const honeypot = body.website;
    if (honeypot) {
      // Bot detected, silently fail
      return NextResponse.json({ success: true });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this with your verified domain
      to: ['b4u.iamsaket@gmail.com'],
      replyTo: sanitizedEmail,
      subject: `Portfolio Enquiry: ${sanitizedSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #ff6b35 0%, #ff9f1c 100%);
                color: white;
                padding: 30px;
                border-radius: 8px;
                margin-bottom: 20px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f8f8f8;
                padding: 30px;
                border-radius: 8px;
                margin-bottom: 20px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 16px;
                color: #333;
              }
              .message-content {
                background: white;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #ff6b35;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                color: #999;
                font-size: 14px;
                padding: 20px;
              }
              .metadata {
                background: #fff;
                padding: 15px;
                border-radius: 8px;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 New Portfolio Enquiry</h1>
            </div>

            <div class="content">
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">${sanitizedName}</div>
              </div>

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${sanitizedEmail}" style="color: #ff6b35; text-decoration: none;">
                    ${sanitizedEmail}
                  </a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${sanitizedSubject}</div>
              </div>

              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-content">${sanitizedMessage}</div>
              </div>
            </div>

            <div class="metadata">
              <strong>📊 Enquiry Details</strong><br>
              Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST<br>
              Source: Saket Dandekar Portfolio<br>
              Reply directly to this email to respond to ${sanitizedName}
            </div>

            <div class="footer">
              Sent via Saket Dandekar Portfolio Contact Form<br>
              <a href="https://digitalsaket.vercel.app" style="color: #ff6b35;">digitalsaket.vercel.app</a>
            </div>
          </body>
        </html>
      `,
      text: `
New Portfolio Enquiry

From: ${sanitizedName}
Email: ${sanitizedEmail}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
Source: Saket Dandekar Portfolio
Reply directly to this email to respond to ${sanitizedName}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or email directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or email directly at b4u.iamsaket@gmail.com' },
      { status: 500 }
    );
  }
}
