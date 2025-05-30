import React, { useState } from "react";
import { useForm } from "react-hook-form";

const initialPosts = [
  {
    title: "Mastering React in 2025",
    excerpt: "A comprehensive guide to the latest React features and best practices.",
    image: "https://source.unsplash.com/600x400/?react,code",
    author: "Alex Johnson",
    date: "May 30, 2025",
  },
  {
    title: "Tailwind CSS: Next Level Styling",
    excerpt: "Tips and tricks to supercharge your UI with Tailwind CSS.",
    image: "https://source.unsplash.com/600x400/?tailwindcss,design",
    author: "Maria Lee",
    date: "May 28, 2025",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setPosts([
      {
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        author: data.author,
        date: new Date().toLocaleDateString(),
      },
      ...posts,
    ]);
    reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
          Blog <span className="text-blue-600">Posts</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up">
          Read the latest articles or share your own insights!
        </p>
      </section>

      {/* Blog Submission Form */}
      <section className="max-w-2xl mx-auto mb-12 px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-lg p-8 animate-fade-in"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Submit a Blog Post</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="title"
              {...register("title", { required: true })}
              placeholder="Blog post title"
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">Title is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="excerpt">
              Excerpt
            </label>
            <textarea
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="excerpt"
              {...register("excerpt", { required: true })}
              placeholder="Short description"
            />
            {errors.excerpt && (
              <p className="text-red-500 text-xs italic">Excerpt is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="image"
              {...register("image", { required: true })}
              placeholder="https://source.unsplash.com/600x400/?blog"
            />
            {errors.image && (
              <p className="text-red-500 text-xs italic">Image URL is required</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="author">
              Author
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="author"
              {...register("author", { required: true })}
              placeholder="Your name"
            />
            {errors.author && (
              <p className="text-red-500 text-xs italic">Author is required</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in"
            style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-1 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
