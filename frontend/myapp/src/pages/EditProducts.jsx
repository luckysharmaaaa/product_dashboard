import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Edit3, Trash2, ShieldAlert, IndianRupee, RefreshCw, Lock, Layers, Star } from "lucide-react";

function EditProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Track admin status in state to trigger re-renders instantly on login updates
  const [currentRole, setCurrentRole] = useState(localStorage.getItem("role"));

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "Laptop",
    brand: "",
    stock: "",
    image: "",
    rating: "",
  });

  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const fetchProducts = async () => {
    try {
      // FIX: Changed to backticks for proper variable interpolation
      const res = await axios.get(`${API_BASE_URL}/products/all`);
      setProducts(res.data.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Synchronize dynamic role state variations on mount and update parameters
  useEffect(() => {
    const activeRole = localStorage.getItem("role");
    setCurrentRole(activeRole);

    if (activeRole === "admin") {
      fetchProducts();
    }
  }, [token]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      // FIX: Changed to backticks
      await axios.post(`${API_BASE_URL}/products/add`, form, {
        headers: { Authorization: token },
      });
      alert("Product Added Successfully");
      fetchProducts();
      resetForm();
    } catch (error) {
      alert(error.response?.data?.message || "Failed To Add Product");
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this asset?")) return;
    try {
      // FIX: Changed to backticks
      await axios.delete(`${API_BASE_URL}/products/delete/${id}`, {
        headers: { Authorization: token },
      });
      alert("Product Deleted Successfully");
      fetchProducts();
    } catch (error) {
      alert(error.response?.data?.message || "Failed To Delete Product");
    }
  };

  const editProduct = (item) => {
    setEditId(item._id);
    setForm({
      name: item.name,
      description: item.description || "",
      price: item.price,
      category: item.category || "Laptop",
      brand: item.brand || "",
      stock: item.stock !== undefined ? item.stock : 0,
      image: item.image,
      rating: item.rating !== undefined ? item.rating : 0,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      // FIX: Changed to backticks
      await axios.put(`${API_BASE_URL}/products/update/${editId}`, form, {
        headers: { Authorization: token },
      });
      alert("Product Updated Successfully");
      fetchProducts();
      setEditId(null);
      resetForm();
    } catch (error) {
      alert(error.response?.data?.message || "Failed To Update Product");
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      price: "",
      category: "Laptop",
      brand: "",
      stock: "",
      image: "",
      rating: "",
    });
  };

  if (currentRole !== "admin") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 antialiased">
        <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
          <div className="inline-flex bg-red-500/10 border border-red-500/10 p-3 rounded-xl text-red-400">
            <Lock size={28} />
          </div>
          <h1 className="text-xl font-black tracking-tight text-white">Access Denied</h1>
          <button onClick={() => navigate("/products")} className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 text-sm font-semibold py-3 rounded-xl transition duration-200">
            Return to Inventory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased p-6 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-950/10 via-slate-950 to-slate-950 -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-12">

        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert size={14} /> Schema Integration Live
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Product Control Ledger</h1>
        </div>

        {/* INPUT FORM FIELD EXTENSIONS */}
        <div className="max-w-4xl mx-auto relative">
          {/* FIX: Set a fallback border class if editId is not active to prevent flashing layouts */}
          <form onSubmit={editId ? updateProduct : addProduct} className={`p-6 sm:p-8 rounded-2xl bg-slate-900/40 backdrop-blur-xl border space-y-5 ${editId ? "border-amber-500/30" : "border-slate-800"}`}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />
              <input type="text" name="brand" placeholder="Brand Name" value={form.brand} onChange={handleChange} className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <input type="number" name="price" placeholder="Price (INR)" value={form.price} onChange={handleChange} required className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all [appearance:textfield]" />
              <input type="number" name="stock" placeholder="Stock Units" value={form.stock} onChange={handleChange} className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />
              <input type="number" name="rating" placeholder="Rating (0-5)" min="0" max="5" step="0.1" value={form.rating} onChange={handleChange} className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />

              <div className="relative">
                <select name="category" value={form.category} onChange={handleChange} required className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-slate-300 outline-none transition-all appearance-none cursor-pointer">
                  <option value="Laptop">Laptop</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Electronics">Electronics</option>
                </select>
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">▼</span>
              </div>
            </div>

            <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />
            <textarea name="description" placeholder="Product Specifications / Description" value={form.description} onChange={handleChange} rows="3" className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"></textarea>

            {/* FIX: Corrected gradient classes from bg-linear-to-r to bg-gradient-to-r */}
            <button type="submit" className={`w-full font-semibold tracking-wide text-sm py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 text-white ${editId ? "bg-gradient-to-r from-amber-600 to-orange-600" : "bg-gradient-to-r from-blue-600 to-indigo-600"}`}>
              {editId ? <><RefreshCw size={16} /> Update Product Parameters</> : <><PlusCircle size={16} /> Commit New Product Entry</>}
            </button>
          </form>
        </div>

        {/* DATA SHEET LIST VISUAL REFACTOR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item._id} className="group bg-slate-900/40 backdrop-blur-xl border border-slate-900 hover:border-slate-800/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 relative">

              <span className="absolute top-3 left-3 z-10 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-400 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1">
                <Layers size={10} /> {item.category}
              </span>

              <div>
                <div className="relative w-full h-44 bg-slate-950 overflow-hidden shrink-0 border-b border-slate-950">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h2 className="text-sm font-bold text-white tracking-tight line-clamp-1">{item.name}</h2>
                    {item.rating > 0 && (
                      <div className="flex items-center gap-0.5 text-amber-400 text-xs font-bold shrink-0">
                        <Star size={12} className="fill-current" /> {item.rating}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.description || "No description provided."}</p>

                  <div className="flex items-center justify-between pt-2 text-xs">
                    <div className="inline-flex items-center gap-0.5 font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-2 py-0.5">
                      <IndianRupee size={10} /><span>{Number(item.price).toLocaleString("en-IN")}</span>
                    </div>
                    <span className="text-slate-500 font-medium">Stock: <b className="text-slate-300">{item.stock || 0}</b></span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 p-5 pt-0 mt-auto">
                <button onClick={() => editProduct(item)} className="inline-flex items-center justify-center gap-1.5 bg-slate-950/80 hover:bg-amber-500/10 border border-slate-800 hover:border-amber-500/30 text-slate-400 hover:text-amber-400 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200"><Edit3 size={12} /> Modify</button>
                <button onClick={() => deleteProduct(item._id)} className="inline-flex items-center justify-center gap-1.5 bg-slate-950/80 hover:bg-rose-500/10 border border-slate-800 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200"><Trash2 size={12} /> Delete</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EditProducts;