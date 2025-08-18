// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import blogPosts from "../../data/BlogsData";
// import { Calendar, User, Tag } from "lucide-react";

// const BlogDetails = () => {
//     const { id } = useParams();
//     const post = blogPosts.find((b) => b.id === parseInt(id));

//     if (!post) {
//         return (
//             <div className="text-center py-20">
//                 <h2 className="text-xl font-bold text-gray-700">Article not found</h2>
//                 <Link to="/blogs" className="text-indigo-600 mt-4 inline-block">
//                     ← Back to Blogs
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Image */}
//             <section className="relative h-80">
//                 <img
//                     src={post.image}
//                     alt={post.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
//                     <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
//                     <div className="flex gap-6 mt-4 text-sm opacity-90">
//                         <span className="flex items-center gap-2">
//                             <User className="w-4 h-4" /> {post.author}
//                         </span>
//                         <span className="flex items-center gap-2">
//                             <Calendar className="w-4 h-4" /> {post.date}
//                         </span>
//                     </div>
//                 </div>
//             </section>

//             {/* Content */}
//             <div className="container mx-auto px-4 py-12 max-w-3xl">
//                 <article className="prose lg:prose-lg">
//                     <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                         {post.content}
//                     </p>
//                 </article>

//                 {/* Tags */}
//                 <div className="mt-8 flex flex-wrap gap-2">
//                     {post.tags.map((tag) => (
//                         <span
//                             key={tag}
//                             className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
//                         >
//                             <Tag className="w-3 h-3" /> {tag}
//                         </span>
//                     ))}
//                 </div>

//                 {/* Back link */}
//                 <div className="mt-10">
//                     <Link to="/blogs" className="text-indigo-600 hover:underline">
//                         ← Back to Blogs
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetails;
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../../data/BlogsData";
import { Calendar, User, Tag } from "lucide-react";

const BlogDetails = () => {
    const { id } = useParams();
    const post = blogPosts.find((b) => b.id === parseInt(id));

    if (!post) {
        return (
            <div className="text-center py-20">
                <h2 className="text-xl font-bold text-gray-700">Article not found</h2>
                <Link to="/blogs" className="text-indigo-600 mt-4 inline-block">
                    ← Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Image */}
            <section className="relative h-80">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
                    <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
                    <div className="flex gap-6 mt-4 text-sm opacity-90">
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" /> {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left: Blog Content */}
                <div className="lg:col-span-2">
                    <article className="prose lg:prose-lg max-w-none">
                        {/* Feature Image inside content */}
                        <img
                            src={post.image}
                            alt={post.title}
                            className="rounded-xl mb-6 shadow-md"
                        />

                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {post.content}
                        </p>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 px-3 py-1 text-sm bg-indigo-100 rounded-full text-indigo-700"
                            >
                                <Tag className="w-3 h-3" /> {tag}
                            </span>
                        ))}
                    </div>

                    {/* Back link */}
                    <div className="mt-10">
                        <Link to="/blogs" className="text-indigo-600 hover:underline">
                            ← Back to Blogs
                        </Link>
                    </div>
                </div>

                {/* Right: Sidebar */}
                <aside className="space-y-6">
                    {/* Related Posts */}
                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                        <ul className="space-y-3">
                            {blogPosts
                                .filter((b) => b.id !== post.id)
                                .slice(0, 3)
                                .map((related) => (
                                    <li key={related.id}>
                                        <Link
                                            to={`/blog/${related.id}`}
                                            className="flex gap-3 items-center hover:text-indigo-600 transition"
                                        >
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-16 h-12 object-cover rounded-md"
                                            />
                                            <span className="text-sm font-medium">{related.title}</span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* About Author */}
                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-3">About the Author</h3>
                        <p className="text-sm text-gray-600">
                            {post.author} is an expert in{" "}
                            <span className="font-medium text-gray-800">education & careers</span>,
                            sharing insights to help students and professionals succeed.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogDetails;

