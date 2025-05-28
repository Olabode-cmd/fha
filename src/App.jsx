import React, { useState, useEffect } from "react";
import {
  Home,
  CreditCard,
  TrendingUp,
  Smartphone,
  ArrowRight,
  Shield,
  Users,
  Award,
  ChevronDown,
  Star,
  CheckCircle,
  Globe,
} from "lucide-react";

import Hero from "./assets/hero-image.jpg";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
const App = () => {
  
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Personal Banking",
      desc: "Next-gen digital banking with AI-powered insights",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: TrendingUp,
      title: "Smart Investments",
      desc: "Algorithm-driven portfolio management",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: CreditCard,
      title: "Instant Loans",
      desc: "60-second approval with blockchain verification",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Digital Banking",
      desc: "Biometric security with real-time analytics",
      color: "from-rose-500 to-pink-600",
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

      {/* Hero Section with Advanced Animations */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
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
                  Award-Winning Banking Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-800 bg-clip-text text-transparent">
                  Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Banking
                </span>
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-lg">
                Experience revolutionary banking with AI-powered insights,
                instant transactions, and seamless digital experiences designed
                for the modern world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">500K+</div>
                  <div className="text-sm text-slate-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    ₦2.5B+
                  </div>
                  <div className="text-sm text-slate-600">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right column: Human image */}
            <div className="relative flex justify-center items-center">
              <img
                src={Hero}
                alt="Human"
                className="rounded-3xl shadow-2xl object-cover h-[300px] md:h-[500px] w-full md:w-[400px] border-4 border-white/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
              <Globe className="w-4 h-4 text-slate-600 mr-2" />
              <span className="text-sm font-medium text-slate-700">
                Comprehensive Solutions
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Banking Reimagined
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover a new era of financial services powered by cutting-edge
              technology and personalized experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 ${
                  activeCard === index ? "scale-105 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <button className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                  Explore More
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

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-slate-900 to-emerald-800 bg-clip-text text-transparent">
                    Why Industry Leaders Choose Us
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Experience the perfect fusion of innovation, security, and
                  personalized service that sets us apart in the financial
                  industry.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Military-Grade Security",
                    desc: "Advanced encryption with biometric authentication and real-time fraud detection.",
                  },
                  {
                    icon: Users,
                    title: "24/7 Concierge Support",
                    desc: "Dedicated relationship managers and AI-powered customer service available around the clock.",
                  },
                  {
                    icon: Award,
                    title: "Industry Recognition",
                    desc: "Consistently rated #1 in customer satisfaction and digital banking innovation.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Join the Elite
                </h3>
                <p className="text-slate-600">
                  Experience premium banking today
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                  />
                </div>
                <div className="relative">
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-slate-700">
                    <option>Select Premium Service</option>
                    <option>Private Banking</option>
                    <option>Wealth Management</option>
                    <option>Corporate Solutions</option>
                    <option>Investment Advisory</option>
                  </select>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-emerald-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
