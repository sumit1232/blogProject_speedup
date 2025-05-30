import React from "react"

const Login = () => {
  
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 animate-fade-in-down">
            Login to <span className="text-blue-600">MyBlog</span>
          </h1>
          <p className="text-gray-600 animate-fade-in-up">
            Welcome back! Please enter your credentials.
          </p>
        </div>
        <form
          
          className="bg-white rounded-lg shadow-lg p-8 animate-fade-in"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
             
              placeholder="you@example.com"
              autoComplete="username"
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
              autoComplete="current-password"
            />
       
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition w-full"
          >Login
          </button>
        </form>
        <div className="text-center mt-6">
          <a
            href="/registration"
            className="text-blue-600 hover:underline text-sm"
          >
            Don't have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
