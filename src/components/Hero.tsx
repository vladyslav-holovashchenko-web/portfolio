import React from 'react'

const Hero: React.FC = () => {
  return (
    <header className="relative overflow-hidden flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-800 dark:to-blue-900">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-30 animate-zoom"></div>
      <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-60"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-b from-green-400 to-blue-500 rounded-full blur-2xl opacity-80 animate-pulse-slow"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full blur-lg opacity-60 animate-bounce-slow"></div>

      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white animate-fade-down">
          Vladyslav Holovashchenko
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-200 mt-4 animate-fade-up">
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
  )
}

export default Hero
