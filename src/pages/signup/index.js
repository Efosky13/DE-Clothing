import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Form Data:", formData);
    if (isSignup) {
      // Handle signup logic
    } else {
      // Handle signin logic
    }
    // Redirect or show a message on success
    router.push("/dashboard"); // Example redirect to a dashboard page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          {isSignup && (
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
