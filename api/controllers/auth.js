import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      results[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("Invalid password");
    }

    const token = jwt.sign(
      { id: results[0].id, username: results[0].username },
      "jwt-key"
    );
    const { password, ...other } = results[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true, // Must be true in production (false for localhost HTTP)
        sameSite: "none", // Required for cross-site
        domain: "localhost", // Explicit domain
        path: "/", // Accessible across all paths
        maxAge: 86400000, // 24 hours
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};
