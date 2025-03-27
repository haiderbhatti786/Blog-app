import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users", {
          withCredentials: true,
        });
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this user and all their posts?"
      )
    ) {
      try {
        await axios.delete(`http://localhost:5000/users/${userId}`, {
          withCredentials: true,
        });
        setUsers(users.filter((user) => user.id !== userId));
        alert("User and their posts deleted successfully");
      } catch (err) {
        console.log(err);
        alert("Failed to delete user");
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="users-page">
      <h1>All Users</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.img || "/default-user.png"} alt={user.username} />
            <div className="user-info">
              <h3>{user.username}</h3>
              <p>{user.email}</p>
            </div>
            <div className="user-actions">
              <Link to={`/user/${user.id}`} className="btn-view">
                View Profile
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="btn-delete"
              >
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
