import React from "react";

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Teams Choose DevVerse
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🔥",
              title: "Fast Delivery",
              desc: "We move at startup speed without sacrificing quality.",
            },
            {
              icon: "🧠",
              title: "Expert Engineering",
              desc: "Deep technical experience across multiple domains.",
            },
            {
              icon: "🌍",
              title: "Cross-domain Experience",
              desc: "We've built for healthcare, e-commerce, pharma & more.",
            },
            {
              icon: "🔐",
              title: "Secure, Scalable Code",
              desc: "Built for growth and hardened against threats.",
            },
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              <div className="relative backdrop-blur-sm bg-gray-900/40 border border-white/10 rounded-lg p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:border-white/20">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
