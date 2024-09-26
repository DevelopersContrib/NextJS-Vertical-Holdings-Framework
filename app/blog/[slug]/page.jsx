
import Footer from "@/components/includes/Footer";
import React from "react";
import { getDomain, getData, getchatdomains, getCategories } from "@/lib/data";
import Navigation from "@/components/includes/Navigation";
import Image from "next/image";
import { getBlogPostById } from "@/sanity/sanity-utils";
import { BlogPost } from "@/types/blog";
;



const getBlogId = (params) => {
  const  id  = params.split('---')[1];
  return id;
};

export async function  generateMetadata({ params }) {
  const { slug } = params;
  const id = getBlogId(slug);
  const domain = getDomain();
  if (domain){

    const post = await getBlogPostById(id,domain);

    if (post) {
      return {
        title: post.title,
        description: post.title,
      };
    }
}
  
}


const BlogDetails = async ({params}) => {
  const { slug } = params;
  const id = getBlogId(slug);
  const domain = getDomain();
  const c = await getData();
  const post = await getBlogPostById(id,domain);
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  
  
  if (post) {
    return (
      <>
        <Navigation domain={domain} logo={c.data.logo} />
        <section className="tw-min-h-screen">
          <div className="container tw-py-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  
          </div>
        </section>
        <Footer 
        domain={domain} 
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
        />
      </>
    );
}
};

export default BlogDetails;
