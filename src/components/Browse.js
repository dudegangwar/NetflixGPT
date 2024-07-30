import React from "react";
import Header from "./Header";
import Activity from "./Activity";
import ProgressStatistics from "./ProgressStatistics";
import CourseCard from "./CourseCard";
import PlatformActivity from "./PlatformActivity";
import Subjects from "./Subjects";

const Browse = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <Activity />
        <Subjects />
        <CourseCard />
        <ProgressStatistics />
        <PlatformActivity />
        
        
      </div>
    </div>
  );
};

export default Browse;
