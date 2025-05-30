import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const dummyData = [
{
    id: "1",
    title: "Mastering React in 2025",
    author: "Alex Johnson",
    date: "May 30, 2025",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    content: "<p>This is a comprehensive guide to the latest React features and best practices. Learn how to build robust apps with modern tools and patterns.</p>",
    tags: ["React"],
  }, 
  {
    id: "2",
    title: "Mastering JS in 2022",
    author: " Johnson",
    date: "June 30, 2025",
    image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
    content: "<p>This rn how to build robust apps with modern tools and patterns.</p>",
    tags: ["React", "JavaScript"],
  },
  {
    id: "3",
    title: "Mastering Node in 2024",
    author: " Johnson",
    date: "June 30, 2025",
    image: "https://media.istockphoto.com/id/1369359642/photo/top-view-of-laptop-with-text-node-js.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRclAdxuH8YcOHSgHkbWzaq-IDabJFppZWxai-W4H2I=",
    content: "<p>This rn how to build robust apps with modern tools and patterns.</p>",
    tags: ["JavaScript","Node"],
  },
  // Add more dummy posts as needed
];

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Replace this with your real API call
    const found = dummyData.find((item) => item.id === id);
    setBlog(found);
  }, [id]);

  if (!blog)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 animate-fade-in">Blog post not found.</p>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">
          ← Go Back
        </Link>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-fade-in">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block animate-fade-in-down">
        ← Back to Blog
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-extrabold mb-2 text-gray-900 animate-fade-in-down">{blog.title}</h1>
          <div className="flex items-center text-sm text-gray-400 mb-4 animate-fade-in-up">
            <span>By {blog.author}</span>
            <span className="mx-2">|</span>
            <span>{blog.date}</span>
          </div>
          <div className="flex gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div
            className="prose max-w-none animate-fade-in"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
