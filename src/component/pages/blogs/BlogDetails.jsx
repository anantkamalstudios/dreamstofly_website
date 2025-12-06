import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag } from "lucide-react";
import axios from "axios";
import Loader from "../../../common/Loader";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/Blogs/blog/${id}`
        );

        const apiData = res.data?.data;

        if (apiData && apiData.length > 0) {
          const item = apiData[0];

          const blogData = {
            id: item.blog_id,
            title: item.blog_title,
            image: item.blog_image,
            content: item.blog_info, // HTML
            category: item.category_name,
            date: item.date_time,
            author: "Admin",
            tags: item.tags ? item.tags.split(",").map((t) => t.trim()) : [],
          };

          setBlog(blogData);

          // Fetch related posts
          const relatedRes = await fetch(
            "https://devlopment.dreamstofly.com/Blogs/active_blogs"
          );
          const relatedJson = await relatedRes.json();

          if (relatedJson?.data && Array.isArray(relatedJson.data)) {
            const related = relatedJson.data
              .filter((b) => b.blog_id !== blogData.id)
              .map((r) => ({
                id: r.blog_id,
                title: r.blog_title,
                image: r.blog_image,
              }));

            setRelatedPosts(related);
          }
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) <Loader />;

  if (!blog)
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-gray-700">Blog not found</h2>
        <Link to="/blogs" className="text-indigo-600 mt-4 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-80 md:h-96 lg:h-[500px]">
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}${blog.image}`}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
            {blog.title}
          </h1>
          <div className="flex gap-6 mt-4 text-sm opacity-90">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {blog.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Blog Content */}
        <div className="lg:col-span-2">
          <article className="prose lg:prose-lg max-w-none">
            <img
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}${blog.image}`}
              alt={blog.title}
              className="rounded-xl mb-6 shadow-md"
            />
            <div
              className="text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-indigo-100 rounded-full text-indigo-700"
                >
                  <Tag className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10">
            <Link to="/blogs" className="text-indigo-600 hover:underline">
              ← Back to Blogs
            </Link>
          </div>
        </div>

        <aside className="space-y-6">
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
              <ul className="space-y-3">
                {relatedPosts.slice(0, 3).map((related) => (
                  <li key={related.id}>
                    <Link
                      to={`/blog/${related.id}`}
                      className="flex gap-3 items-center hover:text-indigo-600 transition"
                    >
                      <img
                        src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                          related.image
                        }`}
                        alt={related.title}
                        className="w-16 h-12 object-cover rounded-md"
                      />
                      <span className="text-sm font-medium">
                        {related.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* About Author */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-3">About the Author</h3>
            <p className="text-sm text-gray-600">
              {blog.author} is an expert in{" "}
              <span className="font-medium text-gray-800">
                education & careers
              </span>
              , sharing insights to help students and professionals succeed.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;
