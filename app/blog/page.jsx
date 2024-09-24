import { getDomain } from '@/lib/data';
import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";
import Image from "next/image";

const page = () => {
  const domain = getDomain();

  const blogPosts = [
    {
      title: 'The Future of Homework: How SchoolBot Will Revolutionizing Assignments',
      imageUrl: 'https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg',
      link: '/',
    },
    {
      title: 'Enhancing Student Engagement with SchoolBot: A New Approach to Learning',
      imageUrl: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg',
      link: '/',
    },
    {
      title: 'How AI is Transforming School Administration: A Look at SchoolBot',
      imageUrl: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg',
      link: '/',
    },   
  ];

  return (
    <>
      <Navigation domain={domain}/>
      <div className="container py-5 my-5">
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
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
      </div>
      <Footer domain={domain}/>
    </>
  );
};

export default page;
