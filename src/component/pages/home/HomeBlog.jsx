import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Loader from "../../../common/Loader";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/Blogs/blogs`);
        const data = await response.json();
        
        if (data?.data && Array.isArray(data.data)) {
          // Take only first 3 blogs for homepage
          const homeBlogs = data.data.slice(0, 3).map(item => ({
            blog_id: item.blog_id,
            blog_title: item.blog_title,
            blog_image: item.blog_image,
            blog_info: item.blog_info.replace(/<[^>]*>/g, ''), // Strip HTML tags
            date_time: item.date_time,
            category_name: item.category_name
          }));
          setBlogs(homeBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Blogs
      </h2>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {blogs.map((item, index) => (
          <div
            key={item.blog_id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Dreams To Fly Badge for middle card */}
            {index === 1 && (
              <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Dreams To Fly
              </div>
            )}

            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={`${import.meta.env.VITE_HOME_IMAGE_URL}${item.blog_image}`}
                alt={item.blog_title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5">
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(item.date_time)}</span>
              </div>

              {/* Title */}
              <Link to={`/blog/${item.blog_id}`}>
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                  {item.blog_title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.blog_info}
              </p>

              {/* Read More Link */}
              <Link
                to={`/blog/${item.blog_id}`}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Read more
                <span className="ml-1">›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="text-center">
        <Link
          to="/blogs"
          className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default HomeBlog;
