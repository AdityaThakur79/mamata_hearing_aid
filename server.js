import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import "./utils/appointmentReminder.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mamatahearingaid.in",
      "https://www.mamatahearingaid.in",
    ],
    credentials: true,
  })
);

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

//Static file
// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = path.dirname(__filename);

// Serve static files from the assets folder
app.use(express.static(path.join(__dirname, "./frontend/dist")));

// Route to serve `index.html`
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));
