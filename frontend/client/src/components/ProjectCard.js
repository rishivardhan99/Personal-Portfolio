import ProjectPlaceholder from "./ProjectPlaceholder";

export default function ProjectCard({ project, onOpen }) {
  const hasImage = project.cover_url;

  return (
    <div
      onClick={onOpen}
      className="group cursor-pointer rounded-xl border 
                 bg-white dark:bg-gray-900
                 border-gray-200 dark:border-gray-800
                 overflow-hidden shadow-sm
                 hover:shadow-xl transition"
    >

      {/* IMAGE / PLACEHOLDER */}
      <div className="h-48 w-full overflow-hidden">
        {hasImage ? (
          <img
            src={project.cover_url}
            alt={project.title}
            className="w-full h-full object-cover 
                       group-hover:scale-105 transition"
          />
        ) : (
          <ProjectPlaceholder title={project.title} />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {project.short_description || "A professional project built with modern technologies."}
        </p>

        <div className="flex gap-3 pt-2 text-sm">
          {project.github && <span className="text-indigo-600">GitHub</span>}
          {project.live && <span className="text-green-600">Live</span>}
        </div>
      </div>
    </div>
  );
}
