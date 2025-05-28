import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const links = [
    { label: "Home", route: "/" },
    { label: "Personal Banking", route: "/personal-banking" },
    { label: "Investments", route: "/investments" },
    { label: "Loans", route: "/loans" },
    { label: "About", route: "/about" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showFloatingNav, setShowFloatingNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            // Show floating nav when scrolled past 130vh
            setShowFloatingNav(window.scrollY > window.innerHeight * 1.3);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NavContent = ({ showLogo = true, dark = false }) => (
        <>
            {showLogo && <img src={Logo} alt="Logo" className="w-[80px] sm:w-[100px]" />}
            <div className={`hidden lg:flex items-center space-x-1 ${dark ? "mx-auto" : ""}`}>
                {links.map((link) => (
                    <Link
                        key={link.label}
                        to={link.route}
                        className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-2xl ${
                            dark
                                ? "text-white hover:text-emerald-400 bg-transparent hover:bg-transparent"
                                : "text-slate-700 hover:text-emerald-600 bg-transparent hover:bg-slate-100/50"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
                <button className={`ml-2 sm:ml-4 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-2xl transition-all duration-300 ${
                    dark
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500"
                        : "bg-gradient-to-r from-rose-500 to-red-600 text-white"
                }`}>
                    Internet Banking
                </button>
            </div>
            {/* Mobile Hamburger */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 sm:p-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg ml-2"
            >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </>
    );

    return (
        <>
            {/* Main Navbar (static, scrolls with page) */}
            <nav
                className={`w-full z-50 transition-all duration-300 ${
                    scrollY > 50
                        ? "border-b border-white/20 shadow-2xl"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <NavContent />
                    </div>
                </div>
            </nav>

            {/* Floating Pill Navbar (fixed, appears after 130vh) */}
            <nav
                className={`fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ${
                    showFloatingNav
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-8"
                }`}
                style={{ top: '2rem' }}
            >
                <div className="pointer-events-auto w-full">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4">
                        <div className="flex justify-center">
                            <div className="bg-slate-800 backdrop-blur-xl rounded-full shadow-2xl border border-slate-800 flex items-center px-2 sm:px-4 py-1 sm:py-2 w-full max-w-full">
                                {/* Floating navbar: logo left, links right */}
                                <div className="w-full flex items-center justify-between">
                                    <img src={Logo} alt="Logo" className="w-[50px]" />
                                    <div className="hidden lg:flex items-center space-x-1">
                                        {links.map((link) => (
                                            <Link
                                                key={link.label}
                                                to={link.route}
                                                className="px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-2xl text-white hover:text-emerald-400 bg-transparent hover:bg-transparent"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                        <button className="ml-2 sm:ml-4 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-2xl transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500">
                                            Internet Banking
                                        </button>
                                    </div>
                                    {/* Hamburger for mobile floating navbar */}
                                    <div className="flex lg:hidden w-full justify-end">
                                        <button
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                            className="p-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg"
                                        >
                                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-white/20 shadow-2xl z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-2 sm:space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.route}
                                className="block py-2 sm:py-3 text-xs sm:text-base text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="w-full py-2 sm:py-3 bg-gradient-to-r from-rose-500 to-red-600 text-xs sm:text-base text-white font-semibold rounded-2xl">
                            Internet Banking
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;