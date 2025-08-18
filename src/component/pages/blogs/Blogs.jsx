
// import React, { useState, useMemo } from 'react';
// import { Search, Calendar, User, BookOpen, GraduationCap, Briefcase, Award, TrendingUp } from 'lucide-react';

// const Blogs = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [selectedTag, setSelectedTag] = useState('');
//     const [sortBy, setSortBy] = useState('latest');

//     // Sample blog data
//     const blogPosts = [
//         {
//             id: 1,
//             title: "Top 10 University In the World - QS World Ranking 2025",
//             excerpt: "Discover the best universities globally according to QS World Rankings 2025. Learn about admission requirements and courses offered.",
//             category: "Rankings",
//             tags: ["University", "Rankings", "Education"],
//             date: "Jun 24, 2025",
//             author: "Education Team",
//             image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
//             readTime: "ReadMore"
//         },
//         {
//             id: 2,
//             title: "JEST 2025 Exam – Syllabus, Dates & Complete Guide",
//             excerpt: "Complete guide to JEST 2025 examination including syllabus, important dates, eligibility criteria, and preparation tips.",
//             category: "Exams",
//             tags: ["JEST", "Entrance Exam", "Science"],
//             date: "Jun 24, 2025",
//             author: "Exam Expert",
//             image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
//             readTime: "ReadMore"

//         },
//         {
//             id: 3,
//             title: "MAT Exam 2025 Registration: Complete Process Guide",
//             excerpt: "Step-by-step guide for MAT 2025 registration including highlights, fees, eligibility criteria, and required documents.",
//             category: "Exams",
//             tags: ["MAT", "Registration", "MBA"],
//             date: "Jun 20, 2025",
//             author: "Admission Team",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
//             readTime: "ReadMore"
//         },
//         {
//             id: 4,
//             title: "Top Government Jobs for Chartered Accountants (CAs) [2025]",
//             excerpt: "Explore lucrative government job opportunities for Chartered Accountants in 2025 with salary details and application process.",
//             category: "Careers",
//             tags: ["CA", "Government Jobs", "Finance"],
//             date: "Jun 19, 2025",
//             author: "Career Guide",
//             image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
//             readTime: "ReadMore"
//         },
//         {
//             id: 5,
//             title: "Online MBA Programs: Top Universities & Admission Guide 2025",
//             excerpt: "Comprehensive guide to online MBA programs from top universities including admission requirements, fees, and career prospects.",
//             category: "Online Education",
//             tags: ["MBA", "Online Learning", "Business"],
//             date: "Jun 18, 2025",
//             author: "MBA Advisor",
//             image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
//             readTime: "ReadMore"
//         },
//         {
//             id: 6,
//             title: "Engineering Entrance Exams 2025: JEE Main, Advanced & State Exams",
//             excerpt: "Complete information about engineering entrance exams in 2025 including JEE Main, JEE Advanced, and state-level examinations.",
//             category: "Exams",
//             tags: ["JEE", "Engineering", "Entrance Exam"],
//             date: "Jun 17, 2025",
//             author: "Engineering Team",
//             image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
//             readTime: "ReadMore"
//         }
//     ];

//     const categories = ["All", "Rankings", "Exams", "Careers", "Online Education"];
//     const tags = ["University", "Rankings", "Education", "JEST", "Entrance Exam", "Science", "MAT", "Registration", "MBA", "CA", "Government Jobs", "Finance", "Online Learning", "Business", "JEE", "Engineering"];

//     // Filter and sort logic
//     const filteredPosts = useMemo(() => {
//         let filtered = blogPosts.filter(post => {
//             const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//             const matchesCategory = !selectedCategory || selectedCategory === 'All' || post.category === selectedCategory;
//             const matchesTag = !selectedTag || post.tags.includes(selectedTag);

//             return matchesSearch && matchesCategory && matchesTag;
//         });

//         // Sort posts
//         if (sortBy === 'latest') {
//             filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
//         } else if (sortBy === 'popular') {
//             // For demo purposes, we'll sort by read time as a proxy for popularity
//             filtered.sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
//         }

//         return filtered;
//     }, [searchTerm, selectedCategory, selectedTag, sortBy]);

//     const getCategoryIcon = (category) => {
//         switch (category) {
//             case 'Rankings': return <Award className="w-4 h-4" />;
//             case 'Exams': return <BookOpen className="w-4 h-4" />;
//             case 'Careers': return <Briefcase className="w-4 h-4" />;
//             case 'Online Education': return <GraduationCap className="w-4 h-4" />;
//             default: return <BookOpen className="w-4 h-4" />;
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <section className="bg-gradient-to-r from-orange-300 to-orange-700 text-white py-12">
//                 <div className="container mx-auto px-4 text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Dreams To Fly Blog</h1>
//                     <p className="text-xl opacity-90">Updates on the Latest Career Opportunities, Online Education, Universities & more</p>
//                 </div>
//             </section>

