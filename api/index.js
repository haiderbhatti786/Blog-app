import express from "express";
const app = express();
import cors from "cors";
import postRoute from "./routes/posts.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend ka origin
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Agar cookies ya headers send karne hain to true rakho
  })
);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/auth", authRoute);
app.listen(5000, () => {
  console.log("Connected to DB");
});
