import React from "react";

const posts = [
  {
    title: "How to Start Blogging in 2025",
    excerpt: "Kickstart your blogging journey with these essential tips and tricks for beginners.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "10 Productivity Hacks for Writers",
    excerpt: "Boost your creativity and output with these proven productivity hacks.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Best Tools for Modern Bloggers",
    excerpt: "Discover the latest tools every blogger should have in their toolkit.",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "How to Start Blogging in 2025",
    excerpt: "Kickstart your blogging journey with these essential tips and tricks for beginners.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "10 Productivity Hacks for Writers",
    excerpt: "Boost your creativity and output with these proven productivity hacks.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Best Tools for Modern Bloggers",
    excerpt: "Discover the latest tools every blogger should have in their toolkit.",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
          Welcome to <span className="text-blue-600">MyBlog</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up">
          Your daily dose of inspiration, tips, and stories from passionate writers.
        </p>
      </section>

      {/* Blog Posts Preview */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
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
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href="/blog"
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

export default Home;
    