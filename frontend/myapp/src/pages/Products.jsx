import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
  PlusCircle,
  Box,
  IndianRupee,
  Star,
  Layers,
  Loader2,
  AlertCircle,
  Search,
  CheckCircle2,
} from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // SEARCH + FILTER STATES
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // HOVER NOTIFICATION (TOAST) STATE
  const [toast, setToast] = useState({ show: false, message: "" });

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // CART
  const { addToCart } = useCart();

  // DYNAMIC BASE API URL FROM ENVIRONMENT VARIABLES
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL|| "http://localhost:3000";

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `${API_BASE_URL}/products/all?search=${search}&category=${category}`
      );

      setProducts(res.data.data || []);

    } catch (error) {
      console.log(error);
      setError("Failed to synchronize inventory database records.");
    } finally {
      setLoading(false);
    }
  };

  // LIVE FETCH
  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  // HANDLE ADD TO CART WITH HOVER NOTIFICATION
  const handleAddToCart = (item) => {
    addToCart(item);
    
    // Trigger the temporary floating notification
    setToast({ show: true, message: `${item.name} added to cart!` });
    
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950 -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 border-b border-slate-900 pb-6">

          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Box size={14} />
              Global Ledger Matrix
            </div>

            <h1 className="text-3xl font-black text-white mt-1">
              All Products
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            {/* SEARCH */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-blue-500 w-full sm:w-64"
              />
            </div>

            {/* CATEGORY FILTER */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              <option value="">All Categories</option>
              <option value="Laptop">Laptop</option>
              <option value="Mobile">Mobile</option>
              <option value="Accessories">Accessories</option>
              <option value="Electronics">Electronics</option>
            </select>

            {/* ADMIN BUTTON */}
            {role === "admin" && (
              <button
                onClick={() => navigate("/edit-products")}
                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <PlusCircle size={16} />
                Manage Products
              </button>
            )}

          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            <p className="text-slate-400 text-sm">
              Fetching products...
            </p>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="flex items-center gap-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl max-w-xl mx-auto text-sm">
            <AlertCircle size={18} />
            <p>{error}</p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && products.length === 0 && !error && (
          <div className="text-center py-24 border border-dashed border-slate-800 rounded-2xl">
            <p className="text-slate-500 text-sm">
              No products found.
            </p>
          </div>
        )}

        {/* PRODUCTS */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((item) => (
              <div
                key={item._id}
                className="group bg-slate-900/40 border border-slate-900 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 relative"
              >

                {/* CATEGORY */}
                <span className="absolute mt-3 ml-3 z-10 bg-slate-950/90 border border-slate-800 text-slate-400 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md flex items-center gap-1">
                  <Layers size={10} />
                  {item.category}
                </span>

                {/* IMAGE */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-3">

                  {item.brand && (
                    <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
                      {item.brand}
                    </p>
                  )}

                  <div className="flex justify-between items-start gap-2">
                    <h2 className="text-white font-bold line-clamp-1">
                      {item.name}
                    </h2>

                    {item.rating > 0 && (
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        <Star size={12} className="fill-current" />
                        {item.rating}
                      </div>
                    )}
                  </div>

                  <p className="text-slate-400 text-xs line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">

                    <div className="flex items-center text-emerald-400 font-black text-lg">
                      <IndianRupee size={15} />
                      {Number(item.price).toLocaleString("en-IN")}
                    </div>

                    <span className="text-xs text-slate-500">
                      Stock:
                      <b
                        className={`ml-1 ${
                          item.stock > 0
                            ? "text-slate-300"
                            : "text-rose-500"
                        }`}
                      >
                        {item.stock}
                      </b>
                    </span>

                  </div>

                  {/* ADD TO CART BUTTON WITH OUT OF STOCK HANDLER */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={item.stock <= 0}
                    className={`w-full mt-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      item.stock > 0
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    {item.stock > 0 ? "Add To Cart" : "Out of Stock"}
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>

      {/* FLOATING HOVER TOAST NOTIFICATION */}
      <div
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-slate-900 border border-emerald-500/30 text-emerald-400 px-5 py-3 rounded-xl shadow-2xl transition-all duration-300 ease-out transform ${
          toast.show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <CheckCircle2 size={18} className="text-emerald-400" />
        <span className="text-sm font-medium text-slate-200">
          {toast.message}
        </span>
      </div>

    </div>
  );
}

export default Products;