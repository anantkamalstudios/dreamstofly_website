

import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    Calendar,
    User,
    Award,
    BookOpen,
    Briefcase,
    GraduationCap,
} from "lucide-react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(
                    "https://dreamstofly.com/dreamstofly_backend/Blogs/active_blogs"
                );
                const data = await res.json();
                if (data?.data && Array.isArray(data.data)) {
                    const mappedBlogs = data.data.map((item) => ({
                        id: item.blog_id,
                        title: item.blog_title,
                        image: item.blog_image,
                        excerpt:
                            item.blog_info.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 120) + "...",
                        author: "Admin",
                        category: item.category_name,
                        date: item.date_time,
                        tags: item.tags,
                    }));
                    setBlogs(mappedBlogs);
                } else {
                    setBlogs([]);
                }
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const filteredPosts = useMemo(() => {
        return blogs.filter((item) => {
            const matchesSearch = item.title
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === "All" || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [blogs, searchTerm, selectedCategory]);

    const getCategoryIcon = (category) => {
        switch (category) {
            case "Rankings":
                return <Award className="w-4 h-4" />;
            case "Exams":
                return <BookOpen className="w-4 h-4" />;
            case "Careers":
                return <Briefcase className="w-4 h-4" />;
            case "Education":
                return <GraduationCap className="w-4 h-4" />;
            default:
                return <BookOpen className="w-4 h-4" />;
        }
    };

    const categories = ["All", "Rankings", "Exams", "Careers", "Education"];

    // Determine which blogs to show
    const blogsToShow = showAll ? filteredPosts : filteredPosts.slice(0, 4);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Dreams To Fly Blog
                    </h1>
                    <p className="text-xl opacity-90 text-white">
                        Updates on Careers, Universities, Online Education & more
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar */}
                <aside className="bg-white rounded-xl shadow p-6 h-fit order-1 lg:order-2">
                    <h3 className="text-xl font-semibold mb-4">Filters</h3>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">Search</label>
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <Search className="w-5 h-5 text-gray-400 ml-3" />
                            <input
                                type="text"
                                placeholder="Search blog..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Categories
                        </label>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition ${selectedCategory === cat
                                            ? "bg-[#0073df] text-white font-medium"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Blogs List */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                    {loading ? (
                        <p className="text-gray-500">Loading blogs...</p>
                    ) : blogsToShow.length > 0 ? (
                        <>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {blogsToShow.map((item) => (
                                    <Link
                                        to={`/blog/${item.id}`}
                                        key={item.id}
                                        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
                                    >
                                        <img
                                            src={`https://dreamstofly.com/dreamstofly_backend/uploads/${item.image}`}
                                            alt={item.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition"
                                        />
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-2 text-sm">
                                                {getCategoryIcon(item.category)}
                                                <span className="text-indigo-600 font-medium">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h2 className="text-lg font-bold text-gray-800 transition">
                                                {item.title}
                                            </h2>
                                            <p className="text-gray-600 mt-2 line-clamp-3">
                                                {item.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-sm mt-4 text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" /> {item.author}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" /> {item.date}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Show All Button */}
                            {filteredPosts.length > 4 && !showAll && (
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => setShowAll(true)}
                                        className="px-6 py-2  text-blue-500 rounded-lg  transition"
                                    >
                                        Show All Blogs
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="text-gray-500 col-span-2">No blogs found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
