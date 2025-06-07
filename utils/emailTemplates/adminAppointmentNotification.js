export const adminAppointmentNotificationTemplate = ({ userName, userEmail, doctor, date, time, fee,phone }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Appointment Booked</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0; padding: 0;
        color: #333;
      }
      .container {
        max-width: 600px;
        background: #fff;
        margin: 40px auto;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 0 12px rgba(0,0,0,0.1);
      }
      h2 {
        color: #2c3e50;
        margin-bottom: 20px;
      }
      .details {
        background: #ecf0f1;
        border-radius: 6px;
        padding: 20px;
        margin-bottom: 20px;
      }
      .details p {
        margin: 8px 0;
        font-size: 16px;
      }
      .footer {
        font-size: 12px;
        color: #999;
        text-align: center;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>New Appointment Booked</h2>
      <div class="details">
        <p><strong>Patient Name:</strong> ${userName}</p>
        <p><strong>Patient Email:</strong> ${userEmail}</p>
        <p><strong>Doctor:</strong> Dr. ${doctor}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Fee:</strong> ₹${fee}</p>
        <p><strong>Phone:</strong> ₹${phone}</p>
      </div>
      <p>Please check your admin dashboard for more details.</p>
      <div class="footer">&copy; ${new Date().getFullYear()} Your Mamata Hearing aids and speech clinic. All rights reserved.</div>
    </div>
  </body>
  </html>
  `;
};
