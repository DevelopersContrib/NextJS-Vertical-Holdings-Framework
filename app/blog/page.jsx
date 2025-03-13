import { getDomain } from "@/lib/data";
import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";
import BlogList from "@/modules/blog/BlogList";

const page = () => {
  const domain = getDomain();
  return (
    <>
      <Navigation domain={domain} />
      <BlogList />
      <Footer domain={domain} />
    </>
  );
};

export default page;
