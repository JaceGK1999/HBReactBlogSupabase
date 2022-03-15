// import React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import { fetchBlogs } from '../../services/Blog';
// import BlogCard from '../components/BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchBlogs();
        setBlogs(resp);
      } catch (e) {
        alert(e.message);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          subtitle={blog.subtitle}
          image={blog.image}
          text={blog.text}
        />
      ))}
    </div>
  );
}
