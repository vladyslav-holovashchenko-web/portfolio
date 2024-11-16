import React from 'react'

type Skill = {
  title: string
  description: string
  icon: JSX.Element
}

const SkillCard: React.FC<Skill> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default SkillCard
