// components/ProjectsSection.tsx

export default function ProjectsSection({
  sectionTitle = "What We've Built",
}) {
  const projects = [
    {
      title: "E-Commerce Platform",
      tags: [
        { name: "Flutter", bg: "bg-blue-500/20", text: "text-blue-300" },
        { name: "Firebase", bg: "bg-purple-500/20", text: "text-purple-300" },
        { name: "MERN", bg: "bg-orange-500/20", text: "text-orange-300" },
      ],
      description:
        "A complete e-commerce solution with mobile and web interfaces...",
      points: [
        "Full app & web experience",
        "Shopping cart & checkout process",
        "Push notifications",
        "Admin dashboard & inventory management",
      ],
      image:"jojocart.png",
    //   layout: "reverse",
      renderVisual: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-md" />
      ),
    },
    {
      title: "Pharma App",
      tags: [
        { name: "Flutter", bg: "bg-blue-500/20", text: "text-blue-300" },
        { name: "NodeJS", bg: "bg-purple-500/20", text: "text-purple-300" },
        { name: "MERN", bg: "bg-orange-500/20", text: "text-orange-300" },
      ],
      description:
        "A pharmaceutical inventory and ordering application connecting pharmacies with suppliers, featuring real-time updates and comprehensive tracking.",
      points: [
        "Medicine ordering system",
        "Supplier integration & syncing",
        "Real-time inventory updates",
        "Order tracking & history",
      ],
      image:"pharma.png",
      layout: "se",
      renderVisual: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-md" />
      ),
    },
  ];
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {sectionTitle}
          </span>
        </h2>

        {projects.map((project, index) => {
          const isReversed = project.layout === "reverse" || index % 2 === 1;
          console.log('isReversed: ', isReversed);
          return (
            <div key={index} className="mb-20">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center `}
              >
                <div
                  className={`relative ${
                    isReversed ? "order-2" : "order-1 md:order-1"
                  }`}
                >
                  {/* {project.renderVisual()} */}
                  <img src={`./${project.image}`} className="object-fill aspect-video h-[300px] w-full" />
                </div>

                <div
                  className={`${
                    isReversed ? "order-1 md:order-2" : "order-2 md:order-2"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs ${tag.bg} rounded-full ${tag.text}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <ul className="text-gray-400 list-disc list-inside space-y-1 mb-6">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
