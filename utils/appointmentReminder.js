import cron from "node-cron";
import { sendAppointmentReminderEmail } from "./mailer/sendAppointmentMail.js";
import appointmentModel from "../models/appointmentModel.js";
import moment from "moment";

cron.schedule("0 * * * *", async () => {
  try {
    const now = new Date();
    const reminderTimeStart = new Date(now.getTime() + 23 * 60 * 60 * 1000);
    const reminderTimeEnd = new Date(now.getTime() + 25 * 60 * 60 * 1000);

    const appointments = await appointmentModel.find({
      date: {
        $gte: reminderTimeStart,
        $lte: reminderTimeEnd,
      },
    });

    for (const appointment of appointments) {
      const { userData, docData, slotDate, slotTime, amount } = appointment;

      await sendAppointmentReminderEmail({
        name: userData.name,
        email: userData.email,
        doctor: docData.name,
        date: slotDate,
        time: slotTime,
        fee: amount,
      });
    }

    console.log(`[ReminderJob] Sent ${appointments.length} reminder emails.`);
  } catch (error) {
    console.error("Error sending appointment reminders:", error);
  }
});
