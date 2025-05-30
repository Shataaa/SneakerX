import { CiFacebook } from "react-icons/ci";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-500  mb-6 text-center">
        Register with
      </h2>

      {/* Social Media Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
          <CiFacebook />
        </button>
        <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
          <AiOutlineApple />
        </button>
        <button className="bg-gray-100 p-3 rounded-full shadow hover:bg-gray-200">
          <AiOutlineGooglePlus />
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mb-6">or</p>

      {/* Registration Form */}
      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="********"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="********"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="h-4 w-4 text-teal-500 focus:ring-teal-400 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-teal-500 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
