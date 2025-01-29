import Image from "next/image";

const projects = [
  { id: 1, title: "Custom Machinery Parts", image: "/images/project1.jpg" },
  { id: 2, title: "Architectural Metal Work", image: "/images/project2.jpg" },
  { id: 3, title: "Industrial Signage", image: "/images/project3.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-off-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono text-white">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <h3 className="text-white text-xl font-semibold p-4">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
