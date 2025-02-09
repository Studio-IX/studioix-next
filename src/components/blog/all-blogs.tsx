import { getPosts } from "@/hooks/get-blogs";
import { Post } from "@/lib/interface";
import BlogCard from "./blog-card";

export const revalidate = 60;

const AllBlogs = async () => {
  const posts: Post[] = await getPosts();
  return (
    <section id="all-blogs" className=" py-4">
      {posts.map((post) => (
        <BlogCard post={post} />
      ))}
    </section>
  );
};

export default AllBlogs;
