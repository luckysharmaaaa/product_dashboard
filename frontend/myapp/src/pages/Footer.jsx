import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Package,
  Globe
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-200 antialiased">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

        {/* ================= COMPANY INFO ================= */}
        <div className="space-y-6">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/10">
              <Package size={22} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white leading-none">
                product
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Management Dashboard
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-slate-400 leading-relaxed text-sm font-normal max-w-sm">
            A modern product management platform designed to manage inventory, track products, and improve productivity with a professional dashboard system.
          </p>

          {/* SOCIAL ICONS (SVG FIX) */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="bg-slate-900 hover:bg-blue-500/10 border border-slate-800 hover:border-blue-500/30 p-2.5 rounded-lg text-slate-400 hover:text-blue-400 transition-all duration-300">
              <Globe size={16} />
            </a>
            
            {/* LinkedIn Custom SVG */}
            <a href="#" className="bg-slate-900 hover:bg-blue-500/10 border border-slate-800 hover:border-blue-500/30 p-2.5 rounded-lg text-slate-400 hover:text-blue-400 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* X / Twitter Custom SVG */}
            <a href="#" className="bg-slate-900 hover:bg-blue-500/10 border border-slate-800 hover:border-blue-500/30 p-2.5 rounded-lg text-slate-400 hover:text-blue-400 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram Custom SVG */}
            <a href="#" className="bg-slate-900 hover:bg-blue-500/10 border border-slate-800 hover:border-blue-500/30 p-2.5 rounded-lg text-slate-400 hover:text-blue-400 transition-all duration-300">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" h="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-sm font-medium">
            <li>
              <Link to="/home" className="text-slate-400 hover:text-white transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-400 hover:text-white transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-slate-400 hover:text-white transition duration-200">
                Products
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-slate-400 hover:text-white transition duration-200">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Services
          </h3>
          <ul className="space-y-3.5 text-sm font-medium text-slate-400">
            <li className="hover:text-white transition duration-200 cursor-pointer">
              Product Management
            </li>
            <li className="hover:text-white transition duration-200 cursor-pointer">
              Inventory Tracking
            </li>
            <li className="hover:text-white transition duration-200 cursor-pointer">
              Analytics Dashboard
            </li>
            <li className="hover:text-white transition duration-200 cursor-pointer">
              Secure Authentication
            </li>
          </ul>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div className="space-y-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Contact Info
          </h3>

          {/* EMAIL */}
          <div className="flex items-center gap-3.5">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg shrink-0">
              <Mail size={16} className="text-blue-400" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </p>
              <p className="text-sm text-slate-300 truncate font-medium mt-0.5">
                luckysharma232004@gmail.com

              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-3.5">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg shrink-0">
              <Phone size={16} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Phone
              </p>
              <p className="text-sm text-slate-300 font-medium mt-0.5">
                +91 8708278502
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3.5">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg shrink-0">
              <MapPin size={16} className="text-rose-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Location
              </p>
              <p className="text-sm text-slate-300 font-medium mt-0.5">
                Delhi, India
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* COPYRIGHT */}
          <p className="text-slate-500 text-xs font-medium text-center sm:text-left">
            &copy; {new Date().getFullYear()} product. All rights reserved.
          </p>

          {/* EXTRA LINKS */}
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <p className="hover:text-slate-300 cursor-pointer transition duration-200">
              Privacy Policy
            </p>
            <p className="hover:text-slate-300 cursor-pointer transition duration-200">
              Terms & Conditions
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;