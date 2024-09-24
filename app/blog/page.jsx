import { getDomain } from '@/lib/data';
import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";
import Image from "next/image";
import BlogSection from "@/components/home/BlogSection";

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
      <BlogSection domain={domain}/>
      
      <Footer domain={domain}/>
    </>
  );
};

export default page;
