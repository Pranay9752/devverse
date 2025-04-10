import React from "react";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-black/50"
    >
      {/* Top line and animated background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full animate-reverse-spin"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build the Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Ready to transform your ideas into reality? Let's create something
            exceptional together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* Email */}
            <a
              href="mailto:rbhalerao1478@gmail.com"
              className="backdrop-blur-sm bg-gray-900/40 border border-white/10 rounded-lg p-6 flex flex-col items-center hover:border-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-3">📧</div>
              <p className="text-gray-300 hover:underline">
                rbhalerao1478@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+919960147849"
              className="backdrop-blur-sm bg-gray-900/40 border border-white/10 rounded-lg p-6 flex flex-col items-center hover:border-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-3">📞</div>
              <p className="text-gray-300 hover:underline">+91-9960147849</p>
            </a>

            {/* Schedule Call */}
            <a
              href="https://calendly.com/pranayambre01/30min" // Replace this with your actual Calendly or scheduling link
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-sm bg-gray-900/40 border border-white/10 rounded-lg p-6 flex flex-col items-center hover:border-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-3">🗓️</div>
              <p className="text-gray-300 hover:underline">Schedule a Call</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
