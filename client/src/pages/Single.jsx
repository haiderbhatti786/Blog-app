import deleteimg from "../img/delete.png";
import edit from "../img/edit.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { authContext } from "../context/authContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // Import motion

const Single = () => {
  const [post, setPost] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  const { currUser } = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://blog-app-n2gj.vercel.app/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log("Error fetching post:", err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://blog-app-n2gj.vercel.app/posts/${postId}`, {
        withCredentials: true, // THIS IS CRUCIAL
      });
      toast.success("Post deleted successfully!");
      navigate("/");
    } catch (err) {
      toast.error("Failed to delete post ");
      console.log("Delete error:", err);
    }
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <motion.div
      className="single"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content">
        {post?.img && <img src={`../upload/${post.img}`} alt="post" />}{" "}
        {/* Display the post image */}
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="user" />}{" "}
          {/* Display the user image */}
          <div className="info">
            <span>{post?.username || "Unknown User"}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currUser?.username === post?.username && (
            <div className="edit">
              <Link
                to={`/write?edit=${postId}`}
                state={{
                  ...post,
                  cat: post.cat,
                  title: post.title,
                  desc: post.desc,
                }}
              >
                <img src={edit} alt="edit" />
              </Link>
              <img
                src={deleteimg}
                alt="delete"
                onClick={handleDelete}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
      <Menu cat={post.cat} />
    </motion.div>
  );
};

export default Single;
