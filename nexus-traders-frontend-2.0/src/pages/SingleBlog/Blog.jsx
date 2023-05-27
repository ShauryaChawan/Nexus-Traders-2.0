import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import Loading from "../../common components/Loading/Loading";
import "./blog.scss";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

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

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="single_blog_page_container">
          <div className="blog_container">
            <h1>{singlePost.title}</h1>
            {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
                className="main_img"
              />
            )}
            <p className="author_name">By Thomas Sankara</p>

            <div className="block_content_div">
            {singlePost.body && (
              <BlockContent
                blocks={singlePost.body}
                projectId="yop9hee8"
                dataset="production"
              />
              )}
            </div>

            <button className="btn">
              <Link to="/blogs">Read more articles</Link>
            </button>
          </div>

          <div className="other_blogs_container">
            {posts.map((post) => (
              <div key={post.slug.current} className="blog_cover_container">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="cover_img"
                />
                <p className="blog_title">{post.title}</p>
                <Link to={`/blogs/${post.slug.current}`}>
                  <button className="btn">Read Full Article</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
