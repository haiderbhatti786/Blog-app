import { db } from "../db.js";

// Get all users
export const getUsers = (req, res) => {
  const q = "SELECT id, username, email, img FROM users";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// Get single user
export const getUser = (req, res) => {
  const q = "SELECT id, username, email, img FROM users WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

// Delete user and their posts
export const deleteUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  const userId = req.params.id;

  // First delete user's posts
  const deletePostsQuery = "DELETE FROM posts WHERE `uid` = ?";

  db.query(deletePostsQuery, [userId], (err, data) => {
    if (err) return res.status(500).json(err);

    // Then delete the user
    const deleteUserQuery = "DELETE FROM users WHERE `id` = ?";

    db.query(deleteUserQuery, [userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("User and their posts have been deleted!");
    });
  });
};
