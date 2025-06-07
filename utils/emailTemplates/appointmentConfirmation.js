export const appointmentConfirmationTemplate = ({
  name,
  doctor,
  date,
  time,
  fee,
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Appointment is Confirmed</title>
    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background: #f9f9f9;
        color: #333;
      }
      .container {
        max-width: 580px;
        margin: 30px auto;
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0,0,0,0.05);
      }
      .header {
        background: linear-gradient(135deg, #043152, #5AA89B);
        color: white;
        padding: 30px;
        text-align: center;
      }
      .header img {
        max-width: 160px;
        margin-bottom: 16px;
      }
      .content {
        padding: 30px;
      }
      .content h2 {
        margin: 0 0 10px;
        color: #043152;
      }
      .content p {
        font-size: 16px;
        line-height: 1.6;
        margin: 16px 0;
      }
      .highlight {
        background: #e6f5f3;
        padding: 14px 18px;
        border-left: 4px solid #5AA89B;
        border-radius: 8px;
        margin: 24px 0;
        color: #043152;
      }
      .footer {
        background: #f0f0f0;
        padding: 20px;
        font-size: 14px;
        color: #777;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://mamatahearingaid.in/assets/logo-2-BBAHIdBZ.png" alt="Mamata Hearing Aid" />
        <h1>Appointment Confirmed!</h1>
      </div>
      <div class="content">
        <h2>Hi ${name},</h2>
        <p>You're all set! Your appointment with <strong>Dr. ${doctor}</strong> has been successfully scheduled.</p>

        <div class="highlight">
          📅 <strong>Date:</strong> ${date.replace(/_/g, "/")}<br/>
          🕒 <strong>Time:</strong> ${time}<br/>
          💰 <strong>Fees:</strong> ₹${fee}
        </div>

        <p>
          We look forward to welcoming you. If you have any questions or need to reschedule, feel free to reply to this email or call us directly.
        </p>

        <p>Stay healthy,<br/><strong>The Mamata Hearing Aid Team</strong></p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Mamata Hearing Aid. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
};
