import React from 'react'

const PlatformActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">By platform</h2>
      <div className="flex justify-between mb-2">
        <span>8 lessons</span>
        <span>12,5 h</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>5 lessons</span>
        <span>6,8 h</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>3 lessons</span>
        <span>4,2 h</span>
      </div>
      <div className="flex justify-between">
        <span>2 lessons</span>
        <span>2,5 h</span>
      </div>
    </div>
  )
}

export default PlatformActivity