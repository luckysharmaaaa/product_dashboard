import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import {
  LayoutDashboard,
  Package,
  Info,
  LogOut,
  ShoppingCart,
  Edit,
} from "lucide-react";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  // ================= LOGOUT FUNCTION =================
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    navigate("/login");
  };

  // ================= ACTIVE LINK =================
  const activeLink = (path) => {
    return location.pathname === path
      ? "bg-white/20 text-white"
      : "text-gray-200 hover:bg-white/10 hover:text-white";
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg">
              <Package size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Product</h1>
              <p className="text-xs text-gray-300">Management Dashboard</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex items-center gap-3">

            <Link
              to="/home"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${activeLink("/home")}`}
            >
              <LayoutDashboard size={18} />
              Home
            </Link>

            <Link
              to="/products"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${activeLink("/products")}`}
            >
              <Package size={18} />
              Products
            </Link>

            <Link
              to="/cart"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${activeLink("/cart")}`}
            >
              <ShoppingCart size={18} />
              Cart
            </Link>

            <Link
              to="/about"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${activeLink("/about")}`}
            >
              <Info size={18} />
              About
            </Link>

            {/* ADMIN ONLY LINK */}
            {role === "admin" && (
              <Link
                to="/edit-products"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${activeLink("/edit-products")}`}
              >
                <Edit size={18} />
                Edit
              </Link>
            )}

            {/* LOGOUT */}
            <button
              onClick={logout}
              className="ml-4 flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl transition shadow-lg"
            >
              <LogOut size={18} />
              Logout
            </button>

          </nav>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="grow bg-linear-to-br from-slate-950 via-slate-900 to-slate-800">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default Layout;