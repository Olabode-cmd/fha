import { ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <div className="text-xl font-bold">FHA Mortgage Bank</div>
                  <div className="text-sm text-slate-400">Limited</div>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
                Pioneering the future of banking with innovative solutions and
                unparalleled customer experience.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "linkedin", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
                    >
                      <div className="w-5 h-5 bg-current"></div>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-400">
                Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Personal Banking",
                  "Wealth Management",
                  "Corporate Solutions",
                  "Digital Banking",
                  "Investment Advisory",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 hover:opacity-100 transition-opacity"
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-400">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  "About Us",
                  "Careers",
                  "News & Media",
                  "Investor Relations",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 hover:opacity-100 transition-opacity"
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 FHA Mortgage Bank Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
