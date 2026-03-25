"use client";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { useFetchBlogSlug } from "@/lib/hooks/useBlogFetcher";
import LoadingState from "@/components/includes/LoadingState";

const BlogSlugPage = ({ id }) => {
  const { blogSlug, loading } = useBlogStore();
  useFetchBlogSlug(id);

  const content =
    blogSlug && blogSlug.length > 0
      ? blogSlug[0].blogPostContent.replace(
          "https://via.placeholder.com/600x400",
          blogSlug[0].imageUrl
        )
      : "";

  return loading ? (
    <section className="tw-min-h-screen tw-py-16">
      <LoadingState />
    </section>
  ) : (
    <section className="tw-min-h-screen tw-py-16">
      <div className="container tw-mb-10 tw-rounded-md tw-border tw-border-slate-700 tw-bg-slate-900 tw-p-3.5 tw-shadow-lg">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="custom-blog-content"
        />
      </div>
    </section>
  );
};

export default BlogSlugPage;
