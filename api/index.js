import express from "express";
const app = express();
import cors from "cors";
import postRoute from "./routes/posts.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend ka origin
    credentials: true, // Agar cookies ya headers send karne hain to true rakho
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
app.post("/upload/", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/auth", authRoute);
app.listen(5000, () => {
  console.log("Connected to DB");
});
