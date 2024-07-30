import React from 'react'

const ProgressStatistics = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Progress statistics</h2>
      <p className="text-3xl font-bold">64% <span className="text-lg">Total activity</span></p>
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <div className="text-2xl font-bold">8</div>
          <div>In progress</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">12</div>
          <div>Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">14</div>
          <div>Upcoming</div>
        </div>
      </div>
    </div>
  )
}

export default ProgressStatistics