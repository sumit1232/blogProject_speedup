import React from "react";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Simulate registration process
    setTimeout(() => {
      alert(`Registration successful! Welcome, ${data.name}!`);
      reset();
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 animate-fade-in-down">
            Register for <span className="text-blue-600">MyBlog</span>
          </h1>
          <p className="text-gray-600 animate-fade-in-up">
            Create your account to join our blogging community!
          </p>
        </div>
        {/* Registration Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-lg p-8 animate-fade-in"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="********"
              autoComplete="new-password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition w-full"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
          {isSubmitSuccessful && (
            <p className="text-green-600 text-sm mt-4 text-center">Registration successful!</p>
          )}
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
