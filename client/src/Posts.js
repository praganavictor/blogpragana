import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then(res => setPosts(res.data.docs));
  }, []);

  const fetchData = async () => {
    setPage(page + 1);
    await axios
      .get(`http://localhost:5000/posts?page=${page + 1}`)
      .then(res => setPosts(posts.concat(res.data.docs)));
  };

  return (
    <div>
      <InfiniteScroll dataLength={posts.length} next={fetchData} hasMore={true}>
        {posts.map(post => (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
