import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  // const cat = useLocation().search;
  console.log(cat);
  // console.log(typeof posts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          {post?.img && <img src={`../upload/${post.img}`} alt="post" />}
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
