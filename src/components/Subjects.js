import React from 'react'

const Subjects = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 xl:col-span-2">
      <h2 className="text-xl font-bold mb-4">My Subject</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="text-lg font-bold mb-5">Software Engineering</div>
          <div className="text-blue-500 text-[13px] font-extralight">Week 1 Assignment - 100.00</div>
          <div className="text-blue-500 text-[13px] font-extralight">Week 2 Assignment - 100.00</div>
          <div className="text-blue-500 text-[13px] font-extralight">Week 3 Assignment - 100.00</div>
          <div className="text-blue-500 text-[13px] font-extralight">Week 4 Assignment - 100.00</div>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg">
          {/* <div className="text-gray-200">13:00 — 14:00</div> */}
          <div className="text-lg font-bold">Software Testing</div>
          <div className="text-blue-200">Advanced</div>
          <div className="flex items-center mt-2">
            <img src="path/to/mentor-pic.jpg" alt="Mentor" className="h-8 w-8 rounded-full" />
            <span className="ml-2">Cody Fisher</span>
          </div>
          {/* <span className="bg-yellow-500 text-black py-1 px-2 rounded-full absolute top-2 right-2">Now</span> */}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          {/* <div className="text-gray-600">16:00 — 17:00</div> */}
          <div className="text-lg font-bold">Algo Thinking Into Bioinformatics</div>
          <div className="text-blue-500">Beginner</div>
          <div className="flex items-center mt-2">
            <img src="path/to/mentor-pic.jpg" alt="Mentor" className="h-8 w-8 rounded-full" />
            <span className="ml-2">Jacob Jones</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subjects