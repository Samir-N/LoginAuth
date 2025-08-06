import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const { user, loginUser, error, clearError, loading } = useAuth();
  const navigate = useNavigate();
  const loginForm = useRef(null);

  useEffect(() => {
    clearError();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearError(); 

    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    loginUser({ email, password });
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <section className="flex flex-col justify-top items-center h-screen pt-20">
      <form
        ref={loginForm}
        onSubmit={handleSubmit}
        className="w-[500px] bg-white shadow-lg border border-gray-200 p-5 text-black flex flex-col gap-5 rounded-xl"
      >
        <h1 className="text-2xl font-bold text-center">Login to Your Account</h1>

        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required placeholder="Enter your email" />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            min={6}
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div className="error">
            <p>⚠️ {error}</p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            disabled={loading}
            className={`primaryBtn ${loading ? "bg-gray-400 cursor-not-allowed" : ""}`}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <p className="text-center pt-5">
            <Link to="/resetPassword" className="text-blue-600 hover:underline">
              Forgot password
            </Link>
          </p>
        </div>

        <div className="border-t border-gray-300"></div>

        <div className="text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
