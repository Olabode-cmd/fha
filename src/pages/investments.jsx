import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  BarChart2,
  DollarSign,
  Shield,
  Star,
  Globe,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Investments = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      icon: TrendingUp,
      title: "Smart Portfolios",
      desc: "AI-driven, diversified portfolios tailored to your personal financial goals and risk tolerance.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: BarChart2,
      title: "Mutual Funds",
      desc: "Access top-performing funds with expert management and institutional-grade research.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: DollarSign,
      title: "Fixed Income",
      desc: "Stable returns with bonds, treasury bills, and government securities for conservative investors.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Wealth Protection",
      desc: "Comprehensive insurance and risk management solutions for your investment portfolio.",
      color: "from-rose-500 to-pink-600",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      desc: "Advanced encryption with multi-factor authentication and real-time fraud monitoring for your investments.",
    },
    {
      icon: Users,
      title: "Expert Advisory",
      desc: "Dedicated investment advisors and AI-powered insights available 24/7 to guide your decisions.",
    },
    {
      icon: Award,
      title: "Award-Winning Platform",
      desc: "Consistently rated #1 in investment platform innovation and customer satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-x-hidden">
      <Navbar />
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-rose-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 min-h-screen flex items-center overflow-hidden">
        {/* Blurred Background Elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-600/20 rounded-full blur-3xl z-0" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-rose-400/15 to-pink-600/15 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Star className="w-4 h-4 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-emerald-700">
                  Award-Winning Investment Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-800 bg-clip-text text-transparent">
                  Smart
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Investments
                </span>
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-lg">
                Grow your wealth with innovative investment solutions,
                AI-powered insights, and world-class security. Start building
                your financial future with expert guidance today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Start Investing Today
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                  View Portfolio Demo
                </button>
              </div>
            </div>

            {/* Right column: Investment visualization */}
            <div className="relative flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400&h=500&q=80"
                alt="Investment Growth"
                className="rounded-3xl shadow-2xl object-cover h-[300px] md:h-[500px] w-full md:w-[400px] border-4 border-white/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Solutions Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
              <Globe className="w-4 h-4 text-slate-600 mr-2" />
              <span className="text-sm font-medium text-slate-700">
                Comprehensive Investment Solutions
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Investment Solutions for Every Goal
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover personalized investment strategies powered by
              cutting-edge technology and expert portfolio management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 ${
                  activeCard === index ? "scale-105 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <product.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {product.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {product.desc}
                </p>

                <button className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                  Learn More
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </button>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-cyan-900/20"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Wealth?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Join thousands of successful investors who trust us with their
              financial future. Start with as little as ₦100,000 and watch your
              wealth grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Start Investing Now
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Investments;