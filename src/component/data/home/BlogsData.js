// // src/data/BlogsData.js
// const blogPosts = [
//   {
//     id: 1,
//     title: "Top 10 University In the World - QS World Ranking 2025",
//     excerpt:
//       "Discover the best universities globally according to QS World Rankings 2025. Learn about admission requirements and courses offered.",
//     category: "Rankings",
//     tags: ["University", "Rankings", "Education"],
//     date: "Jun 24, 2025",
//     author: "Education Team",
//     image:
//       "https://dreamstofly.com/uploads/d455863080a755ce5479569a407ac78b.jpg",
//     content: `
//       The QS World Ranking 2025 has highlighted some of the best universities 
//       across the globe. Universities are evaluated on parameters like academic 
//       reputation, employer reputation, faculty-student ratio, and international 
//       outlook.

//       ### Key Highlights:
//       - MIT continues to rank #1 globally
//       - Oxford and Harvard remain in the top 3
//       - Asian universities like NUS and Tsinghua see significant improvement

//       Choosing the right university can set the foundation for your career and 
//       personal growth. Make sure to review the admission requirements and 
//       available scholarships before applying.
//     `,
//   },
//   {
//     id: 2,
//     title: "What makes a Statement of Purpose Effective ?",
//     excerpt: "Complete guide to JEST 2025 examination including syllabus, important dates, eligibility criteria, and preparation tips.",
//     category: "Exams",
//     tags: ["JEST", "Entrance Exam", "Science"],
//     date: "Jun 24, 2025",
//     author: "Exam Expert",
//     image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
//     readTime: "ReadMore",
//     content: `
//       The QS World Ranking 2025 has highlighted some of the best universities 
//       across the globe. Universities are evaluated on parameters like academic 
//       reputation, employer reputation, faculty-student ratio, and international 
//       outlook.

//       ### Key Highlights:
//       - MIT continues to rank #1 globally
//       - Oxford and Harvard remain in the top 3
//       - Asian universities like NUS and Tsinghua see significant improvement

//       Choosing the right university can set the foundation for your career and 
//       personal growth. Make sure to review the admission requirements and 
//       available scholarships before applying.
//     `,

//   },
//   {
//     id: 3,
//     title: "What is the framework of a Statement of Purpose ?",
//     excerpt: "Step-by-step guide for MAT 2025 registration including highlights, fees, eligibility criteria, and required documents.",
//     category: "Exams",
//     tags: ["MAT", "Registration", "MBA"],
//     date: "Jun 20, 2025",
//     author: "Admission Team",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
//     readTime: "ReadMore",
//     content: `
//       The QS World Ranking 2025 has highlighted some of the best universities 
//       across the globe. Universities are evaluated on parameters like academic 
//       reputation, employer reputation, faculty-student ratio, and international 
//       outlook.

//       ### Key Highlights:
//       - MIT continues to rank #1 globally
//       - Oxford and Harvard remain in the top 3
//       - Asian universities like NUS and Tsinghua see significant improvement

//       Choosing the right university can set the foundation for your career and 
//       personal growth. Make sure to review the admission requirements and 
//       available scholarships before applying.
//     `,
//   },
//   {
//     id: 4,
//     title: "Important points to be covered in Statement of purpose for Master’s of Business Administration",
//     excerpt: "Explore lucrative government job opportunities for Chartered Accountants in 2025 with salary details and application process.",
//     category: "Careers",
//     tags: ["CA", "Government Jobs", "Finance"],
//     date: "Jun 19, 2025",
//     author: "Career Guide",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
//     readTime: "ReadMore",
//     content: `
//       The QS World Ranking 2025 has highlighted some of the best universities 
//       across the globe. Universities are evaluated on parameters like academic 
//       reputation, employer reputation, faculty-student ratio, and international 
//       outlook.

//       ### Key Highlights:
//       - MIT continues to rank #1 globally
//       - Oxford and Harvard remain in the top 3
//       - Asian universities like NUS and Tsinghua see significant improvement

//       Choosing the right university can set the foundation for your career and 
//       personal growth. Make sure to review the admission requirements and 
//       available scholarships before applying.
//     `,
//   },
//   {
//     id: 5,
//     title: "Tips while writing Statement of Purpose for Master’s of Science in Computer Science",
//     excerpt: "Comprehensive guide to online MBA programs from top universities including admission requirements, fees, and career prospects.",
//     category: "Online Education",
//     tags: ["MBA", "Online Learning", "Business"],
//     date: "Jun 18, 2025",
//     author: "MBA Advisor",
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
//     readTime: "ReadMore",
//     content: `
//       The QS World Ranking 2025 has highlighted some of the best universities 
//       across the globe. Universities are evaluated on parameters like academic 
//       reputation, employer reputation, faculty-student ratio, and international 
//       outlook.

//       ### Key Highlights:
//       - MIT continues to rank #1 globally
//       - Oxford and Harvard remain in the top 3
//       - Asian universities like NUS and Tsinghua see significant improvement

//       Choosing the right university can set the foundation for your career and 
//       personal growth. Make sure to review the admission requirements and 
//       available scholarships before applying.
//     `,
//   },
//   {
//     id: 6,
//     title: "Engineering Entrance Exams 2025: JEE Main, Advanced & State Exams",
//     excerpt: "Complete information about engineering entrance exams in 2025 including JEE Main, JEE Advanced, and state-level examinations.",
//     category: "Exams",
//     tags: ["JEE", "Engineering", "Entrance Exam"],
//     date: "Jun 17, 2025",
//     author: "Engineering Team",
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
//     readTime: "ReadMore",
//     content: `
//       The QS World Ranking 2025 has highlighted some of the best universities 
//       across the globe. Universities are evaluated on parameters like academic 
//       reputation, employer reputation, faculty-student ratio, and international 
//       outlook.

//       ### Key Highlights:
//       - MIT continues to rank #1 globally
//       - Oxford and Harvard remain in the top 3
//       - Asian universities like NUS and Tsinghua see significant improvement

//       Choosing the right university can set the foundation for your career and 
//       personal growth. Make sure to review the admission requirements and 
//       available scholarships before applying.
//     `,
//   }
// ];
// export default blogPosts
// src/api/blogs.js
const BASE_URL = "http://localhost:4000/api"; // your backend server

export const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}/blogs`);
  return res.json();
};

export const getBlogById = async (id) => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  return res.json();
};
