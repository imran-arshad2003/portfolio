import SpotlightCard from './SpotlightCard';

const Projects = (props) => {
  return (
    <div className="flex flex-col w-full">
      {/* Project image inside SpotlightCard */}
      <SpotlightCard
        className="w-full text-white"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            src={props.image}
            alt={props.name}
          />
        </div>
      </SpotlightCard>

      {/* Project name */}
      <h1 className="text-lg sm:text-xl font-bold text-white mt-4">{props.name}</h1>

      {/* Buttons */}
      <div className="flex gap-3 mt-3">
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 cursor-pointer text-sm flex-1 sm:flex-none"
          onClick={() => window.open(props.liveurl)}
        >
          Live Demo
        </button>
        <button
          className="bg-gray-700 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 cursor-pointer text-sm flex-1 sm:flex-none"
          onClick={() => window.open(props.Githuburl)}
        >
          GitHub
        </button>
      </div>
    </div>
  );
};

export default Projects;