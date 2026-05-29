import React from "react";
import { Users, Code, Zap, ShieldAlert, TrendingUp, Cpu } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 border-b border-slate-900 bg-slate-900/10 backdrop-blur-3xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">
            <Cpu size={12} className="animate-spin-slow" />
            Core Infrastructure
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
            About Our Product <br />
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Management System
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our system is engineered to help high-growth teams manage products efficiently 
            utilizing a modern, granular, and user-centric platform.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT IMAGE VECTOR CONTAINER */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl transform scale-75"></div>
            <div className="relative p-6 bg-slate-900/30 border border-slate-900 rounded-3xl backdrop-blur-xl shadow-2xl">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Architecture Illustration"
                className="w-full max-w-[320px] h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] opacity-80 mix-blend-lighten"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Who We Are
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                We provide an enterprise-grade product management architecture for businesses worldwide. 
                Our platform allows administrators to seamlessly index assets, monitor real-time stock levels, 
                organize unstructured product properties, and maximize systemic workflow throughput.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal flex items-center gap-2 bg-slate-900/40 border border-slate-900/60 p-4 rounded-xl">
                <Code size={18} className="text-blue-400 shrink-0" />
                <span>
                  Built upon an industry-standard modern technology stack incorporating **React**, **Node.js**, **Express**, and **MongoDB** for distributed scalability and cryptographically isolated workflows.
                </span>
              </p>
            </div>

            {/* QUICK STATS INLINE */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950/50 border border-slate-900 rounded-xl p-5 hover:border-blue-500/20 transition-colors duration-300">
                <div className="text-3xl font-black text-blue-500 tracking-tight">500+</div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2">
                  Products Managed
                </p>
              </div>
              <div className="bg-slate-950/50 border border-slate-900 rounded-xl p-5 hover:border-indigo-500/20 transition-colors duration-300">
                <div className="text-3xl font-black text-indigo-500 tracking-tight">100+</div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-slate-900/40 backdrop-blur-md py-20 px-6 border-y border-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-black tracking-tight text-white">
            Our Mission
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            To eliminate administrative operational friction by delivering a modular, bulletproof asset system that safeguards timing infrastructure, enhances productivity metrics, and scales alongside corporate expansion goals.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">
              Professional tools designed for continuous data integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group relative bg-slate-950/20 hover:bg-slate-900/50 border border-slate-900 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/10 w-12 h-12 flex items-center justify-center rounded-xl transition-colors group-hover:bg-blue-500/20">
                  <Zap size={22} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  Fast Performance
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Execute administrative tasks at speed using a highly optimized database cache and frictionless component architecture.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-slate-950/20 hover:bg-slate-900/50 border border-slate-900 hover:border-indigo-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-indigo-500/10 border border-indigo-500/10 w-12 h-12 flex items-center justify-center rounded-xl transition-colors group-hover:bg-indigo-500/20">
                  <ShieldAlert size={22} className="text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                  Secure System
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Enforced route parameters and protected session profiles ensure all product matrices remain secure and confidential.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-slate-950/20 hover:bg-slate-900/50 border border-slate-900 hover:border-emerald-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="bg-emerald-500/10 border border-emerald-500/10 w-12 h-12 flex items-center justify-center rounded-xl transition-colors group-hover:bg-emerald-500/20">
                  <TrendingUp size={22} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  Easy Growth
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Scale data collections comfortably using dynamic MongoDB storage and responsive component layers that change to fit your scope.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;