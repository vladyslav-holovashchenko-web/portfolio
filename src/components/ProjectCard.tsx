import React from 'react'

type Project = {
  title: string
  description: string
  link: string
  tags: string[]
}

const ProjectCard: React.FC<Project> = ({ title, description, link, tags }) => {
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

export default ProjectCard
