import { FaCode, FaDatabase, FaTools } from 'react-icons/fa'

type Project = {
  title: string
  description: string
  link: string
  tags: string[]
}

type Skill = {
  title: string
  description: string
  icon: JSX.Element
}

const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description: 'A responsive and dynamic portfolio to showcase my work, built with Next.js and TailwindCSS.',
    link: 'https://github.com/vladyslav-holovashchenko-web/portfolio',
    tags: ['Next.js', 'TailwindCSS', 'React'],
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack application with real-time product search, cart functionality, and user authentication.',
    link: 'https://github.com/vladyslav-holovashchenko-web/ecommerce',
    tags: ['Node.js', 'MongoDB', 'React'],
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with socket.io for instant messaging and an intuitive user interface.',
    link: 'https://github.com/vladyslav-holovashchenko-web/chat-app',
    tags: ['Socket.io', 'Node.js', 'Express'],
  },
]

const skills: Skill[] = [
  {
    title: 'Frontend Development',
    description: 'Expertise in React, Next.js, TailwindCSS, and creating responsive, accessible UIs.',
    icon: <FaCode className="text-blue-600 dark:text-blue-300 w-12 h-12" />,
  },
  {
    title: 'Backend Development',
    description: 'Proficient in Node.js, Express, and database technologies like MongoDB and PostgreSQL.',
    icon: <FaDatabase className="text-green-600 dark:text-green-300 w-12 h-12" />,
  },
  {
    title: 'DevOps & Tools',
    description: 'Skilled in Docker, Git, CI/CD pipelines, and cloud platforms like AWS and Vercel.',
    icon: <FaTools className="text-yellow-600 dark:text-yellow-300 w-12 h-12" />,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="relative overflow-hidden flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-30 animate-zoom"></div>
        <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-60"></div>

        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-b from-green-400 to-blue-500 rounded-full blur-2xl opacity-80 animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full blur-lg opacity-60 animate-bounce-slow"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white animate-fade-down">Vladyslav Holovashchenko</h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 animate-fade-up">
            Full Stack JavaScript Developer | Building Modern Web Experiences
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 animate-fade-up-delay"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <section className="py-16 px-8 md:px-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <footer id="contact" className="py-16 px-8 text-center bg-blue-500 dark:bg-blue-800 text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-lg font-light mb-8">
          I’m currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a
          href="mailto:holovashchenko@gmail.com"
          className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </footer>
    </div>
  )
}

function SkillCard({ title, description, icon }: Skill) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, link, tags }: Project) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
        View Project
      </a>
    </div>
  )
}
