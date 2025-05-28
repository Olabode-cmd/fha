import { CreditCard, PiggyBank, Smartphone, Shield } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const features = [
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    desc: "Flexible, high-yield savings with instant access and no hidden fees."
  },
  {
    icon: CreditCard,
    title: "Debit & Credit Cards",
    desc: "Contactless, secure cards with global acceptance and rewards."
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    desc: "24/7 access, instant transfers, and bill payments from your phone."
  },
  {
    icon: Shield,
    title: "Security & Support",
    desc: "Biometric login, real-time alerts, and 24/7 customer care."
  }
];

const PersonalBanking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
        {/* Blurred Background Elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-600/20 rounded-full blur-3xl z-0" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl z-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-800 bg-clip-text text-transparent">
                Personal Banking
              </h1>
              <p className="text-sm md:text-base text-slate-600 max-w-lg">
                Discover a new era of personal finance—smarter, safer, and more rewarding. Manage your money with confidence, wherever you are.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300">
                Open an Account
              </button>
            </div>
            {/* <div className="flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80"
                alt="Personal Banking"
                className="rounded-3xl shadow-2xl object-cover h-[300px] md:h-[400px] w-full md:w-[350px] border-4 border-white/40"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12 text-center">
            Everything you need for modern banking
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="group relative p-8 bg-white/80 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 backdrop-blur-xl flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Floating Card */}
      <section className="py-24 flex justify-center items-center bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[600px] h-[300px] bg-gradient-to-br from-blue-900/60 via-slate-900/80 to-emerald-900/60 rounded-3xl blur-2xl" />
        </div>
        <div className="w-full flex justify-center relative z-10">
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl px-8 py-12 max-w-2xl w-full text-center border border-slate-800/60">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to experience premium banking?</h2>
            <p className="text-slate-300 mb-8 text-base sm:text-lg">Join thousands who trust us for their everyday banking. Open your account in minutes and unlock a world of benefits.</p>
            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold shadow-lg transition-all">Get Started</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PersonalBanking;