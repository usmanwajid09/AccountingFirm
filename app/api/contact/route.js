import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, type } = body;

    // Check if Resend API key exists. If not, run in demo success mode for local preview.
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not defined. Form submission simulated successfully.");
      return NextResponse.json({ success: true, message: "Demo mode: Form submitted successfully." });
    }

    const isCallback = type === "callback";
    const subject = isCallback
      ? `📞 Quick Callback Request from ${name}`
      : `✉️ New Contact Enquiry from ${name} (${service || "General"})`;

    const htmlContent = isCallback
      ? `
        <div style="font-family: sans-serif; padding: 20px; color: #0f172a; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0d9488; margin-top: 0;">Quick Callback Request</h2>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #64748b; margin: 0;">This request was submitted via the sidebar callback form on internalaccountants.com.</p>
        </div>
      `
      : `
        <div style="font-family: sans-serif; padding: 20px; color: #0f172a; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0d9488; margin-top: 0;">New Contact Enquiry</h2>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 8px 0;"><strong>Company:</strong> ${company || "N/A"}</p>
          <p style="margin: 8px 0;"><strong>Service of Interest:</strong> ${service || "General Enquiry"}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="margin: 8px 0; font-weight: bold;">Message:</p>
          <p style="margin: 8px 0; white-space: pre-wrap; line-height: 1.5; background: #f8fafc; padding: 12px; border-radius: 4px; border: 1px solid #f1f5f9;">${message || "No message provided."}</p>
        </div>
      `;

    // Send using Resend API via standard fetch
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Internal Accountants Form <onboarding@resend.dev>",
        to: "its.usman.wajid@gmail.com", // Form submissions will go to you
        subject: subject,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ success: false, error: errorData }, { status: 400 });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
