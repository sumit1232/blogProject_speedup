import React from "react";

const Registration = () => {

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 animate-fade-in-down">
            Register for <span className="text-blue-600">MyBlog</span>
          </h1>
          <p className="text-gray-600 animate-fade-in-up">
            Create your account to join our blogging community!
          </p>
        </div>
        {/* Registration Form */}
        <form className="bg-white rounded-lg shadow-lg p-8 animate-fade-in"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="name"
              placeholder="Your name"
              autoComplete="name"
            />
           
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
             
              placeholder="you@example.com"
              autoComplete="email"
            />
           
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
             
              placeholder="********"
              autoComplete="new-password"
            />
           
          </div>
          <button type="submit"className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition w-full">Register
          </button>
        
        </form>
        <div className="text-center mt-6">
          <a
            href="/login"
            className="text-blue-600 hover:underline text-sm"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
