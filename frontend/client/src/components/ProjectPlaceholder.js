import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function ProjectPlaceholder({ title }) {
  const letter = title?.charAt(0)?.toUpperCase() || "P";

  return (
    <div className="w-full h-full flex items-center justify-center 
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                    text-white relative overflow-hidden">

      {/* soft pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />

      {/* icon */}
      <div className="absolute top-4 right-4 opacity-60">
        <CodeBracketIcon className="w-8 h-8" />
      </div>

      {/* title initial */}
      <div className="text-6xl font-extrabold opacity-90">
        {letter}
      </div>
    </div>
  );
}
