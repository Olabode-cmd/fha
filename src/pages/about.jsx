import React, { useState, useEffect } from "react";
import {
  Shield,
  Users,
  Award,
  TrendingUp,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Briefcase,
  Calendar,
  Building,
  Trophy,
  Zap,
  Clock,
  DollarSign,
  UserCheck,
  Lightbulb,
} from "lucide-react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timelineTimer = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timelineTimer);
  }, []);

  const team = [
    {
      name: "Sarah Williams",
      role: "Chief Executive Officer",
      img: "https://images.unsplash.com/photo-1494790108755-2616c27da422?auto=format&fit=facearea&w=256&h=256&q=80",
      bio: "15+ years transforming financial services with innovative leadership",
      education: "MBA Harvard Business School",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=256&h=256&q=80",
      bio: "Former Google engineer specializing in fintech infrastructure",
      education: "MS Computer Science Stanford",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Head of Innovation",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&w=256&h=256&q=80",
      bio: "AI and blockchain pioneer with 12+ patents in financial technology",
      education: "PhD Financial Engineering MIT",
    },
    {
      name: "David Rodriguez",
      role: "Chief Risk Officer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&h=256&q=80",
      bio: "20+ years ensuring financial security and regulatory compliance",
      education: "CFA, MBA Wharton",
    },
    {
      name: "Lisa Thompson",
      role: "Head of Customer Experience",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&w=256&h=256&q=80",
      bio: "Customer-centric design expert with proven track record",
      education: "MS UX Design Carnegie Mellon",
    },
    {
      name: "James Park",
      role: "VP of Operations",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=256&h=256&q=80",
      bio: "Operations excellence specialist scaling fintech platforms",
      education: "MBA Operations Strategy INSEAD",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "Humble Beginnings",
      desc: "Founded with $2M seed funding and a vision to democratize banking through technology",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-600",
    },
    {
      year: "2015",
      title: "Mobile Revolution",
      desc: "Launched award-winning mobile app, reaching 100K+ users within first year",
      icon: Zap,
      color: "from-emerald-500 to-teal-600",
    },
    {
      year: "2018",
      title: "AI Integration",
      desc: "Introduced machine learning for personalized financial insights and fraud detection",
      icon: Trophy,
      color: "from-purple-500 to-indigo-600",
    },
    {
      year: "2021",
      title: "Global Expansion",
      desc: "International launch across 15 countries with localized banking solutions",
      icon: Globe,
      color: "from-rose-500 to-pink-600",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      desc: "Recognized as #1 digital bank with 2M+ customers and $5B+ in managed assets",
      icon: Award,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "2M+",
      label: "Satisfied Customers",
      desc: "Across 15 countries worldwide",
    },
    {
      icon: DollarSign,
      number: "₦5B+",
      label: "Assets Under Management",
      desc: "Growing 40% year-over-year",
    },
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards",
      desc: "Including Best Digital Bank 2024",
    },
    {
      icon: Clock,
      number: "99.9%",
      label: "System Uptime",
      desc: "Reliable 24/7 banking services",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      desc: "Military-grade encryption and biometric authentication protect every transaction",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: UserCheck,
      title: "Customer Obsession",
      desc: "Every decision is made with our customers' best interests at heart",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation Drive",
      desc: "Constantly pushing boundaries with cutting-edge financial technology",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Social Impact",
      desc: "Committed to financial inclusion and community development initiatives",
      color: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-x-hidden">
        <Navbar />

        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-rose-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-16 pb-20 min-h-screen flex items-center overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-600/20 rounded-full blur-3xl z-0" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-rose-400/15 to-pink-600/15 rounded-full blur-3xl z-0" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  <Star className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="text-sm font-medium text-emerald-700">
                    15 Years of Excellence
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-800 bg-clip-text text-transparent">
                    Redefining
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Banking
                  </span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  From a bold vision to industry leadership, we've transformed
                  how millions experience banking through innovation, trust, and
                  unwavering commitment to excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    Join Our Team
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </button>
                  <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                    Our Story
                  </button>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Modern Banking"
                  className="rounded-3xl shadow-2xl object-cover h-[400px] w-full md:w-[500px] border-4 border-white/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                <Target className="w-4 h-4 text-slate-600 mr-2" />
                <span className="text-sm font-medium text-slate-700">
                  Our Foundation
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Built on Purpose
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our core principles guide every decision, innovation, and
                interaction as we shape the future of financial services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 p-8 relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To democratize access to sophisticated financial services,
                  empowering individuals and businesses to achieve their
                  financial aspirations through innovative, secure, and
                  personalized banking solutions.
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 p-8 relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the world's most trusted and innovative financial
                  partner, setting new standards for digital banking excellence
                  while fostering financial inclusion and prosperity for all.
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 p-8 relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Purpose
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To create lasting positive impact by transforming complex
                  financial services into simple, accessible, and empowering
                  experiences that drive economic growth and opportunity.
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 ${
                    activeCard === index ? "scale-105 shadow-2xl" : ""
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                <span className="text-sm font-medium text-slate-700">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  15 Years of Innovation
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From startup dreams to industry leadership, every milestone
                represents our commitment to revolutionizing banking.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-full max-w-md ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div
                        className={`group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 relative ${
                          activeTimelineItem === index
                            ? "scale-105 shadow-2xl"
                            : ""
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
                            item.color
                          } flex items-center justify-center mb-4 ${
                            index % 2 === 0 ? "ml-auto" : "mr-auto"
                          } group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className="text-white" size={24} />
                        </div>

                        <div className="text-2xl font-bold text-emerald-600 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>

                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                <Users className="w-4 h-4 text-slate-600 mr-2" />
                <span className="text-sm font-medium text-slate-700">
                  Leadership Team
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Meet the Visionaries
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Industry experts and innovative leaders driving the future of
                financial services with passion and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 p-8 text-center relative overflow-hidden"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-emerald-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-emerald-600 font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <div className="text-xs text-slate-500 font-medium">
                    {member.education}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
