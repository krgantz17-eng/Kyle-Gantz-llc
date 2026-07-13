const projects = [
  {
    title: "Business Website Development",
    description:
      "Modern responsive websites designed to help businesses establish a professional online presence.",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailored software tools built around unique business needs and workflows.",
  },
  {
    title: "Digital Platform Design",
    description:
      "User-focused digital experiences combining clean design with reliable functionality.",
  },
];

export default function Portfolio() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold mb-8">
        Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-gray-800 bg-gray-950 p-6"
          >

            <h3 className="text-xl font-semibold text-blue-400">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {project.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
