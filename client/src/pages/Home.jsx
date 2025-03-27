import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  console.log(cat);
  // console.log(typeof posts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts${cat}`);
        console.log("Fetched posts:", res.data); // Log the posts data
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              {post?.img && <img src={`../upload/${post.img}`} alt="post" />}
              {/* Ensure the image URL is complete */}
            </div>
            <div className="contentp">
              <h1 className="title">{post.title}</h1>
              <p>{post.desc}</p>
              <br />
              <br />
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
