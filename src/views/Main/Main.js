// import React from 'react';
import { useState, useEffect } from 'react';
import { fetchBlogs } from '../../services/Blog';
// import BlogCard from '../components/BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchBlogs();
        console.log(resp, 'response');
        setBlogs(resp);
      } catch (e) {
        alert(e.message);
      }
    };
    fetch();
  }, []);
  console.log(blogs, 'blogs');
  return <div />;
}
