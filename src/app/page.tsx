import React from 'react'

import { Hero, SkillCard, ProjectCard } from '@/components'
import { skills, projects } from '@/data'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Hero />

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

export default Home
