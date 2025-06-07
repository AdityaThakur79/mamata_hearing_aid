import nodemailer from "nodemailer";
import { appointmentConfirmationTemplate } from "../emailTemplates/appointmentConfirmation.js";
import dotenv from "dotenv";
import { adminAppointmentNotificationTemplate } from "../emailTemplates/adminAppointmentNotification.js";
import { appointmentReminderTemplate } from "../emailTemplates/appointmentReminderTemplate.js";

dotenv.config();

export const sendAppointmentEmail = async ({
  name,
  email,
  doctor,
  date,
  time,
  fee,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Appointment Confirmed with Dr. ${doctor}`,
      html: appointmentConfirmationTemplate({ name, doctor, date, time, fee }),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send appointment confirmation email:", error);
    throw error;
  }
};

export const sendAdminAppointmentEmail = async ({
  userName,
  userEmail,
  doctor,
  date,
  time,
  fee,
  phone,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Appointment Booked with Dr. ${doctor}`,
      html: adminAppointmentNotificationTemplate({
        userName,
        userEmail,
        doctor,
        date,
        time,
        fee,
        phone,
      }),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send admin notification email:", error);
    throw error;
  }
};

export const sendAppointmentReminderEmail = async ({
  name,
  email,
  doctor,
  date,
  time,
  fee,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Reminder: Your appointment with Dr. ${doctor} is tomorrow`,
      html: appointmentReminderTemplate({ name, doctor, date, time, fee }),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Failed to send appointment reminder email:", error);
    throw error;
  }
};
