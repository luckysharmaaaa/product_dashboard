import React from "react";
import { Link } from "react-router-dom";
import {
  Package,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-6">

        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-slate-900 to-black opacity-90"></div>

        {/* BLUR CIRCLE EFFECT */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

        {/* MAIN CONTENT */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* SMALL TAG */}
            <div className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
              Smart Inventory Dashboard
            </div>

            {/* MAIN HEADING */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Manage Products
              <span className="text-blue-500"> Professionally</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
              A modern product management system to organize,
              monitor, and manage inventory with a professional
              dashboard experience.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

              {/* VIEW PRODUCTS BUTTON */}
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 transition duration-300 shadow-2xl"
              >
                View Products
                <ArrowRight size={20} />
              </Link>

              {/* LEARN MORE BUTTON */}
              <Link
                to="/about"
                className="border border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 px-7 py-4 rounded-2xl font-semibold transition duration-300"
              >
                Learn More
              </Link>
            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center">

            {/* GLASS CARD */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2620/2620277.png"
                alt="dashboard"
                className="w-105 drop-shadow-2xl"
              />

            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 px-6 bg-slate-900">

        <div className="max-w-7xl mx-auto">

          {/* SECTION TITLE */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold">
              Powerful Features
            </h2>

            <p className="text-slate-400 mt-5 text-lg">
              Everything needed for a modern inventory system.
            </p>

          </div>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* ================= CARD 1 ================= */}
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 hover:border-blue-500 transition duration-300 shadow-xl">

              {/* ICON */}
              <div className="bg-blue-500/20 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <Package size={32} className="text-blue-400" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold">
                Product Management
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400 mt-5 leading-8">
                Easily add, edit, update, and manage products
                using a professional dashboard system.
              </p>

            </div>

            {/* ================= CARD 2 ================= */}
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 hover:border-indigo-500 transition duration-300 shadow-xl">

              {/* ICON */}
              <div className="bg-indigo-500/20 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <BarChart3 size={32} className="text-indigo-400" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold">
                Analytics Dashboard
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400 mt-5 leading-8">
                Track product performance and monitor inventory
                growth with real-time insights.
              </p>

            </div>

            {/* ================= CARD 3 ================= */}
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 hover:border-emerald-500 transition duration-300 shadow-xl">

              {/* ICON */}
              <div className="bg-emerald-500/20 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <ShieldCheck size={32} className="text-emerald-400" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold">
                Secure Authentication
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400 mt-5 leading-8">
                Advanced authentication and secure access
                management for better protection.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-24 px-6 bg-slate-950">

        <div className="max-w-6xl mx-auto">

          {/* STATS GRID */}
          <div className="grid md:grid-cols-4 gap-8 text-center">

            {/* ================= STAT CARD 1 ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-blue-500 transition duration-300">

              <h2 className="text-5xl font-bold text-blue-500">
                500+
              </h2>

              <p className="text-slate-400 mt-4 text-lg">
                Products Managed
              </p>

            </div>

            {/* ================= STAT CARD 2 ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-indigo-500 transition duration-300">

              <h2 className="text-5xl font-bold text-indigo-500">
                120+
              </h2>

              <p className="text-slate-400 mt-4 text-lg">
                Active Users
              </p>

            </div>

            {/* ================= STAT CARD 3 ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-emerald-500 transition duration-300">

              <h2 className="text-5xl font-bold text-emerald-500">
                99%
              </h2>

              <p className="text-slate-400 mt-4 text-lg">
                System Security
              </p>

            </div>

            {/* ================= STAT CARD 4 ================= */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-pink-500 transition duration-300">

              <h2 className="text-5xl font-bold text-pink-500">
                24/7
              </h2>

              <p className="text-slate-400 mt-4 text-lg">
                Support Available
              </p>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;