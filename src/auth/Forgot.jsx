import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="font-arimo text-2xl font-semibold text-teal-700 mb-2 text-center">
        Forgot Your Password?
      </h2>

      <p className="font-arimo text-sm text-gray-500 mb-6 text-center">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

      <form>
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
        <button
          type="submit"
          className="font-arimo w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Send Reset Link
        </button>

        <div className="font-arimo mt-4 text-center">
          <p className="font-arimo text-sm text-gray-600">
            Remembered your password?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-arimo text-teal-500 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
