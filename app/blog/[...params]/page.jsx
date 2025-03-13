import BlogSlugPage from "@/modules/blog/slug";
import { getDomain } from "@/lib/data";
import Footer from "@/components/includes/Footer";
import Navigation from "@/components/includes/Navigation";
const BlogPost = async ({ params }) => {
  const [id, slug] = params.params;
  const domain = getDomain();

  return (
    <>
      <Navigation domain={domain} />
      <div className="tw-min-h-screen tw-pt-5 tw-pb-5 tw-mt-8tw-mb-8">
        <BlogSlugPage id={id} />
      </div>
      <Footer domain={domain} />
    </>
  );
};

export default BlogPost;
