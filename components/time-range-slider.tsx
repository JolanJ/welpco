"use client"

import { useState, useRef, useEffect } from "react"

interface TimeRangeSliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
  min?: number
  max?: number
  step?: number
}

export default function TimeRangeSlider({ 
  value, 
  onValueChange, 
  min = 0, 
  max = 24, 
  step = 1 
}: TimeRangeSliderProps) {
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent, handle: 'min' | 'max') => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(handle)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(1, x / rect.width))
    const newValue = Math.round((percentage * (max - min) + min) / step) * step

    if (isDragging === 'min') {
      const newMin = Math.min(newValue, value[1] - step)
      onValueChange([newMin, value[1]])
    } else {
      const newMax = Math.max(newValue, value[0] + step)
      onValueChange([value[0], newMax])
    }
  }

  const handleMouseUp = () => {
    setIsDragging(null)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const minPercentage = ((value[0] - min) / (max - min)) * 100
  const maxPercentage = ((value[1] - min) / (max - min)) * 100

  return (
         <div 
       ref={sliderRef}
       className="relative w-full h-8 flex items-center cursor-pointer select-none"
       onMouseDown={(e) => {
        const rect = sliderRef.current?.getBoundingClientRect()
        if (!rect) return
        
        const x = e.clientX - rect.left
        const percentage = x / rect.width
        const newValue = Math.round((percentage * (max - min) + min) / step) * step
        
        // Determine which handle to move based on proximity
        const minDist = Math.abs(newValue - value[0])
        const maxDist = Math.abs(newValue - value[1])
        
        if (minDist < maxDist) {
          const newMin = Math.min(newValue, value[1] - step)
          onValueChange([newMin, value[1]])
        } else {
          const newMax = Math.max(newValue, value[0] + step)
          onValueChange([value[0], newMax])
        }
      }}
    >
      {/* Track */}
      <div className="absolute w-full h-2 bg-gray-300 rounded-full"></div>
      
      {/* Filled segment */}
      <div 
        className="absolute h-2 bg-[#005C3C] rounded-full"
        style={{
          left: `${minPercentage}%`,
          width: `${maxPercentage - minPercentage}%`
        }}
      ></div>
      
             {/* Min handle */}
       <div
         className="absolute w-6 h-6 bg-[#005C3C] rounded-full border-2 border-white shadow-lg cursor-pointer z-10 select-none"
         style={{ left: `calc(${minPercentage}% - 12px)` }}
         onMouseDown={(e) => handleMouseDown(e, 'min')}
       ></div>
       
       {/* Max handle */}
       <div
         className="absolute w-6 h-6 bg-[#005C3C] rounded-full border-2 border-white shadow-lg cursor-pointer z-10 select-none"
         style={{ left: `calc(${maxPercentage}% - 12px)` }}
         onMouseDown={(e) => handleMouseDown(e, 'max')}
       ></div>
    </div>
  )
} 