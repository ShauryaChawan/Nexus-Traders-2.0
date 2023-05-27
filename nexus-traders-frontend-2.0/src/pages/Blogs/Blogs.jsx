import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import "./blogs.scss";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blogs_container">
      {/* Heading */}
      <h1>Blog page</h1>

      {/* Blogs */}
      <div className="all_blogs_container">
        {posts.map((post) => (
          <div key={post.slug.current} className="blog_cover_container">
            <div className="cover_img">
              <img src={post.mainImage.asset.url} alt={post.title} />
            </div>
            <h4 className="blog_title">{post.title}</h4>
            <Link to={`/blogs/${post.slug.current}`}>
              <button className="btn">Read Full Article</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