//             {/* Main Content */}
//             <div className="container mx-auto px-4 py-8">
//                 <div className="flex flex-col lg:flex-row gap-8">
//                     {/* Blog Posts - Left Side */}
//                     <main className="flex-1 lg:w-2/3">
//                         <div className="mb-6 flex justify-between items-center">
//                             <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
//                             <div className="text-sm text-gray-600">
//                                 Showing {filteredPosts.length} of {blogPosts.length} articles
//                             </div>
//                         </div>

//                         <div className="space-y-6">
//                             {filteredPosts.map(post => (
//                                 <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
//                                     <div className="md:flex">
//                                         <div className="md:w-1/3">
//                                             <img
//                                                 src={post.image}
//                                                 alt={post.title}
//                                                 className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                             />
//                                         </div>
//                                         <div className="md:w-2/3 p-6">
//                                             <div className="flex items-center gap-2 mb-3">
//                                                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
//                                                     {getCategoryIcon(post.category)}
//                                                     {post.category}
//                                                 </span>
//                                             </div>

//                                             <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
//                                                 {post.title}
//                                             </h3>

//                                             <p className="text-gray-600 mb-4 line-clamp-2">
//                                                 {post.excerpt}
//                                             </p>

//                                             <div className="flex items-center justify-between text-sm text-gray-500">
//                                                 <div className="flex items-center gap-4">
//                                                     <div className="flex items-center gap-1">
//                                                         <User className="w-4 h-4" />
//                                                         {post.author}
//                                                     </div>
//                                                     <div className="flex items-center gap-1">
//                                                         <Calendar className="w-4 h-4" />
//                                                         {post.date}
//                                                     </div>
//                                                 </div>
//                                                 <span className="text-indigo-600 font-medium">{post.readTime}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </article>
//                             ))}
//                         </div>

//                         {filteredPosts.length === 0 && (
//                             <div className="text-center py-12">
//                                 <div className="text-gray-400 text-lg">No articles found matching your filters.</div>
//                                 <button
//                                     onClick={() => {
//                                         setSearchTerm('');
//                                         setSelectedCategory('');
//                                         setSelectedTag('');
//                                     }}
//                                     className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
//                                 >
//                                     Clear all filters
//                                 </button>
//                             </div>
//                         )}
//                     </main>

//                     {/* Filters Sidebar - Right Side */}
//                     <aside className="lg:w-1/3 space-y-6">
//                         {/* Search */}
//                         <div className="bg-white rounded-xl shadow-md p-6">
//                             <h3 className="text-lg font-semibold mb-4 text-gray-800">Search Articles</h3>
//                             <div className="relative">
//                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search articles..."
//                                     value={searchTerm}
//                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
//                                 />
//                             </div>
//                         </div>

//                         {/* Sort Options */}
//                         <div className="bg-white rounded-xl shadow-md p-6">
//                             <h3 className="text-lg font-semibold mb-4 text-gray-800">Sort By</h3>
//                             <select
//                                 value={sortBy}
//                                 onChange={(e) => setSortBy(e.target.value)}
//                                 className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
//                             >
//                                 <option value="latest">Latest First</option>
//                                 <option value="popular">Most Popular</option>
//                             </select>
//                         </div>

//                         {/* Categories Filter */}
//                         <div className="bg-white rounded-xl shadow-md p-6">
//                             <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
//                             <div className="space-y-2">
//                                 {categories.map(category => (
//                                     <label key={category} className="flex items-center space-x-3 cursor-pointer group">
//                                         <input
//                                             type="radio"
//                                             name="category"
//                                             value={category}
//                                             checked={selectedCategory === category || (category === 'All' && !selectedCategory)}
//                                             onChange={(e) => setSelectedCategory(e.target.value === 'All' ? '' : e.target.value)}
//                                             className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
//                                         />
//                                         <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
//                                             {category}
//                                         </span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Tags Filter */}
//                         <div className="bg-white rounded-xl shadow-md p-6">
//                             <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>
//                             <div className="flex flex-wrap gap-2">
//                                 {tags.map(tag => (
//                                     <button
//                                         key={tag}
//                                         onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
//                                         className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
//                                             ? 'bg-indigo-600 text-white'
//                                             : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
//                                             }`}
//                                     >
//                                         {tag}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Popular Posts */}
//                         <div className="bg-white rounded-xl shadow-md p-6">
//                             <h3 className="text-lg font-semibold mb-4 text-gray-800">
//                                 <TrendingUp className="inline w-5 h-5 mr-2" />
//                                 Popular Posts
//                             </h3>
//                             <div className="space-y-4">
//                                 {blogPosts.slice(0, 3).map((post, index) => (
//                                     <div key={post.id} className="flex items-start space-x-3 cursor-pointer group">
//                                         <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-sm flex-shrink-0">
//                                             {index + 1}
//                                         </div>
//                                         <div className="flex-1 min-w-0">
//                                             <h4 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
//                                                 {post.title}
//                                             </h4>
//                                             <p className="text-xs text-gray-500 mt-1">{post.date}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>


