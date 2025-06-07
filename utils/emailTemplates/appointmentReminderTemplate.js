export const appointmentReminderTemplate = ({
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
    <title>Appointment Reminder</title>
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
        background: #fffbe6;
        padding: 14px 18px;
        border-left: 4px solid #ffc107;
        border-radius: 8px;
        margin: 24px 0;
        color: #5c4c4b;
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
        <h1>Appointment Reminder</h1>
      </div>
      <div class="content">
        <h2>Hi ${name},</h2>
        <p>This is a gentle reminder that you have an upcoming appointment with <strong>Dr. ${doctor}</strong>.</p>

        <div class="highlight">
          ⏰ <strong>When:</strong> ${date.replace(/_/g, "/")} at ${time}<br/>
          💰 <strong>Fees:</strong> ₹${fee}
        </div>

        <p>
          Please be on time and let us know if you have any issues making it. You can reply to this email or give us a call for rescheduling.
        </p>

        <p>We're looking forward to seeing you soon!<br/><strong>The Mamata Hearing Aid Team</strong></p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Mamata Hearing Aid. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
};
