import React from "react";

function OurExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-24 relative overflow-hidden bg-black/50"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🧩",
              title: "Mobile Apps",
              desc: "Flutter, Android Kotlin/Java",
            },
            {
              icon: "💻",
              title: "Web Apps",
              desc: "React, Next.js, MERN stack",
            },
            {
              icon: "📊",
              title: "Admin Dashboards",
              desc: "Analytics, controls, monitoring",
            },
            {
              icon: "⚙️",
              title: "APIs & Backend",
              desc: "Node.js, Rust, Express",
            },
            {
              icon: "🔌",
              title: "IoT Integrations",
              desc: "Bluetooth, sensors, health devices",
            },
            {
              icon: "🔍",
              title: "Performance Optimization",
              desc: "Speed, scalability, efficiency",
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

export default OurExpertiseSection;
