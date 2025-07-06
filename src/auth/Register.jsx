import { AiOutlineGoogle } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="font-arimo">
      <h2 className="font-arimo text-4xl font-semibold text-black mb-6 text-center">
        Register with
      </h2>

      {/* Social Media Buttons */}
      <div className="font-arimo flex justify-center gap-4 mb-6">
        <button className="font-arimo bg-gray-100 p-3 rounded-full shadow hover:bg-abu500 text-black">
          <BsFacebook />
        </button>
        <button className="font-arimo bg-gray-100 p-3 rounded-full shadow hover:bg-abu500 text-black">
          <BsApple />
        </button>
        <button className="font-arimo bg-gray-100 p-3 rounded-full shadow hover:bg-abu500 text-black">
          <AiOutlineGoogle />
        </button>
      </div>

      <p className="font-arimo text-center text-2xl text-gray-500 mb-6">or</p>

      {/* Registration Form */}
      <form className="font-arimo">
        <div className="font-arimo mb-5">
          <label
            htmlFor="email"
            className="font-arimo block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="font-arimo w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="font-arimo mb-5">
          <label
            htmlFor="password"
            className="font-arimo block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="font-arimo w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="********"
          />
        </div>

        <div className="font-arimo mb-6">
          <label
            htmlFor="confirmPassword"
            className="font-arimo block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="font-arimo w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="********"
          />
        </div>

        <div className="font-arimo flex items-center mb-6">
          <label className="font-arimo relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="rememberMe"
              className="font-arimo sr-only peer"
            />
            <div className="font-arimo w-11 h-6 bg-black rounded-full peer peer-checked:bg-teal-500 transition-colors duration-300"></div>
            <div className="font-arimo absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </label>
          <label
            htmlFor="rememberMe"
            className="font-arimo ml-4 text-base text-gray-700 font-medium"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="font-arimo w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>

      <div className="font-arimo mt-4 text-center">
        <p className="font-arimo text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-arimo text-teal-500 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
