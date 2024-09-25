// home/BlogDetail.jsx
import Image from 'next/image';
import { useEffect } from 'react';

const BlogDetail = ({ blog }) => {
  const relatedPosts = [
    {
      id: '1',
      slug: 'related-post-1',
      title: 'How to Design with React',
      image_url: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
      image_caption: 'React Design Guide',
    },
    {
      id: '2',
      slug: 'related-post-2',
      title: '10 Tips for Next.js',
      image_url: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
      image_caption: 'Next.js Best Practices',
    },
    {
      id: '3',
      slug: 'related-post-3',
      title: 'Improving Performance in Web Apps',
      image_url: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
      image_caption: 'Web App Performance Tips',
    },
  ];

  if (!blog) return <p>No blog post found.</p>;

  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-4">
          <h4>Related Posts</h4>
          <div className="row mt-4">
            {relatedPosts.map((post, index) => (
              <div className="col-12 mb-4" key={index}>
                <a href={`/blog/${post.id}/${post.slug}`} className="text-decoration-none text-dark border d-block p-2 rounded-2 shadow-sm">
                  <div className="row gx-2 h-100" style={{ cursor: 'pointer' }}>
                    <div className='col-md-4'>
                      <Image
                        src={post.image_url}
                        alt={post.image_caption}
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className='col-md-8'>
                      <h5 className="card-title mb-0">{post.title}</h5>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-8">
          <Image
            src={`data:image/jpeg;base64,${blog.image_base64}`}
            alt={blog.image_caption}
            width={800}
            height={400}
            layout="responsive"
            className="img-fluid"
          />
          <h1 className='mt-2'>{blog.title}</h1>          
          <div className="mt-4">
            {/* <p>Blog Detail Description</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
