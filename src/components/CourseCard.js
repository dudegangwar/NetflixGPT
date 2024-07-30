import React from 'react'

const CourseCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 xl:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">Group course</span>
        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Advanced</span>
      </div>
      <h3 className="text-xl font-bold mb-2">English punctuation made easy</h3>
      <p className="text-gray-600 mb-4">Punctuation — learn the basics without the pain. People will never laugh at your punctuation again. You do not require any materials or software.</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <img src="path/to/profile-pic1.jpg" alt="Participant" className="h-8 w-8 rounded-full border-2 border-white -ml-2" />
          <img src="path/to/profile-pic2.jpg" alt="Participant" className="h-8 w-8 rounded-full border-2 border-white -ml-2" />
          <img src="path/to/profile-pic3.jpg" alt="Participant" className="h-8 w-8 rounded-full border-2 border-white -ml-2" />
        </div>
        <div className="text-yellow-500 font-bold">75%</div>
      </div>
      <button className="bg-black text-white py-2 px-4 rounded-full">Continue learning</button>
    </div>
  )
}

export default CourseCard