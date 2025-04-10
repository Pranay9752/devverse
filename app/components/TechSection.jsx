import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiRust,
//   SiJava,
  SiPython,
  SiGo,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiGraphql,
  SiDocker,
  SiBluetooth,
//   SiRest,
} from "react-icons/si";

const techStacks = [
  {
    title: "Frontend",
    techs: [
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
      { name: "Android", icon: <SiAndroid className="text-green-500" /> },
      { name: "iOS", icon: <SiApple className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-200" /> },
      { name: "Rust", icon: <SiRust className="text-orange-400" /> },
    //   { name: "Java", icon: <SiJava className="text-red-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "Go", icon: <SiGo className="text-sky-300" /> },
    ],
  },
  {
    title: "Databases",
    techs: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
      { name: "Redis", icon: <SiRedis className="text-red-400" /> },
    ],
  },
  {
    title: "Tools & APIs",
    techs: [
      { name: "Git", icon: <SiGit className="text-orange-400" /> },
    //   { name: "REST APIs", icon: <SiRest className="text-purple-300" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "BLE", icon: <SiBluetooth className="text-blue-500" /> },
    ],
  },
];

function TechSection() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-black/50 flex justify-center">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <div className=" mx-auto space-y-16">
          {techStacks.map((stack, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-white">
                {stack.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {stack.techs.map((tech, i) => (
                 <div
                 key={i}
                 className="group flex flex-col items-center gap-3 px-5 py-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-blue-500/30 hover:scale-105"
               >
                 <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-800 group-hover:bg-blue-500/10 transition-all duration-300">
                   <div className="text-3xl">{tech.icon}</div>
                 </div>
                 <span className="text-sm text-gray-300 group-hover:text-white font-medium tracking-wide">
                   {tech.name}
                 </span>
               </div>
               
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSection;
