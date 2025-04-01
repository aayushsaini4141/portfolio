"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="md:w-[450px] w-[350px] md:h-[280px] h-[220px] rounded-md cursor-pointer">
      <motion.div
        className="flip-card-inner w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full text-white rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Project Image"
            className="w-full h-full object-fill"
            style={{ backfaceVisibility: 'hidden' }}
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-black text-white rounded-lg p-4 flex flex-col justify-between overflow-hidden"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          <img
            src={image}
            alt="Project Image"
            className="absolute inset-0 w-full h-full object-fill opacity-20"
          />
          <div className="relative flex flex-col gap-10 py-3">
            <h1 className="text-white md:text-2xl text-lg font-medium md:font-semibold">{title}</h1>
            <p className="text-gray-200 md:text-[20px] text-sm">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
