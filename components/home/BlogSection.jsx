"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import LoadingState from '@/components/includes/LoadingState';
import BlogDetail from './BlogDetail';

const BlogSection = () => {
  const [blogPosts, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const src = "data:image/jpeg;base64,";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/blogs", { next: { revalidate: 3600 } });
      if (response.ok) {
        const res = await response.json();
        setBlogs(res.blogs);
        setIsLoading(false);
      } else {
        alert('An error occurred');
      }
    };
    fetchData();
  }, []);

  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} />;
  }

  return (
    <div className="container py-5 my-5">
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="row">
          {blogPosts.map((post, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              onClick={() => setSelectedBlog(post)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card h-100">
                <Image
                  src={src + post.image_base64}
                  alt={post.image_caption}
                  width={300}
                  height={200}
                  className="card-img-top"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">{post.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;