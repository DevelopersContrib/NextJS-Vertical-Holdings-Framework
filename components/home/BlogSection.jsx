"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import LoadingState from '@/components/includes/LoadingState';

const BlogSection = ({domain}) => {
    const [blogPosts,   setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const src = "data:image/jpeg;base64,";

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("/api/blogs",{ next: { revalidate: 3600 } });
          console.log(response);
          if (response.ok) {
            const res = await response.json()
           setBlogs(res.blogs)
           setIsLoading(false)
            
        if(res.status){
          
          console.log('done....')
        }
        
      }else{
        alert('An error occurred')
      }
    };
    fetchData();
  }, []);
  
  console.log('blogPosts', blogPosts)
  return (
    <div className="container py-5 my-5">
{ isLoading ? <LoadingState />  : 
    <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <Image
                  src={src+post.image_base64}
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
}
          
      </div>
  )
}

export default BlogSection