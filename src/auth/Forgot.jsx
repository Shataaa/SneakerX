import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-teal-700 mb-2 text-center">
        Forgot Your Password?
      </h2>

      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

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
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
        >
          Send Reset Link
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Remembered your password?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-teal-500 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
