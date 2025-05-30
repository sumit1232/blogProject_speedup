import React from "react";
import { Link } from "react-router-dom";

const BlogNotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white rounded-lg shadow-xl p-10 text-center animate-fade-in">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4 animate-fade-in-down">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2 animate-fade-in-up">
        Blog Page Not Found
      </p>
      <p className="text-gray-500 mb-6 animate-fade-in-up">
        Oops! The blog post you’re looking for doesn’t exist or has been removed.
      </p>
      <Link
        to="/blog"
        className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition animate-fade-in-up"
      >
        Back to Blog
      </Link>
    </div>
  </div>
);

export default BlogNotFound;
