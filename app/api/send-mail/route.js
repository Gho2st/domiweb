import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Funkcja walidacji pól formularza
function validateFields(fields) {
  return Object.entries(fields).every(
    ([key, value]) => value && value.trim() !== ""
  );
}

// Funkcja tworząca HTML wiadomości e-mail
function createEmailTemplate({ text, fullName, email }) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #3D5300; text-align: center;">Wiadomość ze strony <br> DomiWeb</h2>
        
        <ul style="list-style-type: none; padding: 0; font-size: 16px; color: #333; line-height: 1.5;">
          <li><strong>Imię i Nazwisko Dziecka:</strong> ${fullName}</li>
          <li><strong>Wiadomość:</strong> ${text}</li>
          <li><strong>Email:</strong> <a href="mailto:${email}" style="color: #3D5300;">${email}</a></li>
        </ul>
        
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        
        <p style="font-size: 14px; color: #888; text-align: center;">
          Ta wiadomość została wysłana z formularza kontaktowego na stronie DomiWeb.
        </p>
      </div>
    </div>
  `;
}

export async function POST(request) {
  try {
    const { text, fullName, email } = await request.json();

    // Sprawdzenie, czy wszystkie pola są wypełnione
    const fields = {
      text,
      fullName,
      email,
    };
    if (!validateFields(fields)) {
      return NextResponse.json(
        { message: "Uzupełnij wymagane pola" },
        { status: 400 }
      );
    }

    // Konfiguracja transporteru SMTP
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 465,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: "domiweb.biuro@gmail.com",
      subject: "Email ze strony DomiWeb od klienta",
      html: createEmailTemplate(fields),
    };

    // Wysyłka wiadomości e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Wiadomość wysłana prawidłowo" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error przy wysyłaniu wiadomości:", error);
    return NextResponse.json(
      { message: "Nieudana próba wysłania wiadomości", error: error.message },
      { status: 500 }
    );
  }
}