//                     </aside>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default Blogs;
// import React, { useState, useMemo } from "react";
// import { Link } from "react-router-dom";
// import blogPosts from "../../data/BlogsData";
// import { Search, Calendar, User, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

// const Blogs = () => {
//     const [searchTerm, setSearchTerm] = useState("");

//     const filteredPosts = useMemo(() => {
//         return blogPosts.filter((post) =>
//             post.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     }, [searchTerm]);

//     const getCategoryIcon = (category) => {
//         switch (category) {
//             case "Rankings":
//                 return <Award className="w-4 h-4" />;
//             case "Exams":
//                 return <BookOpen className="w-4 h-4" />;
//             case "Careers":
//                 return <Briefcase className="w-4 h-4" />;
//             case "Online Education":
//                 return <GraduationCap className="w-4 h-4" />;
//             default:
//                 return <BookOpen className="w-4 h-4" />;
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header */}
//             <section className="bg-gradient-to-r from-orange-300 to-orange-700 text-white py-12">
//                 <div className="container mx-auto px-4 text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Dreams To Fly Blog</h1>
//                     <p className="text-xl opacity-90">
//                         Updates on Careers, Universities, Online Education & more
//                     </p>
//                 </div>
//             </section>

//             {/* Blog Cards */}
//             <div className="container mx-auto px-4 py-12">
//                 <div className="grid md:grid-cols-2 gap-6">
//                     {filteredPosts.map((post) => (
//                         <Link
//                             to={`/blog/${post.id}`}
//                             key={post.id}
//                             className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
//                         >
//                             <img
//                                 src={post.image}
//                                 alt={post.title}
//                                 className="w-full h-48 object-cover group-hover:scale-105 transition"
//                             />
//                             <div className="p-5">
//                                 <div className="flex items-center gap-2 mb-2 text-sm">
//                                     {getCategoryIcon(post.category)}
//                                     <span className="text-indigo-600 font-medium">{post.category}</span>
//                                 </div>
//                                 <h2 className="text-lg font-bold text-gray-800  transition">
//                                     {post.title}
//                                 </h2>
//                                 <p className="text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
//                                 <div className="flex items-center justify-between text-sm mt-4 text-gray-500">
//                                     <span className="flex items-center gap-1">
//                                         <User className="w-4 h-4" /> {post.author}
//                                     </span>
//                                     <span className="flex items-center gap-1">
//                                         <Calendar className="w-4 h-4" /> {post.date}
//                                     </span>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Blogs;
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../data/BlogsData";
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
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesSearch = post.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const getCategoryIcon = (category) => {
        switch (category) {
            case "Rankings":
                return <Award className="w-4 h-4" />;
            case "Exams":
                return <BookOpen className="w-4 h-4" />;
            case "Careers":
                return <Briefcase className="w-4 h-4" />;
            case "Online Education":
                return <GraduationCap className="w-4 h-4" />;
            default:
                return <BookOpen className="w-4 h-4" />;
        }
    };

    const categories = ["All", "Rankings", "Exams", "Careers", "Online Education"];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-r from-orange-300 to-orange-700 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Dreams To Fly Blog
                    </h1>
                    <p className="text-xl opacity-90">
                        Updates on Careers, Universities, Online Education & more
                    </p>
                </div>
            </section>
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

                <aside className="bg-white rounded-xl shadow p-6 h-fit order-1 lg:order-2">
                    <h3 className="text-xl font-semibold mb-4">Filters</h3>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">
                            Search
                        </label>
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
                                            ? "bg-orange-600 text-white font-medium"
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

                <div className="lg:col-span-2 order-2 lg:order-1">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <Link
                                    to={`/blog/${post.id}`}
                                    key={post.id}
                                    className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition"
                                    />
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-2 text-sm">
                                            {getCategoryIcon(post.category)}
                                            <span className="text-indigo-600 font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                        <h2 className="text-lg font-bold text-gray-800 transition">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mt-2 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm mt-4 text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <User className="w-4 h-4" /> {post.author}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" /> {post.date}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-gray-500 col-span-2">No blogs found.</p>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
