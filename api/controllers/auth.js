import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  console.log("Register API hit with data:", req.body);

  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const [result] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ? OR username = ?", [
        email,
        username,
      ]);

    if (result.length) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await db
      .promise()
      .query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [
        username,
        email,
        hash,
      ]);

    console.log("User registered successfully");
    return res.status(200).json({ message: "User has been created" });
  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: "Database error" });
  }
};

export const login = (_, res) => {
  res.send("login logic here");
};
export const logout = (_, res) => {
  res.send("logout");
};
