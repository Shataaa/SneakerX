import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  /* navigate, state & handleChange*/
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* process form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        // Jika status bukan 200, tampilkan pesan error
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // Redirect ke dashboard jika login sukses
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* error & loading status */
  const errorInfo = error ? (
    <div className="font-arimo bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="font-arimo bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="font-arimo">
      <h1 className="font-arimo text-3xl font-bold text-center text-teal-600 mb-2">
        Welcome Back
      </h1>
      <p className="font-arimo text-sm text-gray-500 text-center mb-6">
        Enter your email and password to sign in
      </p>

      {error && (
        <div className="font-arimo bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            className="font-arimo w-full px-4 py-2 border text-black border-gray-200 rounded-lg shadow-sm placeholder-gray-400 bg-white"
            placeholder="Your email address"
          />
        </div>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="font-arimo w-full px-4 py-2 border text-black border-gray-200 rounded-lg shadow-sm placeholder-gray-400 bg-white"
            placeholder="Your password"
          />
        </div>
        <div className="font-arimo flex items-center justify-between mb-6">
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
            type="button"
            onClick={() => navigate("/forgot")}
            className="font-arimo text-teal-500 text-sm hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="font-arimo w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Sign In
        </button>
      </form>

      <p className="font-arimo text-sm text-gray-500 mt-6 text-center">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="font-arimo text-teal-500 hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
