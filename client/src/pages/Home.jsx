import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  const baseUrl = "https://blog-app-n2gj.vercel.app"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="posts">
        {posts.map((post) => (
          <motion.div
            className="post"
            key={post.id}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="img">
              {post?.img && <img src={`../upload/${post.img}`} alt="post" />}
            </div>
            <div className="contentp">
              <h1 className="title">{post.title}</h1>
              <p>{post.desc}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read more</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
