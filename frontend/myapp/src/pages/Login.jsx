import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck, Mail, Lock, Loader2 } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // DYNAMIC BASE API URL FROM ENVIRONMENT VARIABLES
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  // HANDLE INPUT
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await axios.post(
        `${API_BASE_URL}/admin/login`,
        data
      );

      console.log(res.data);
      alert("Login Successful");

      // SAVE TOKEN
      localStorage.setItem("token", res.data.token);

      // SAVE USER
      localStorage.setItem("user", JSON.stringify(res.data.data));

      // SAVE ROLE
      localStorage.setItem("role", res.data.data.role);

      // REDIRECT
      navigate("/products");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased flex items-center justify-center px-4 relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-slate-900 rounded-2xl p-8 shadow-2xl relative group">
        <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-blue-500 to-indigo-500 rounded-t-2xl"></div>
        
        {/* HEADING */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex bg-blue-500/10 border border-blue-500/10 p-2.5 rounded-xl text-blue-400 mb-2">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            product Gateway
          </h1>
          <p className="text-sm text-slate-400">
            Authenticate to access your dashboard management workspace
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* EMAIL */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <Mail size={16} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={data.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:ring-2 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <Lock size={16} />
              </span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={data.password}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:ring-2 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:translate-y-0 text-white font-semibold tracking-wide text-sm py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/10 disabled:opacity-50 disabled:pointer-events-none inline-flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-400 font-semibold ml-1.5 hover:text-blue-300 transition-colors duration-200 hover:underline decoration-2 underline-offset-4"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;