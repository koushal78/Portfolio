import img1 from '/img5.png'
import img2 from '/img4.png'
import img3 from '/img3.webp'
import { Link, useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()
  
  const Projects = [
    {
      name: "RealTime Chat-App",
      Description: "Built a full-stack real-time chat application using Socket.IO for instant messaging and Zustand for state management. The app supports multiple users, real-time conversations, and a smooth, responsive UI. Backend is powered by Node.js and Express, while the frontend is built with React.js",
      img: img1,
      url: "https://chat-app-eg97.onrender.com/Login",
      technology: [
        { name: 'HTML', url: '/html-5.png' },
        { name: 'Tailwind CSS', url: '/Tailwind CSS.png' },
        { name: 'JavaScript', url: '/js.png' },
        { name: 'React', url: '/react.png' },
        { name: 'Node.js', url: '/Node.js.png' },
        { name: "Express", url: '/Express.png' }
      ]
    },
    {
      name: "Pokémon Finder",
      Description: "Find and explore Pokémon effortlessly using real-time API search. Displays detailed Pokémon data with a smooth and responsive UI. Built with React.js and styled for a clean user experience. Accessible anytime, anywhere from any device.",
      img: img2,
      url: "https://pokemon-fineder.netlify.app/",
      technology: [
        { name: 'HTML', url: '/html-5.png' },
        { name: 'Tailwind CSS', url: '/Tailwind CSS.png' },
        { name: 'JavaScript', url: '/js.png' },
        { name: 'React', url: '/react.png' },
      ]
    },
    {
      name: "News-App",
      Description: "Stay updated with the latest news in real-time, anytime, anywhere. Features categorized news sections, search functionality, and responsive design for optimal viewing across all devices.",
      img: img3,
      url: "http://localhost:5173/Home",
      technology: [
        { name: 'HTML', url: '/html-5.png' },
        { name: 'Tailwind CSS', url: '/Tailwind CSS.png' },
        { name: 'JavaScript', url: '/js.png' },
        { name: 'React', url: '/react.png' },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8 lg:gap-12">
          {Projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 
                         hover:bg-black/60 hover:border-gray-700 hover:shadow-2xl hover:shadow-black/50 
                         transition-all duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <Link to={project.url} target="_blank" className="block">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Project Image */}
                  <div className="flex-shrink-0 lg:w-80">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-2">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg 
                                 transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 
                                   group-hover:text-white transition-all duration-300">
                        {project.name}
                      </h3>
                      
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 
                                  group-hover:text-gray-300 transition-colors duration-300">
                        {project.Description}
                      </p>
                    </div>

                    {/* Technology Stack */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                        Technologies Used
                      </h4>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.technology.map((tech, techIdx) => (
                          <div
                            key={techIdx}
                            className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm 
                                     border border-gray-700 rounded-full px-3 py-2 
                                     hover:bg-gray-700/80 hover:border-gray-600 
                                     transition-all duration-300 group/tech"
                          >
                            <img
                              src={tech.url}
                              alt={tech.name}
                              className="w-5 h-5 rounded-full transform group-hover/tech:scale-110 
                                       transition-transform duration-300"
                            />
                            <span className="text-sm font-medium text-gray-300 
                                           group-hover/tech:text-gray-100 transition-colors duration-300">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-gray-900/10 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                              pointer-events-none"></div>
                
                {/* External Link Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300">
                  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 
                                rounded-full p-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Interested in working together?
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Projects