import { useState } from "react";

export default function RegisterForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black bg-opacity-70 p-6">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          {isSignUp ? "Create an Account" : "Sign In"}
        </h2>

        <form>
          {isSignUp && (
            <div className="mb-5"> 
              <label className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg bg-gray-100 p-3 focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}




          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-lg bg-gray-100 p-3 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="mt-2 w-full rounded-lg bg-gray-100 p-3 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-2 text-blue-600 font-semibold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
